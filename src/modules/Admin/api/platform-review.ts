import { authUserAxiosInstance } from 'api';
import { endpoints } from 'api/endpoints';
import { AllPlatformReviewsState } from 'store';
import { authAxiosInstance } from 'modules/Auth/api/authAxiosInstance';

import { FormReviewState } from '../types/reviews';

export const getAllPlatformReviews = (id: string): Promise<AllPlatformReviewsState[]> =>
  authUserAxiosInstance
    .get(endpoints.reviews, {
      params: {
        id,
      },
    })
    .then(({ data }) => data);

export const publishReview = (platformId: string, body: FormReviewState) =>
  authAxiosInstance
    .post(endpoints.reviews, body, {
      params: {
        id: platformId,
      },
    })
    .then(({ data }) => data);

export const deleteReview = (reviewId: string) => authAxiosInstance.delete(`${endpoints.reviews}/${reviewId}`);
