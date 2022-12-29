<template>
    <!--TENANT CARD TENANT CARD-->
    <div
              class="flex flex-col bg-purple-500 text-center items-center space-y-4 py-4 rounded-lg"
            >
              <div
                class="rounded-full bg-green-400 border-4 border-red-400 h-28 w-28 lg:h-36 lg:w-36"
              ></div>
              <div class="bg-yellow-600 flex flex-col">
                <h3 class="text-base font-medium">Martin Maravattickal</h3>
                <div class="flex items-center text-center justify-center">
                  <span class="">India</span>
                </div>
                <div
                  class="flex flex-col items-center text-center justify-center"
                >
                  <span class="">Ara Damansara</span>
                  <span class="">1 person, RM500</span>
                </div>
              </div>
            </div>
  </template>
  <script>
  export default {
    name: "TenantCard",
  };
  </script>