import { Dispatch, SetStateAction } from 'react';

export const setFile = (
  fileList: FileList,
  onChange: (file: File | null) => void,
  setFileTypeError: Dispatch<SetStateAction<boolean>>,
) => {
  if (fileList && fileList.length > 0) {
    const file = fileList[0];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (fileExtension === 'jpeg' || fileExtension === 'jpg' || fileExtension === 'png') {
      onChange(file);
      setFileTypeError(false);
    } else {
      onChange(null);
      setFileTypeError(true);
    }
  }
};
