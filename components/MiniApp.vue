<template>
  <div>
    <TopSection v-if="currentScreen == 1" />
    <div v-else-if="currentScreen == 2" class="container mx-auto px-5 pt-5">
      <GlobalMarketplace />
    </div>
    <div class="container mx-auto px-5 pt-5" v-else-if="currentScreen == 3">
      <Shapaholic />
    </div>
    <OrderCollection v-else-if="currentScreen == 4" />
    <TravelDetails v-else-if="currentScreen == 5" />
    <MainButton color="#000000" text="Continue" @click="nextScreen()" />
  </div>
</template>
<script lang="ts" setup>
import { MainButton } from "vue-tg";
import { ref } from "vue";
import TopSection from "./topSection.vue";
import GlobalMarketplace from "./GlobalMarketplace.vue";
import Shapaholic from "./Shapaholic.vue";
import OrderCollection from "./OrderCollection.vue";
import TravelDetails from "./TravelDetails.vue";
import Footer from "./Footer.vue";
const currentScreen = ref(3);
const nextScreen = () => {
  currentScreen.value = currentScreen.value + 1;
};
</script>