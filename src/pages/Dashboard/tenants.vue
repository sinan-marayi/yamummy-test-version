<template>
     <!--USER LIST-->
     <div class=" w-full flex-auto ">
        <div
          class="flex flex-col  px-2 py-2 md:px-4 md:py-4 lg:px-6 lg:py-6 2xl:px-12 2xl:py-8 space-y-3"
        >
          <div class="flex flex-col ">
            <h1 class="text-xl font-medium">Pick your next tenant.</h1>
            <p class="text-base">
              Start inviting your favorite tenant from the list.
            </p>
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 2xl:gap-8 "
          >
            <TenantCard
              v-for="(person, index) in persons"
              :key="person.id"
              @click="openModal(index)"
            >
              <div>
                <p class="font-medium text-lg">{{ person.name }}</p>
              </div>
            </TenantCard>
          </div>
        </div>
      </div>
    

    <!--OFF CANVAS OFFCANVAS-->
    <TenantModal
      v-if="toggleModal"
      @close="closeModal"
      :person="person"
    ></TenantModal>
</template>

<script>
import TenantModal from "../../components/dashboardTenantModal.vue";
import TenantCard from "../../components/cards/tenantCard.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tenants",
  components: {
    TenantModal,
    TenantCard,
  },
  data() {
    return {
      persons: [
        {
          id: 1,
          name: "Martin Maravattickal",
        },
        {
          id: 2,
          name: "Amos Maravattickal",
        },
        {
          id: 3,
          name: "Martin Maravattickal",
        },
        {
          id: 4,
          name: "Sinan Marayi",
        },
        {
          id: 5,
          name: "Anburaja",
        },
      ],
      toggleModal: false,
      person: {},
    };
  },
  methods: {
    closeModal() {
      this.toggleModal = false;
    },
    openModal(index){
      this.toggleModal = true;
      this.person = this.persons[index]
    }
  },
};
</script>

<style>



</style>