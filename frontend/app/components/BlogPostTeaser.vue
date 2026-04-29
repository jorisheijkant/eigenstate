<template>
  <NuxtLink :to="`/blogs/${post.slug}`" class="blog-post-teaser teaser">
  <ExtendedImage :imageObject="imageObject" :imageUrl="imageUrl" :hasCaption="false" /> 
    <h3 class="teaser__title">{{ post.title }}</h3>
    <p class="teaser__description"> {{ post.description }} </p>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["post"])

const imageObject = computed(() => {
  return props.post?.image
})

const imageUrl = computed(() => {
  return props.post?.image?.formats.small?.url
})

</script>

<style scoped lang="scss">
.teaser {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__title {
    margin: 10px 0;
  }
}
</style>
