<template>
  <NuxtLink :to="`/blogs/${post.slug}`" class="blog-post-teaser teaser">
    <h3 class="teaser__title">{{ post.title }}</h3>
  </NuxtLink>
</template>

<script setup>
defineProps(["post"])
</script>
