import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = (props: { children: JSX.Element }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return <>{props.children}</>;
};
