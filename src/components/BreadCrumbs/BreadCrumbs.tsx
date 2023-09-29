import { useMatches } from 'react-router-dom';

import { Crumb } from './Crumb';

import styles from './styles.module.scss';

export declare type Params<Key extends string = string> = {
  readonly [key in Key]: string | undefined;
};

type Match = typeof useMatches extends () => (infer U)[] ? U : never;

type PathInfo = Match & {
  handle: CrumbData;
};

interface ICrumb {
  path: string;
  name: string;
}

interface CrumbData {
  crumb: {
    path: string;
    name: string;
  };
}

interface BreadCrumbsProps {
  lastCrumb?: string | ICrumb;
}

// eslint-disable-next-line react/prop-types
export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ lastCrumb }) => {
  const matches = useMatches();
  const crumbs: ICrumb[] = (matches as PathInfo[])
    .filter((match: PathInfo) => Boolean(match.handle))
    .map((data: PathInfo) => data.handle.crumb);

  if (typeof lastCrumb === 'string') {
    const crumb = {
      path: '',
      name: lastCrumb,
    };
    crumbs.push(crumb);
  } else if (lastCrumb) {
    crumbs.push(lastCrumb);
  }

  return (
    <nav className={styles.breadcrumbsWrapper}>
      <ul className={styles.breadcrumbs}>
        {crumbs.map(({ path, name }, idx) => {
          const isLastCrumb = idx === crumbs.length - 1;
          return <Crumb path={path} name={name} isLastCrumb={isLastCrumb} key={idx} />;
        })}
      </ul>
    </nav>
  );
};
