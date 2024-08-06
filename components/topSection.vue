<template>
  <div class="flex relative flex-col items-start text-black pt-10">
    <div class="container mx-auto px-5">
      <header
        class="flex overflow-hidden z-0 flex-wrap gap-5 justify-between items-center self-stretch w-full text-xl font-semibold leading-snug max-md:px-5 max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97ef75f7b61b69ce9ac057b79ec2264b38f676542bf2a352dcc9c5923f1a9e8e?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6"
          alt=""
          class="object-contain shrink-0 self-stretch my-auto aspect-[4.42] w-[177px]"
        />
        <nav
          class="hidden md:flex flex-wrap gap-5 justify-center items-center self-stretch my-auto min-w-[240px] max-md:max-w-full"
        >
          <a href="#about" class="self-stretch my-auto">About us</a>
          <a href="#roadmap" class="self-stretch my-auto">Roadmap</a>
          <a href="#use-cases" class="self-stretch my-auto">Use Cases</a>
          <a
            href="#request-access"
            class="gap-2.5 self-stretch px-9 py-5 my-auto text-center text-white bg-black rounded-2xl min-w-[240px] max-md:px-5"
          >
            Request early access
          </a>
        </nav>
      </header>
    </div>
    <div class="container mx-auto px-5">
      <main
        class="flex flex-wrap lg:flex-nowrap gap-5 overflow-hidden z-0 items-center justify-start lg:justify-between pt-9 pb-2 mt-16 max-w-full w-full max-md:px-5 max-md:mt-10"
      >
        <section class="flex flex-col max-w-full w-[531px]">
          <h1
            class="text-5xl font-extrabold leading-10 uppercase max-md:max-w-full max-md:text-4xl max-md:leading-10"
          >
            Explore the world without limits.
            <br />Get the items you've always desired WITH CRYPTO.
          </h1>
          <p class="mt-9 text-xl font-semibold leading-7 max-md:max-w-full">
            Spark is a decentralized peer-to-peer marketplace that connects
            shoppers with travelers willing to bring them products from abroad.
            Leveraging the TON blockchain, Spark ensures secure and transparent
            transactions, making cross-border shopping more accessible and
            affordable.
          </p>
        </section>
        <img
          loading="lazy"
          src="@/assets/images/global.svg"
          alt="Illustration of global shopping concept"
          class="object-contain z-0 w-[80%] lg:w-full aspect-[1.19] h-full max-h-[473px] max-w-[565px] flex"
        />
      </main>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExploreWorld",
});
</script>
