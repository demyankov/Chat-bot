import { FieldError } from 'react-hook-form';
import { LegacyRef, forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

import { setFile } from './helpers';

import { ErrorIcon } from '../../assets/index';

export interface IFileInputProps {
  id: string;
  label?: string;
  error?: FieldError;
  value?: File | null;
  onChange: (file: File | null) => void;
  imageLink: string;
}

export const FileInput = forwardRef(
  ({ id, label, error, value, onChange, imageLink }: IFileInputProps, ref: LegacyRef<HTMLInputElement> | undefined) => {
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [fileTypeError, setFileTypeError] = useState<boolean>(false);

    useEffect(() => {
      if (value) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(value);
      } else {
        setPreviewUrl(imageLink);
      }
    }, [value, imageLink]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      if (fileList) setFile(fileList, onChange, setFileTypeError);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const fileList = event.dataTransfer.files;
      if (fileList) setFile(fileList, onChange, setFileTypeError);
    };

    const customInputStyle = cn(styles.fileInputCustom, {
      [styles.inputError]: error,
    });

    return (
      <div className={styles.fileInputWrapper} onDragOver={handleDragOver} onDrop={handleDrop}>
        <label htmlFor={id} className={styles.label}>
          {label && <span>{label}</span>}
          <input
            id={id}
            className={styles.fileInputDefault}
            type="file"
            accept=".jpeg, .jpg, .png"
            onChange={handleFileChange}
            ref={ref}
          />
          <div className={customInputStyle}>
            {previewUrl && <img className={styles.previewImg} src={previewUrl} alt="Preview" />}
          </div>
        </label>
        {fileTypeError && (
          <span className={styles.errorMessage}>
            <ErrorIcon /> Неверный формат файла. Пожалуйста загрузите JPEG или PNG формат.
          </span>
        )}
        {error?.message && <span className={styles.errorMessage}>{` (${error.message})`}</span>}
      </div>
    );
  },
);
