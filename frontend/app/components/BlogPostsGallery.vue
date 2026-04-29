<template>
  <div class="blog-posts-gallery">
    <BlogPostTeaser v-for="post in posts" :post="post" />
  </div>
</template>

<script setup>
defineProps(["posts"])
</script>
