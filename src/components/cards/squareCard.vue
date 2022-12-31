<template>
  <div class="card">
    <img src="../../assets/img/card/Rectangle22Square_card_image.png" alt="" />
    <div class="flex flex-col">
      <span class="mt-2 text-sm font-medium">Single Room <slot></slot> </span>
      <h3 class="text-base font-light mt-1 leading-5">
        Fully furnished 2bedroom 2bathroom condo unit.
      </h3>
      <h4 class="text-sm mt-1 font-light">Chinatown, Kuala lumpur</h4>
      <span class="mt-1 text-sm font-normal">RM 400</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "squareCard",
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".card");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  },
};
</script>

<style scoped>
.card{
  opacity: 0.4;
 transition-duration: .5s;

}
.show{
  opacity:1;
}
</style>
