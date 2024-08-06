<template>
  <main class="flex flex-col">
    <header
      class="w-full text-6xl font-extrabold tracking-tighter text-black uppercase max-md:max-w-full max-md:text-xl"
    >
      Redefining the global marketplace
    </header>
    <section
      class="mt-28 md:ml-4 w-full max-w-[860px] max-md:mt-5 max-md:max-w-full"
    >
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h1
            class="mt-56 text-6xl font-extrabold text-black uppercase leading-[67px] max-md:mt-2 max-md:text-xl"
          >
            Get all your desired items from around the globe and pay with
            crypto.
          </h1>
        </article>
        <aside class="flex flex-col ml-5 w-6/12 max-md:mx-auto max-md:w-1/2">
          <img
            src="@/assets/images/mobile.png"
            alt=""
            class="object-cover inset-0 size-full"
          />
        </aside>
      </div>
    </section>
  </main>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GlobalMarketplace",
});
</script>