<template>
  <div>
    <h1 class="title"></h1>
    <p>{{ page }}</p>
  </div>
</template>

<script setup>
  const route = useRoute()

  const {data: page} = await useFetch(`/api/posts/${route.params.slug}`)

</script>
