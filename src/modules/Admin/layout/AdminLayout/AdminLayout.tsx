import { Outlet, useLocation } from 'react-router';

import { BreadCrumbs } from 'components';

import { menuList } from 'modules/Admin/config/menuList';

import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

import { AdminHeader, MenuNavAdmin } from '../../components';

export const AdminLayout = () => {
  const { pathname } = useLocation();
  const [breadcrumbsText, setBreadcrumbsText] = useState('');

  useEffect(() => {
    const currentPath = pathname;
    const currentMenuItem = menuList.find((item) => currentPath.endsWith(item.to));
    if (currentMenuItem && currentMenuItem.to !== 'dashboard') {
      setBreadcrumbsText(currentMenuItem.text);
      return;
    }
    setBreadcrumbsText('');
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${styles.layout}`}>
        <AdminHeader />
        <MenuNavAdmin />
        <div className={styles.main}>
          <BreadCrumbs lastCrumb={breadcrumbsText} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
