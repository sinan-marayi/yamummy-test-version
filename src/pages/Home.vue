<template>
  <FilterButton></FilterButton>
  <PrimaryCards></PrimaryCards>
  <SquareCards></SquareCards>
  <ApartmentCard></ApartmentCard>
</template>

<script>
import FilterButton from "../components/buttons/filterButton.vue";
import PrimaryCards from "../components/cardSections/primaryCards.vue";
import SquareCards from "../components/cardSections/squareCards.vue";
import ApartmentCard from "../components/cardSections/apartmentCards.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    FilterButton,
    PrimaryCards,
    SquareCards,
    ApartmentCard,
  },
};
</script>
