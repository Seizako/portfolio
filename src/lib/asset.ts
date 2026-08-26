// Résout un chemin de public/ en tenant compte de la base du site.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
