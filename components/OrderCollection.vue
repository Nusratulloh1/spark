<template>
  <div>
    <section
      class="flex flex-col py-16 pr-5 pl-12 mt-12 w-full bg-neutral-800 rounded-[32px] max-md:pl-5 max-md:mt-10 max-md:max-w-full"
    >
      <h1
        class="self-start text-4xl font-bold text-center text-white uppercase max-md:max-w-full"
      >
        Meet with the traveler and collect your order
      </h1>
      <div class="mt-16 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col mt-5 text-xl font-medium text-center text-zinc-400 max-md:mt-10 max-md:max-w-full"
            >
              <p class="max-md:max-w-full">
                Using Spark's Telegram group and channel system with a dedicated
                bot for each order, arrange a mutually convenient time and
                location to meet the traveler. We will release the payment to
                the traveler once you confirm that you have received your order.
              </p>
              <p class="mt-8 max-md:mr-2.5 max-md:max-w-full">
                If the traveler is unable to deliver your order, all funds will
                be refunded. Using the TON systems, all payments are secured
                until you receive your ordered items, ensuring a safe and
                transparent transaction.
              </p>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76fe33de80fb3532617657c3da6947feb0df7510fe9aca9b82821dd0600a415a?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6"
              alt="Illustration of order collection process"
              class="object-contain grow w-full aspect-[1.53] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderCollectionComponent",
});
</script>