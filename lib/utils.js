// Fonction helper pour gérer les chemins d'assets
// En production avec basePath, Next.js gère automatiquement les chemins pour les imports
// mais pas pour les URLs dans le style inline
export const getAssetPath = (path) => {
  // Le basePath est déjà inclus dans process.env.__NEXT_ROUTER_BASEPATH en production
  const basePath = typeof window !== 'undefined' && window.__NEXT_DATA__?.props?.pageProps?.__N_ROUTER_BASEPATH || '';
  return `${basePath}${path}`;
};
