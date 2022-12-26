<template>
  <section class="font-chivo h-16 flex w-full sticky top-0 z-50 bg-[#d1d5db]" role="navbar">
    <div class="p-4 font-semibold item-center justify-start">
      Borak*
    </div>
    <div class="w-full">
      <ul class="flex justify-end">
      <li  v-for="(menu, index) in navMenu" :key="index" class="p-4">
        <div class="font-semibold hover:font-extralight hover:cursor-pointer">
          {{ menu.title }}
        </div>
      </li>
    </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NavMenu } from '~~/constant/nav-menu'
const navMenu = NavMenu
</script>