import {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TABS } from './constants';
import { Tab } from './types';
import { APP_ROUTES } from '../../constants/appRoutes';

type Props = {
  children: ReactNode;
};

const BasicLayout = ({ children }: Props) => {
  const [subTabOpenIds, setSubNavOpenIds] = useState(new Set());

  const location = useLocation();
  const navigateToPage = useNavigate();

  const handleClickLogoIcon = () => navigateToPage(APP_ROUTES.OVERVIEW);
  const findActiveNavigationTab = useCallback(
    (tabs: Tab[], parentItem?: number) => {
      let newSelectedNavItem: number | null = null;

      const currentRoute = location.pathname;

      tabs.forEach((item: Tab) => {
        const isCurrentRouteSelected = currentRoute === item.link;

        if (isCurrentRouteSelected) {
          newSelectedNavItem = item.id;

          return;
        } else if (item.subTab) {
          const activeTab = findActiveNavigationTab(
            item.subTab,
            item.id,
          );

          if (activeTab) {
            subTabOpenIds.add(item.id);

            if (parentItem) {
              subTabOpenIds.add(parentItem);
            }

            setSubNavOpenIds(subTabOpenIds);
          }
        }
      });

      return newSelectedNavItem;
    },
    [location.pathname, subTabOpenIds],
  );

  const deleteSubNavOpenIdsItem = (id: number) => {
    subTabOpenIds.delete(id);
    setSubNavOpenIds(subTabOpenIds);
  };
  const addSubNavOpenIdsItem = (id: number) => {
    subTabOpenIds.add(id);
    setSubNavOpenIds(subTabOpenIds);
  };

  useLayoutEffect(() => {
    findActiveNavigationTab(TABS);
  }, [findActiveNavigationTab]);

  return (
    <>
      <div>
        <main className="lg:pl-64">
          <div className="px-4 sm:px-6 md:px-7 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default BasicLayout;
