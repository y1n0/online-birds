<script setup>
import ArrowLeftSolid from "./icons/ArrowLeftSolid.vue";
import ArrowRightSolid from "./icons/ArrowRightSolid.vue";
import { ref, watch, computed } from "vue";

const props = defineProps(["items"]);

const current = ref(0);
const container = ref(null);

const count = computed(() =>
    props.items?.length || 0
)

const elmSize = computed(() => {
  if (container.value === null) return 0;
  return container.value.firstElementChild.clientWidth;
});

function goPrevious() {
  if (current.value === 0) current.value = count.value - 1;
  else current.value--;
}

function goNext() {
  if (current.value === count.value - 1) current.value = 0;
  else current.value++;
}

watch(current, (next) => {
  if (container.value === null) return;
  container.value.scrollTo({ left: next * elmSize.value });
});

</script>

<template>
  <div class="p-10">
    <div class="absolute top-[calc(50%-20px)] inset-x-10 flex justify-between">
      <button @click="goPrevious" class="p-4 text-white">
        <ArrowLeftSolid class="" />
      </button>
      <button @click="goNext" class="p-4 text-white">
        <ArrowRightSolid class="" />
      </button>
    </div>
    <div
      ref="container"
      class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
    >
      <img
        v-for="item in props.items"
        :key="item.id"
        :src="item.url"
        :alt="`image ${item.id}`"
        class="snap-start"
      />
    </div>
  </div>
</template>
