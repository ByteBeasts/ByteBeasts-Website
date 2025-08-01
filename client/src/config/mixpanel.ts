export const MIXPANEL_CONFIG = {
  token: import.meta.env.VITE_MIXPANEL_TOKEN || '',
  
  options: {
    debug: import.meta.env.DEV,
    track_pageview: true,
    persistence: 'localStorage' as const,
    ip: false,
    property_blacklist: [],
  }
}; 