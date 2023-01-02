<template>
  <div class=" w-full md:w-1/4 space-y-2 p-2 flex-col border-r rounded-r-lg">
    <div class="flex h-16 justify-between items-center">
      <h2 class="text-xl font-medium">Inbox</h2>
      <div class="w-4 h-4 bg-green-600 rounded-full"></div>
    </div>
    <router-link v-for="(person, index) in persons" :key="index"
    :to="`/dashboard/messages/${person.id}`" >
    <div 
      class="flex justify-between p-2 shadow  border rounded-md items-center mb-2 "
    >
      <div class="flex items-center justify-between space-x-1">
        <span class="w-10 h-10 flex-none bg-slate-600 rounded-full"> </span>
        <div class="flex flex-col">
          <span class="text-sm font-medium">
            <span class="truncate">{{person.name}}</span>
          </span>
          <span class="flex space-x-2">
            <span class="text-sm font-normal truncate"> Kelana Jaya </span>
            <span class="text-sm font-normal"> (Budget RM900) </span>
          </span>
        </div>
      </div>
     
      <div class="flex items-center justify-between space-x-1">
        <div
          class="w-7 h-7 text-center items-center justify-center text-sm bg-green-600 rounded-full"
        >
          <p class="pt-1">1</p>
        </div>
      </div>
    </div>
</router-link>
  </div>
</template>

<script>
export default {
  name: "Inbox",
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
        ]
    }}
};
</script>

<style></style>
