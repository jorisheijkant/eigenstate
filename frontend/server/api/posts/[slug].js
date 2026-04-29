export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const config = useRuntimeConfig()

  const data = await $fetch(`${config.public.strapiUrl}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
    headers: {
      Authorization: `Bearer ${config.strapiToken}`,
    },
  })

  return data
})
