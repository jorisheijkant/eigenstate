<template>
  <header class="header">
    <div class="header__main">
      <NuxtLink to="/" class="header__main home_link">
        <img class="header__logo" src="/logo_extra_thick_bare.svg" />
        <p class="home_link">Eigenstate</p>
      </NuxtLink>
    </div>

    <div class="header__nav__desktop">
      <NuxtLink to="/about" class="header__nav_link">About</NuxtLink>
      <NuxtLink to="/alternatives" class="header__nav_link">Alternatives</NuxtLink>
      <NuxtLink to="/music" class="header__nav_link">Music</NuxtLink>
    </div>

    <button class="hamburger" @click="toggleMenu" :aria-expanded="isOpen" aria-label="Toggle navigation">
      <span class="bar" :class="{ 'is-active': isOpen }"></span>
      <span class="bar" :class="{ 'is-active': isOpen }"></span>
      <span class="bar" :class="{ 'is-active': isOpen }"></span>
    </button>

    <div class="mobile-nav" :class="{ 'is-open': isOpen }">
      <div class="mobile-nav__content">
        <NuxtLink to="/about" class="mobile-nav__link" @click="closeMenu">About</NuxtLink>
        <NuxtLink to="/alternatives" class="mobile-nav__link" @click="closeMenu">Alternatives</NuxtLink>              
        <NuxtLink to="/music" class="mobile-nav__link" @click="closeMenu">Music</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script>
const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

</script>

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

  &__main, &__nav__desktop {
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

.header__nav__desktop {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.header__nav_link {
  margin: 0 10px;
}

.hamburger {
  display: none; 
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  .bar {
    height: 3px;
    width: 100%;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }

  .bar.is-active:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .bar.is-active:nth-child(2) {
    opacity: 0;
  }
                          
  .bar.is-active:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

.mobile-nav {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 3;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s 0.3s, opacity 0.3s ease;

  &.is-open {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100%;
    background: white;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    padding: 60px 20px 20px 20px;

    .mobile-nav.is-open & {  
      transform: translateX(0);
    }
  }

     
  &__link {
    display: block;
    padding: 15px 0;
    font-size: 1.2rem;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
}

@media (max-width: 768px) {
  .header__nav__desktop {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}


</style>
