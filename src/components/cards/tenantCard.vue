<template>
    <!--TENANT CARD TENANT CARD-->
    <div
              class="flex flex-col mt-4 shadow  border text-center items-center space-y-4 py-6 rounded-lg"
            >
              <div
                class="rounded-full bg-green-400 border-4 border-gray-400/8 h-28 w-28 lg:h-36 lg:w-36"
              ><img src="" alt=""></div>
              <div class=" flex flex-col">
                <slot/>
                <div class="flex items-center text-center justify-center pb-2">
                  <span class="">India</span>
                </div>
                <div
                  class="flex flex-col items-center text-center justify-center"
                >
                  <span class="font-light">Ara Damansara</span>
                  <span  class="font-normal">1 person, RM500</span>
                </div>
              </div>
            </div>
  </template>
  <script>
  export default {
    name: "TenantCard",
  };
  </script>