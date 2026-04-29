<template>
  <header class="header">
    <div class="header__main">
      <NuxtLink to="/" class="header__main home_link">
        <img class="header__logo" src="/logo_extra_thick_bare.svg" />
        <p class="home_link">Eigenstate</p>
      </NuxtLink>
    </div>
    <div class="header__nav">
      <NuxtLink to="/about" class="header__nav_link">About</NuxtLink>
      <NuxtLink to="/alternatives" class="header__nav_link">Alternatives</NuxtLink>
      <NuxtLink to="/music" class="header__nav_link">Music</NuxtLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #9E8A05;

  &__main, &__nav {
    width: auto;
    height: 80px;
  }

  &__main { 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}

.header__logo {
  height: 40px;
  margin-right: 10px;
}

.header__nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.header__nav_link {
  margin: 0 10px;
}
</style>
