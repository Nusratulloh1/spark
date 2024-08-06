<template>
  <NuxtLayout>
    <div>
      <!-- <NuxtPage /> -->
    </div>
  </NuxtLayout>
  <ClientOnly>
    <MiniApp />
  </ClientOnly>
</template>
  
  <script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import MiniApp from "~/components/MiniApp.vue";
const route = useRoute();

if ("setup" in route.query) {
  throw new Error("error in setup");
}
if ("mounted" in route.query) {
  onMounted(() => {
    throw new Error("error in mounted");
  });
}
</script>