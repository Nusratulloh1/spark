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
    <section class="pt-32 md:pt-60">
      <div class="container mx-auto px-5">
        <div class="flex flex-wrap gap-10 md:gap-0 items-center">
          <h2
            class="w-full max-w-[770px] font-extrabold text-[47px] leading-[48px] md:text-[111px] md:leading-[131px] uppercase"
          >
            Join Us on a Journey – It's Going to Be Exciting!
          </h2>
          <button
            class="bg-[#B9FF66] rounded-[20px] font-semibold text-base px-6 md:px-12 py-4 md:py-7 md:text-[27px]"
          >
            Request early access
          </button>
        </div>
        <p
          class="text-[#898989] font-semibold text-lg md:text-[26px] mt-10 md:mt-20"
        >
          Embark on an adventure with us and discover how thrilling it can be.
          Experience new horizons, earn rewards, and get your desired items from
          around the globe, all while paying with crypto. Let's make every
          journey memorable and profitable together!
        </p>
      </div>
    </section>
    <Footer class="mt-36" />
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
