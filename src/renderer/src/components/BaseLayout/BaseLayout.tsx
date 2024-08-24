import {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { navigationItems, navigationItems2 } from './constants';
import DesktopLeftSideBar from './DesktopLeftSideBar';
import { Tab } from './types';
import { APP_ROUTES } from '../../constants/appRoutes';

type Props = {
  children: ReactNode;
};

const BasicLayout = ({ children }: Props) => {
  const [subNavOpenIds, setSubNavOpenIds] = useState(new Set());

  const location = useLocation();
  const navigateToPage = useNavigate();

  const handleClickLogoIcon = () => navigateToPage(APP_ROUTES.OVERVIEW);
  const findActiveNavigationTab = useCallback(
    (navigationItems: Tab[], parentItem?: number) => {
      let newSelectedNavItem: number | null = null;

      const currentRoute = location.pathname;

      navigationItems.forEach((item: Tab) => {
        const isCurrentRouteSelected = currentRoute === item.link;

        if (isCurrentRouteSelected) {
          newSelectedNavItem = item.id;

          return;
        } else if (item.subTab) {
          const activeNavigationTab = findActiveNavigationTab(
            item.subTab,
            item.id,
          );

          if (activeNavigationTab) {
            subNavOpenIds.add(item.id);

            if (parentItem) {
              subNavOpenIds.add(parentItem);
            }

            setSubNavOpenIds(subNavOpenIds);
          }
        }
      });

      return newSelectedNavItem;
    },
    [location.pathname, subNavOpenIds],
  );

  const deleteSubNavOpenIdsItem = (id: number) => {
    subNavOpenIds.delete(id);
    setSubNavOpenIds(subNavOpenIds);
  };
  const addSubNavOpenIdsItem = (id: number) => {
    subNavOpenIds.add(id);
    setSubNavOpenIds(subNavOpenIds);
  };

  useLayoutEffect(() => {
    findActiveNavigationTab(navigationItems);
    findActiveNavigationTab(navigationItems2);
  }, [findActiveNavigationTab]);

  return (
    <>
      <div>
        <main className="lg:pl-64">
          <div className="px-4 sm:px-6 md:px-7 lg:px-8">{children}</div>
        </main>

        <DesktopLeftSideBar
          deleteSubNavOpenIdsItem={deleteSubNavOpenIdsItem}
          addSubNavOpenIdsItem={addSubNavOpenIdsItem}
          subNavOpenIds={subNavOpenIds}
          handleClickLogoIcon={handleClickLogoIcon}
        />
      </div>
    </>
  );
};

export default BasicLayout;
