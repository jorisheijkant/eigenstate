export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const data = await $fetch(`${config.public.strapiUrl}/api/landing-page`, {
    headers: {
      Authorization: `Bearer ${config.strapiToken}`,
    },
  })

  return data
})

