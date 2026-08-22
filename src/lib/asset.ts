// Ajoute le préfixe /portfolio/ devant un chemin de public/.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
