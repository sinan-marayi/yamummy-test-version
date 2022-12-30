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
          <span class="hidden md:flex items-center space-x-5">
            <a
              href="#"
              class="rounded-full border border-solid border-slate-400 text-sm px-4 py-2"
            >
              Show all
            </a>
            <img
              @click="prev"
              class="hover:shadow hover:opacity-80 rounded-full"
              src="../../assets/img/card/Nextleft_arrow_button.png"
              alt=""
            />
            <img
              @click="next"
              class="hover:shadow hover:opacity-80 rounded-full"
              src="../../assets/img/card/Nextright_arrow_button.png"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
    <div
      id="card-sec"
      class="container box-border mx-auto px-6 mt-3 gap-4 scroll-pl-1 card-scroll overflow-x-scroll auto-cols-[minmax(85%,_21fr)] md:auto-cols-[minmax(24.7%,_21fr)] lg:auto-cols-[minmax(19.7%,_21fr)]"
    >
      <SquareCard>
        <div>1</div>
      </SquareCard>
      <SquareCard>
        <div>2</div>
      </SquareCard>
      <SquareCard>
        <div>3</div>
      </SquareCard>
      <SquareCard>
        <div>4</div>
      </SquareCard>
      <SquareCard>
        <div>5</div>
      </SquareCard>
      <SquareCard>
        <div>6</div>
      </SquareCard>
      <SquareCard>
        <div>7</div>
      </SquareCard>
      <SquareCard>
        <div>8</div>
      </SquareCard>
      <SquareCard>
        <div>9</div>
      </SquareCard>
      <SquareCard>
        <div>10</div>
      </SquareCard>
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
  methods: {
    next() {
      let section = document.getElementById("card-sec");
      section.scrollLeft += section.clientWidth;
    },
    prev() {
      let section = document.getElementById("card-sec");
      section.scrollLeft -= section.clientWidth;
    },
  },
};
</script>

<style>
</style>