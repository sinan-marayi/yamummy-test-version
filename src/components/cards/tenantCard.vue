<template>
    <!--TENANT CARD TENANT CARD-->
    <div
              class="flex flex-col mt-4 shadow  border text-center items-center space-y-4 py-6 rounded-lg"
            >
              <div
                class="rounded-full   h-28 w-28 lg:h-36 lg:w-36 profile"
              ><img class="image  border-4 border-gray-400/8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Wzw-FFKH-k2mEt1AiVz7QwYCZWu55pyBuv1X2AGuokRGEQjirZN5vua7nRvUxYURDZU&usqp=CAU" alt=""></div>
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

  <style>
   .image{
    border-radius: 70px;
    overflow: hidden;
   }

  </style>