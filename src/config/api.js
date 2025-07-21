// API Configuration
const API_CONFIG = {
  // Production API URL (deployed on Render)
  PRODUCTION: 'https://song-management-backend-9rpz.onrender.com/api',
  
  DEVELOPMENT: 'http://localhost:4000/api',
  
  CURRENT: 'PRODUCTION'
};

// Get the current API base URL
export const getApiBaseUrl = () => {
  return API_CONFIG[API_CONFIG.CURRENT];
};

// API endpoints
export const API_ENDPOINTS = {
  SONGS: '/songs',
  HEALTH: '/health',
  API_DOCS: 'https://song-management-backend-9rpz.onrender.com/api-docs'
};

// Full API URLs
export const API_URLS = {
  SONGS: `${getApiBaseUrl()}${API_ENDPOINTS.SONGS}`,
  HEALTH: `${getApiBaseUrl()}${API_ENDPOINTS.HEALTH}`,
  API_DOCS: API_ENDPOINTS.API_DOCS
};

export default API_CONFIG; 