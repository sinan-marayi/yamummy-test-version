<template>
  <section class="mt-4">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between">
        <div class="flex flex-1 flex-col">
          <h2 class="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Editors choice
          </h2>
          <p class="lg:w-3/6">
            Handpicked listing by the editors in Kuala Lumpur
          </p>
        </div>
        <div class="">
          <span class="flex items-center space-x-5">
            <a
              href="#"
              class="rounded-full border border-solid border-slate-400 text-sm px-4 py-2"
            >
              Show all
            </a>    
            <img src="../../assets/img/card/Nextleft_arrow_button.png" alt="" />
            <img
              src="../../assets/img/card/Nextright_arrow_button.png"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6 mt-3 gap-4 scroll-pl-1 card-scroll auto-cols-[minmax(85%,_21fr)] md:auto-cols-[minmax(24.7%,_21fr)] lg:auto-cols-[minmax(19.7%,_21fr)]" >
      <SquareCard></SquareCard>
      <SquareCard></SquareCard>
      <SquareCard></SquareCard>
      <SquareCard></SquareCard>
      <SquareCard></SquareCard>
      <SquareCard></SquareCard>
    </div>
  </section>
</template>

<script>
import SquareCard from "../cards/squareCard.vue";
export default {
  name: "SquareCards",
  components: {
    SquareCard,
  },
};
</script>
