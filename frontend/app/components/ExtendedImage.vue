<template>
  <figure class="extended-image">
    <img class="image" :src="imageUrl" :alt="imageAlt" />
    <figcaption v-if="imageCaption" class="figcaption">
      {{ imageCaption }}
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps(["imageObject", "image", "hasCaption"])

const imageUrl = computed(() => {
  if(props.image) {
    return props.image
  } 
  return props.imageObject?.url
})

const imageAlt = computed(() => {
  return props.image?.alternativeText
})

const imageCaption = computed(() => {
  return props.image?.caption
})

</script>

<style scoped lang="scss">
.extended-image {
  width: 100%;
  height: auto;
}

.extended-image .image {
  width: 100%;
  height: auto;
}
</style>
