import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { MIXPANEL_CONFIG } from '../config/mixpanel';

let isInitialized = false;

export const useMixpanel = () => {
  useEffect(() => {
    if (!isInitialized && MIXPANEL_CONFIG.token && MIXPANEL_CONFIG.token.length > 0) {
      mixpanel.init(MIXPANEL_CONFIG.token, MIXPANEL_CONFIG.options);
      isInitialized = true;
      
      if (import.meta.env.DEV) {
        console.log('Mixpanel inicializado con token:', MIXPANEL_CONFIG.token.substring(0, 8) + '...');
      }
    } else if (!MIXPANEL_CONFIG.token && import.meta.env.DEV) {
      console.warn('Mixpanel token no encontrado. Agrega VITE_MIXPANEL_TOKEN a tu archivo .env');
    }
  }, []);

  const trackPageView = (pageName?: string) => {
    if (!isInitialized) return;
    
    mixpanel.track('Page View', {
      page: pageName || window.location.pathname,
      url: window.location.href,
      timestamp: new Date().toISOString()
    });
  };

  const trackVisitor = () => {
    if (!isInitialized) return;
    
    mixpanel.track('Site Visit', {
      url: window.location.href,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent
    });
  };

  return {
    trackPageView,
    trackVisitor,
    mixpanel,
    isInitialized
  };
}; 