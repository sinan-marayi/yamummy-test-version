<template>
  <navbar></navbar>
  <FilterButton></FilterButton>
  <PrimaryCards></PrimaryCards>
  <SquareCards></SquareCards>
  <ApartmentCards></ApartmentCards>
  <defaultCards></defaultCards>
</template>

<script>
import FilterButton from "../components/buttons/filterButton.vue";
import PrimaryCards from "../components/cardSections/primaryCards.vue";
import SquareCards from "../components/cardSections/squareCards.vue";
import ApartmentCards from "../components/cardSections/apartmentCards.vue";
import defaultCards from "../components/cardSections/defaultCards.vue";
import navbar from "../components/navbar.vue"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    FilterButton,
    PrimaryCards,
    SquareCards,
    ApartmentCards,
    defaultCards,
    navbar,
  },
};
</script>
