<script setup>
import { RouterView } from 'vue-router'
</script>
 
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
 
    <div class="wrapper">
 
      <nav>
        <a href="/en">English</a>
        <a href="/es">Español</a>
      </nav>
    </div>
  </header>
 
  <RouterView />
</template>
 
 
