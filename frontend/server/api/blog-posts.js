export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const data = await $fetch(`${config.public.strapiUrl}/api/blog-posts?populate=*`, {
    headers: {
      Authorization: `Bearer ${config.strapiToken}`,
    },
  })

  return data
})
