import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { calendar } from 'modules/Admin/assets';
import { useFetchReviews } from 'hooks';
import { useParams } from 'react-router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { deleteReview, publishReview } from 'modules/Admin/api';
import { FormReviewState } from 'modules/Admin/types/reviews';
import { useSearchParams } from 'react-router-dom';
import { ReviewCardResp } from 'store';
import { reviewFormSchema } from 'modules/Auth/data/reviewSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import styles from './styles.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

export const AdminReviews = () => {
  const { platformId } = useParams();
  const [isLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedReview, setSelectedReview] = useState<ReviewCardResp | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { reviews, updateReview, fetchReviews } = useFetchReviews(platformId);
  const isEditing = searchParams.get('isEdit');
  const reviewId = searchParams.get('reviewId');
  const [textLength, setTextLength] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const datePickerRef = useRef(null);
  const [isEditingReview, setIsEditingReview] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    setValue,
    trigger,
    clearErrors,
  } = useForm<FormReviewState>({
    mode: 'onChange',
    resolver: yupResolver(reviewFormSchema),
  });

  const resetForm = useCallback(() => {
    reset({
      date: format(new Date(), 'yyyy-MM-dd'),
      author: '',
      text: '',
    });
  }, [reset]);

  const resetEditing = () => {
    reset();
    setSearchParams('');
    setSelectedReview(null);
    resetForm();
    setTextLength(0);
    setIsEditingReview(false);
    setSelectedDate(null);
  };

  const handleDelete = (id: string) => {
    deleteReview(id)
      .then(() => {
        if (platformId) {
          fetchReviews(platformId);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Ошибка при удалении отзыва:', err);
      });
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setTextLength(text.length);
    setValue('text', event.target.value);
    trigger('text');
  };

  const handleCalendarClick = () => {
    setCalendarOpen((prev) => !prev);
  };

  const handleDateChange = (date: Date) => {
    handleCalendarClick();
    setSelectedDate(date);
    setValue('date', date.toISOString());
    clearErrors('date');
  };

  const onSubmit: SubmitHandler<FormReviewState> = async (data) => {
    try {
      await reviewFormSchema.validate(data);

      if (isEditing && reviewId) {
        if (selectedDate) {
          data.date = selectedDate.toISOString();
        }

        updateReview(reviewId, data).then(() => {
          resetEditing();
          setIsFormSubmitted(true);
          resetForm();
          setTextLength(0);
          setIsEditingReview(false);
          setSelectedDate(null);
        });
      } else if (platformId) {
        if (selectedDate) {
          data.date = selectedDate.toISOString();
        }
        publishReview(platformId, data).then(() => {
          fetchReviews(platformId);
          resetForm();
          setTextLength(0);
          setIsEditingReview(false);
          setSelectedDate(null);
        });
      }
    } catch (err: any) {
      setError('Не удалось получить отзывы. Пожалуйста, попробуйте позже.');
    }
  };

  useEffect(() => {
    if (reviewId) {
      setSelectedReview(reviews.find((item) => item.id === reviewId) ?? null);
      if (isEditing && selectedReview) {
        setSelectedDate(new Date(selectedReview.date)); // Установка selectedDate

        resetForm();
        reset({
          date: format(new Date(selectedReview.date), 'yyyy-MM-dd'),
          author: selectedReview.author,
          text: selectedReview.text,
        });
        setTextLength(selectedReview.text.length);
      }
    }

    if (isFormSubmitted) {
      reset();
      setIsFormSubmitted(false);
    }
  }, [reviewId, reviews, reset, setSelectedReview, isEditing, selectedReview, isFormSubmitted, resetForm]);

  return (
    <div className={styles.admin}>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label htmlFor="date" className={styles.label}>
          Дата отзыва
          <div className={styles.wrap}>
            <Controller
              control={control}
              name="date"
              render={({ field: { value } }) => (
                <>
                  <DatePicker
                    id="date"
                    selected={selectedDate}
                    placeholderText="__.__.____"
                    className={styles.date}
                    onChange={(date) => date instanceof Date && handleDateChange(date)}
                    ref={datePickerRef}
                    open={isCalendarOpen}
                    customInput={<input value={value && formattedDate} onClick={handleCalendarClick} />}
                    dateFormat="dd/MM/yyyy"
                    locale={ru}
                  />
                  <img src={calendar} alt="calendar" className={styles.calendar} onClick={handleCalendarClick} />
                </>
              )}
            />
          </div>
        </label>
        {errors.date && <div className={styles.error}>{errors.date.message}</div>}
        <label htmlFor="author" className={styles.label}>
          Имя пользователя
          <input
            type="text"
            id="author"
            {...register('author', { required: true })}
            defaultValue={selectedReview ? selectedReview.author : ''}
            className={styles.name}
          />
        </label>
        {errors.author?.message && <div className={styles.error}>{errors.author.message}</div>}
        <label htmlFor="text" className={styles.label}>
          Отзыв
          <textarea
            id="text"
            {...register('text', { required: true })}
            className={styles.textarea}
            maxLength={500}
            defaultValue={selectedReview ? selectedReview.text : ''}
            onChange={handleTextChange}
          />
        </label>
        <div className={styles.container}>
          {errors.text?.message && <div className={styles.error}>{errors.text.message}</div>}
          <div className={styles.count}>{textLength}/200</div>
        </div>
        <button type="submit" className={styles.btn} disabled={isLoading}>
          {!isEditing ? 'Опубликовать' : 'Изменить'}
        </button>
        {isEditingReview && (
          <button type="button" className={styles.btn} disabled={isLoading} onClick={resetEditing}>
            Отмена
          </button>
        )}
      </form>
      {reviews.length > 0 ? (
        <div className={styles.reviews}>
          <ul className={styles.list}>
            {reviews.map((review, index) => (
              <li key={index}>
                <p className={styles.text}>Отзыв</p>
                <div className={`${styles.item} ${review.id === reviewId ? styles.editing : ''}`}>
                  <div className={styles.container}>
                    <p className={styles.nameTxt}>{review.author}</p>
                    <p className={styles.txt}>{review.date && format(new Date(review.date), 'dd/MM/yyyy')}</p>
                  </div>
                  <p className={styles.rvTxt}>{review.text}</p>
                  <div className={styles.container}>
                    <button
                      className={styles.btnTxt}
                      type="button"
                      onClick={() => {
                        setIsEditingReview(true);
                        const params = new URLSearchParams([
                          ['isEdit', 'true'],
                          ['reviewId', review.id],
                        ]);
                        setSearchParams(params);
                        if (review.text) {
                          const event = {
                            target: {
                              value: review.text,
                            },
                          } as ChangeEvent<HTMLTextAreaElement>;
                          handleTextChange(event);
                        }
                      }}
                    >
                      Редактировать
                    </button>
                    <button className={styles.btnTxt} type="button" onClick={() => handleDelete(review.id)}>
                      Удалить
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.list}>
          <p className={styles.text}>Нет отзывов</p>
        </div>
      )}
    </div>
  );
};
