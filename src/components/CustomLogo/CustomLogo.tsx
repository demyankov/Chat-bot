import str from 'string-to-color';
import Color from 'color';

import styles from './styles.module.scss';

const generateCustomLogoStyle = (name: string): Record<string, string> => {
  const generatedBackground = str(name);
  const color = Color(generatedBackground);
  const isLight = color.luminosity() > 0.75;
  const gradientColor = isLight ? color.darken(0.4) : color.lighten(0.35);
  return {
    background: `linear-gradient(${isLight ? '225deg' : '45deg'}, ${generatedBackground}, ${gradientColor})`,
    color: isLight ? '#8d8d8d' : '#fff',
    textShadow: `1px 1px 5px ${isLight ? '#fff' : '#8d8d8d'}`,
  };
};

interface CustomLogoProps {
  /**
   * Текст для генерации логотипа
   *
   */
  title: string;
  small?: boolean;
}

export const CustomLogo = ({ title, small = false }: CustomLogoProps) => (
  <div style={generateCustomLogoStyle(title)} className={`${styles.customLogo} ${small && styles.smallCustomLogo}`}>
    <span className={`${styles.customLogoText} ${small && styles.smallCustomLogoText}`}>{title[0]}</span>
  </div>
);
