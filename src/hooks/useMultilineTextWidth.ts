import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import { useWindowSize } from './useWindowSize';

export interface UseComputeHeightProps {
  fullText: string;
  containerElement: HTMLElement | null;
  setText: (text: string) => void;
  setVisibleBtn?: Dispatch<SetStateAction<boolean>>;
  isOpenFullText?: boolean;
}

const parsePixels = (value: string): number => (value === 'normal' ? 1 : parseInt(value, 10));

const computeFullWordWidth = (
  lettersWidth: number,
  letterSpacing: string,
  wordSpacing: string,
  countOfLetters: number,
): number =>
  lettersWidth +
  (parsePixels(letterSpacing) ? parsePixels(letterSpacing) * (countOfLetters - 1) : 0) +
  (parsePixels(wordSpacing) ? parsePixels(wordSpacing) : 0);

/**
 * функция для разбиения текста на массив строк, исходя из ширины блока
 */

const calculateMultilineTextWidth = (
  text: string,
  font: string,
  containerWidth: number,
  letterSpacing: string,
  wordSpacing: string,
): string[] => {
  const canvas = document.createElement('canvas');
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (!context) throw Error('Element not found');
  context.font = font;

  const words = text.split(' ');
  let line = '';
  const lines = [];
  let currentWidth = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordWidth = context.measureText(word).width;
    const fullWordWidth = computeFullWordWidth(wordWidth, letterSpacing, wordSpacing, word.length);
    if (currentWidth + fullWordWidth <= containerWidth) {
      line += `${word} `;
      currentWidth += fullWordWidth;
    } else {
      lines.push(line.trim());
      line = `${word} `;
      currentWidth = fullWordWidth;
    }
  }

  lines.push(line.trim());

  return lines;
};

const useComputeHeight = ({
  fullText,
  containerElement,
  setText,
  setVisibleBtn,
  isOpenFullText,
}: UseComputeHeightProps): void => {
  const [styleReady, setStyleReady] = useState(false);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (containerElement) {
      const { lineHeight, height, fontSize, fontFamily, width } = window.getComputedStyle(containerElement);
      if (lineHeight && height && fontSize && fontFamily && width) {
        setStyleReady(true);
      }
    }
  }, [containerElement]);

  useEffect(() => {
    if (styleReady) {
      const computeHeight = (): void => {
        const {
          lineHeight,
          height,
          fontSize,
          fontFamily,
          width,
          letterSpacing,
          wordSpacing,
          paddingBottom,
          paddingTop,
          paddingLeft,
          paddingRight,
        } = window.getComputedStyle(containerElement!);
        const widthMinusPadding = parseFloat(width) - parseFloat(paddingLeft) - parseFloat(paddingRight);
        const heightMinusPadding = parseFloat(height) - parseFloat(paddingTop) - parseFloat(paddingBottom);
        const lines = calculateMultilineTextWidth(
          fullText,
          `${fontSize} ${fontFamily}`,
          widthMinusPadding,
          letterSpacing,
          wordSpacing,
        );
        const isBlockHeightLessThanText = lines.length * parseFloat(lineHeight) >= heightMinusPadding;
        if (setVisibleBtn) {
          if (isBlockHeightLessThanText) {
            setVisibleBtn(true);
          } else {
            setVisibleBtn(false);
          }
        }
        if (isBlockHeightLessThanText && !isOpenFullText) {
          let currentText = '';
          let textHeight = 0;
          let chunkTextIdx = 0;
          while (textHeight + parseInt(lineHeight, 10) < heightMinusPadding) {
            currentText += `${lines[chunkTextIdx]} `;
            textHeight += parseInt(lineHeight, 10);
            chunkTextIdx += 1;
          }
          const textWithDots = `${currentText}...`;
          setText(textWithDots);
        } else {
          setText(fullText);
        }
      };

      if (containerElement) {
        computeHeight();
      }
    }
  }, [fullText, containerElement, setText, setVisibleBtn, isOpenFullText, styleReady, windowSize]);
};

export { useComputeHeight };
