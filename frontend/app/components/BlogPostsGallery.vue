<template>
  <div class="blog-posts-gallery">
    <BlogPostTeaser v-for="post in posts" :post="post" />
  </div>
</template>

<script setup>
defineProps(["posts"])
</script>

<style scoped lang="scss">
.blog-posts-gallery {
  display: grid;
  grid-template-columns: 1fr;
  padding: 30px;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 30px;
    gap: 30px;
  }
}
</style>
