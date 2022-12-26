<template>
  <section class="md:container md:mx-auto" role="main">
    <Navbar />
    <div class="relative px-6 font-chivo py-20 md:py-48">
      <div class="py-10">
        Hey there, thank you for visiting my website.
      </div>
      <div class="text-center">
        I am currently working as a Web Engineer <a href="https://kh.linkedin.com/company/mangobyte"><span class="text-orange-500 font-semibold">@MangoByte</span></a>. I work with backend and frontend development for web app.
      </div>
      <div class="py-10">
       I would love explore mobile development someday, maybe later...
      </div>
      <div class="py-10">
       Anyway, cheers and happy coding! &ndash; Borak 👨‍💻  
      </div>
      <section class="flex justify-center font-semibold">
        <label for="title" class=" text-2xl">Quote of the day</label>
      </section>
      <div class="text-center py-5">
       <span class="italic">
        &ldquo;{{ quote.content }}&rdquo;
       </span> &ndash; {{ quote.author}}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

  useHead({
    title: 'Borak*',
  })
 const { data } = await useAsyncData('random', () => $fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
)

const quote = ref<any>(data)

</script>
