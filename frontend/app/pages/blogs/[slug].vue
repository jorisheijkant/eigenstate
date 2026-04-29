<template>
  <main class="main">
    <article class="article">
      <h1 class="article__title">{{ postTitle }}</h1>

      <ExtendedImage class="article__image" :imageObject="postImage" />
      <p class="article__lead">{{ postDescription }}</p>

    </article>
  </main>
</template>

<script setup>
  const route = useRoute()

  const {data: post} = await useFetch(`/api/posts/${route.params.slug}`)

  const firstPost = computed(() => {
    if (!post.value) return undefined
    return post.value.data?.[0] 
  })

  const postTitle = computed(() => {
    if(!firstPost.value) return undefined
    return firstPost.value.title
  })

  const postDescription = computed(() => {
    if(!firstPost.value) return undefined
    return firstPost.value.description
  })

  const postImage = computed(() => {
    if(!firstPost.value) return undefined 
    return firstPost.value.image
  })

</script>

<style scoped lang="scss">
.article {
  max-width: 800px;
  padding: 30px;

  &__title {
    margin-bottom: 30px;
  }

  &__image {
    margin-bottom: 30px;
  }
}
</style>
