import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  getCharacteristics,
  getPlatform,
  getPlatformSolutions,
  getUser,
  setError,
  useAppDispatch,
  useAppSelector,
} from 'store';

import { setPlatformDetailsAction, getPlatformFavoriteAction } from 'store/actions';
import { StarIcon } from 'assets';
import { PlatformSolutionList, PlatformReviewList, BreadCrumbs, CharacteristicsList } from 'components';
import { Loading } from 'sharedComponents/Loading/Loading';

import { addPlatformInFavorites, deletePlatformFromFavorites } from 'api';

import { ModalInfo } from 'sharedComponents';

import { changeWordForm, WordFormsList } from 'helpers';

import styles from './styles.module.scss';

import { CustomLogo } from '../../components/CustomLogo/CustomLogo';

import buttonStyle from '../../styles/button.style.module.scss';

const SOLUTION_WORD_FORMS: WordFormsList = ['решение', 'решений', 'решения'];

export const PlatformDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { platformId } = useParams();
  const { isAuth, id } = useAppSelector(getUser);
  const { platform, isLoading, error } = useAppSelector(getPlatform);
  const { name, isFavorites, fileUrl, description, urlWebsite } = platform;
  const characteristics = useAppSelector(getCharacteristics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (platformId && id) {
      dispatch(setPlatformDetailsAction({ id, platformId }));
    } else if (platformId) {
      dispatch(setPlatformDetailsAction({ platformId }));
    }
  }, [dispatch, platformId, id]);

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
      setErrorMessage(error);
    }
  }, [error]);

  const solutions = useAppSelector(getPlatformSolutions);

  const rightFormOfWord = changeWordForm(SOLUTION_WORD_FORMS, solutions.length);

  const clearError = () => {
    dispatch(setError(null));
  };

  const toggleAction = platform.isFavorites ? deletePlatformFromFavorites : addPlatformInFavorites;

  const handleFavorite = () => {
    if (id && platformId) {
      toggleAction(id, platformId)
        .then(() => {
          dispatch(getPlatformFavoriteAction({ platformId }));
        })
        .catch(() => {
          setIsModalOpen(true);
        });
    }
  };

  const startIconClass = !isFavorites ? styles.starEmpty : '';

  const layout = isLoading ? (
    <div className={styles.loader}>
      <Loading delay={0} />
    </div>
  ) : (
    <section className={styles.section}>
      <div className={styles.platform}>
        <BreadCrumbs lastCrumb={{ name, path: `platform/${id}` }} />
        <div className={styles.wrapper}>
          <section className={styles.header}>
            <div className={styles.headerContentTop}>
              <h2>{name}</h2>
              {isAuth && (
                <button className={styles.favoriteButton} type="button" onClick={handleFavorite}>
                  <StarIcon className={startIconClass} />В избранное
                </button>
              )}
            </div>
            <div className={styles.headerContentBottom}>
              {fileUrl ? (
                <img className={styles.logo} src={`http://${fileUrl}`} alt={`logo platform ${name}`} />
              ) : (
                <CustomLogo title={name} />
              )}
              <p className={styles.text}>{description}</p>
            </div>
          </section>
          <section className={styles.characteristics}>
            <div className={styles.characteristicsList}>
              <CharacteristicsList characteristics={characteristics} title="Характеристики" />
            </div>
            <div className={styles.characteristicsButtonWrapper}>
              <Link to={urlWebsite}>
                <button className={buttonStyle.invertButton} type="button">
                  Перейти на сайт платформы
                </button>
              </Link>
            </div>
          </section>
          <section className={styles.solutions}>
            <div className={styles.sectionTitle}>
              <h3 className={styles.sectionTitleHeader}>
                {`${solutions.length} готовых ${rightFormOfWord}`}&nbsp;
                <span className={styles.sectionTitleName}>{`на базе \u00AB${name}\u00BB`}</span>
              </h3>
            </div>
            <PlatformSolutionList />
          </section>
          <section className={styles.reviews}>
            <h3 className={styles.sectionTitle}>Отзывы о платформе</h3>
            <PlatformReviewList />
          </section>
        </div>
        <ModalInfo isOpen={isModalOpen} setIsOpen={setIsModalOpen} message={errorMessage} handleClick={clearError} />
      </div>
    </section>
  );
  return layout;
};
