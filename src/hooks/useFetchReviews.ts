import { useEffect, useState } from 'react';
import { endpoints } from 'api/endpoints';
import { authAxiosInstance } from 'modules/Auth/api/authAxiosInstance';
import { ReviewCardResp } from 'store';
import { FormReviewState } from 'modules/Admin/types/reviews';

export const useFetchReviews = (platformId: string | undefined) => {
  const [reviews, setReviews] = useState<ReviewCardResp[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchReviews = async (id: string) => {
    try {
      const response = await authAxiosInstance.get(endpoints.reviews, {
        params: {
          id,
        },
      });
      setReviews(response.data);
      setError(null);
    } catch (err) {
      setError('Не удалось получить отзывы. Пожалуйста, попробуйте позже.');
    }
  };

  useEffect(() => {
    if (platformId) {
      fetchReviews(platformId);
    }
  }, [platformId]);

  const updateReview = async (reviewId: string, data: FormReviewState) => {
    try {
      const response = await authAxiosInstance.patch(`${endpoints.reviews}/${reviewId}`, data);
      const updatedReview = response.data;
      setReviews((prevReviews) =>
        prevReviews.map((review) => (review.id === updatedReview.id ? updatedReview : review)),
      );
    } catch (err) {
      setError('Не удалось обновить отзывы. Пожалуйста, попробуйте позже.');
    }
  };

  return { reviews, fetchReviews, updateReview, setReviews, error };
};
