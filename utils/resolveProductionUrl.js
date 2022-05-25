// All Slugs go here...
const globalSlugs = {
  home: '/',
  works: '/works',
  studio: '/studio',
  journal: '/journal',
  contact: '/contact',
}

const secret = process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET
export const getGlobalSlug = (slug) => globalSlugs[slug]

// Change remote url...
const remoteURL = 'https://west-of-west.vercel.app'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=skX61xvSWguyfpzqBt2mudIqp7Jb6bdEJ9vmJ2dk5Qjd3ONqkidgBNZaPFyxn62LmaEMgkxQOUAZwPf1bgUFdCoJrWCKyMkkCx7PuHobefnf93FE6h3AonmjPlM1m54Horpv2oMRbOqSsG6ILmEMOFdJVsSf6IRNruolEU0CiktWaoVWx8nL&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
