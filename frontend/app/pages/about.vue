<template>
  <main class="main">
    <h1 class="page-header">{{ aboutPageTitle }}</h1>
    <article class="article">
      <StrapiBlocks :content="aboutPageContent" />
    </article>
  </main>
</template>

<script setup>
import {StrapiBlocks} from 'vue-strapi-blocks-renderer'

const {data: aboutPage} = await useFetch(`/api/about-page`)

const aboutPageTitle = computed(() => aboutPage.value?.data.title ?? '')

const aboutPageDescription = computed(() => aboutPage.value?.data.description ?? '')

const aboutPageContent = computed(() => aboutPage.value?.data.content ?? '')
</script>

<style scoped lang="scss">
.page-header {
  margin-bottom: 30px;
}
</style>
