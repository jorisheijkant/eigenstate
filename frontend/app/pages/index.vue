<template>
  <main class="main">
    <BlogPostsGallery :posts="blogPostsArray" />
  </main>
</template>

<script setup>
const [{ data: landingPage }, { data: blogPosts }] = await Promise.all([
  useFetch('/api/landing-page'),
  useFetch('/api/blog-posts')
])

const landingPageTitle = computed(() => landingPage.value?.data.title ?? '')

const landingPageDescription = computed(() => landingPage.value?.data.description ?? '')

const blogPostsArray = computed(() => blogPosts.value?.data ?? [])

</script>
