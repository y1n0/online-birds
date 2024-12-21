<script setup>
import Slider from "./components/Slider.vue"
import {ref} from "vue"

const endpoint = 'http://localhost:3000/images';
const data = ref(null);

fetch(endpoint)
  .then((res) => res.json())
  .then((json) => data.value = json.images)
  .catch((error) => console.log(error))

</script>

<template>
  <section class="flow-root">
    <div class="mb-32 grid lg:grid-cols-2 items-center">
      <div class="p-10">
        <h1 class="text-5xl font-bold mb-5">Lorem ipsum dolor sit amet</h1>
        <p>
          consectetur adipisicing elit. Maxime dignissimos obcaecati eaque culpa
          pariatur recusandae ipsum earum iusto officiis vero! Vitae laudantium
          quae sit et id! Consequatur vero ut laborum.
        </p>
      </div>
      <div class="relative">
        <Slider :items="data" />

        <div class="absolute left-32 -right-16 -bottom-16 z-[-1] p-10">
          <img
            width="1792"
            height="1024"
            class="h-full w-auto opacity-20"
            src="./assets/secondary-image/secondary-image-1.webp"
            alt="bg image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

