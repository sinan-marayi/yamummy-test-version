<template>
  <div class="flex-auto hidden md:flex ">
    <!--CHAT WINDOW-->
    <div class="flex flex-col border-r rounded-md justify-between w-2/3 p-2">
      <div class="flex h-16  justify-between items-center">
        <h2 class="text-xl font-medium">Messages</h2>
        <div class="w-10 h-10 bg-slate-500 rounded-full"></div>
      </div>
      <div
        class="flex flex-col flex-auto overflow-y-auto  space-y-4"
      >
        <!--CHAT-->
        <div class="flex space-x-2">
          <div class="w-7 h-7 flex-none rounded-full bg-slate-500"></div>
          <div class="flex flex-col bg-pink-500 rounded-md p-2 max-w-md">
            <span class="font-medium">Martin Maravattickal</span>
            <p class="font-base">
              Lorem ipsum dolor sit amet molestias minima sit, facere
              dignissimos.
            </p>
          </div>
        </div>
        <!--CHAT-->
        <div class="flex flex-row-reverse space-x-2 space-x-reverse">
          <div class="w-7 h-7 flex-none rounded-full bg-slate-500"></div>
          <div class="flex flex-col bg-pink-500 rounded-md p-2 max-w-md">
            <span class="font-medium">{{person[0].name}}</span>
            <p class="font-base">
              Lorem ipsum dolor sit amet molestias minima sit, facere
              dignissimos.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col flex-none  h-36 justify-between ">
        <div
          class="flex flex-auto  overflow-y-auto items-start align-top justify-start mb-1"
        >
          <input
            class="flex w-full items-start justify-start align-top border overflow-clip h-full shadow-inner mx-1 rounded-md "
            placeholder="Type your message here"
            type="text"
          />
        </div>
        <div class="flex  justify-between">
          <div class="flex  py-2 space-x-3 flex-none">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
            </a>
          </div>
          <div class="flex  items-center flex-none">
            <a
              href="#"
              class="px-3 py-1 text-center items-center bg-pink-500 rounded border mr-1"
            >
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
    <ListingView></ListingView>
  </div>
</template>

<script>
import ListingView from "../../components/Dashboard/ListingView.vue";

export default {
  name: "MessageComponent",
  components: {
    ListingView,
  },
  data() {
    return {
      persons: [
        {
          id: 33,
          name: "Anburaja",
        },
        {
          id: 44,
          name: "Amos Maravattickal",
        },
        {
          id: 55,
          name: "Martin Maravattickal",
        },
      ],
      id: 0,
      person:[]
    };
  },watch:{
    $route(){
        this.getPerson()
    }
  },
  created() {
    this.getPerson()
  },
  methods:{
    getPerson(){
        this.id=  this.$route.params.id;
        this.person = this.persons.filter(item => this.id == item.id)
        console.log(this.person)
    }
  }

};
</script>

<style></style>
