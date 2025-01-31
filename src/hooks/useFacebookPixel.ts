import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: any;
  }
}

export function useFacebookPixel() {
  const location = useLocation();

  useEffect(() => {
    // Track pageview on route change
    window.fbq('track', 'PageView');
  }, [location]);
}