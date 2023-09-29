import { useState } from 'react';
import {
  clearPlatformsForDeletingFromViewed,
  getCountOfPlatformsForDeletingFromViewed,
  getIsSelectMode,
  toggleSelectMode,
  useAppDispatch,
  useAppSelector,
} from 'store';

import { CleanTarget } from './config';

interface CleanHistoryProps {
  target: CleanTarget;
}

export const CleanHistory = ({ target }: CleanHistoryProps) => {
  const [isShowSelectButtons, setIsShowSelectButtons] = useState(false);
  const isSelectMode = useAppSelector(getIsSelectMode);
  const countOfSelectedPlatforms = useAppSelector(getCountOfPlatformsForDeletingFromViewed);

  // позже добавить количество решений
  const selectedCount = target === CleanTarget.PLATFORMS ? countOfSelectedPlatforms : 0;

  const dispatch = useAppDispatch();

  const handleToggleSelectButtons = () => {
    setIsShowSelectButtons((prev) => !prev);
  };

  const handleToggleSelectMode = () => {
    if (target === CleanTarget.PLATFORMS) {
      dispatch(toggleSelectMode());
    }
    if (target === CleanTarget.SOLUTIONS) {
      // прописать логику для решений
    }
  };

  const handleCancel = () => {
    if (target === CleanTarget.PLATFORMS) {
      dispatch(clearPlatformsForDeletingFromViewed());
    }
    if (target === CleanTarget.SOLUTIONS) {
      // прописать логику для решений
    }

    handleToggleSelectButtons();
  };

  return (
    <>
      {!isShowSelectButtons && (
        <button type="button" className="buttonWithoutBorder" onClick={handleToggleSelectButtons}>
          Очистить историю
        </button>
      )}
      {isShowSelectButtons && !isSelectMode && (
        <div>
          <button type="button" className="button buttonSecondary" onClick={handleToggleSelectMode}>
            Выбрать
          </button>
          <button type="button" className="buttonWithoutBorder buttonRemove">
            Удалить все
          </button>
        </div>
      )}
      {isSelectMode && (
        <div>
          <button type="button" className="button buttonSecondary" onClick={handleCancel}>
            Отменить
          </button>
          <button type="button" className="buttonWithoutBorder buttonRemove" disabled={!selectedCount}>
            Удалить <span>({selectedCount})</span>
          </button>
        </div>
      )}
    </>
  );
};
