<template>
  <div>
    <TopSection />
    <div class="container mx-auto px-5 py-24 md:py-56">
      <GlobalMarketplace />
    </div>
    <div class="container mx-auto px-5">
      <h2
        class="self-center text-center pb-72 text-6xl font-extrabold tracking-tighter text-black uppercase max-md:max-w-full max-md:text-4xl"
      >
        HOW IT WORKS?
      </h2>
      <Shapaholic />
      <OrderCollection class="mt-[50px]" />
      <TravelDetails class="mt-[50px]" />
    </div>
    <Footer class=" mt-36" />
  </div>
</template>

<script lang="ts" setup>
import { useSampleStore } from "~/store/sample";
import TopSection from "../components/topSection.vue";
import GlobalMarketplace from "../components/GlobalMarketplace.vue";
import Shapaholic from "../components/Shapaholic.vue";
import OrderCollection from "../components/OrderCollection.vue";
import TravelDetails from "../components/TravelDetails.vue";
import Footer from "../components/Footer.vue";
const Store = useSampleStore();

function changeSampleStoreData(testString: string) {
  Store.setSampleData(testString);
}
</script>
