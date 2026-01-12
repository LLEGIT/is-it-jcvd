// Fonction helper pour gérer les chemins d'assets en production
export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/is-it-jcvd' : '';
  return `${basePath}${path}`;
};
