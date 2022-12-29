<template>
  <div class="flex h-screen">
        <!--NAV MENU-->
        <nav class="bg-red-500 w-28 hidden md:flex flex-col justify-between pt-2 pb-4">
            <div class="flex flex-col bg-amber-500 items-center space-y-6">
                <div class="flex flex-none bg-purple-600">
                    <span class="w-14 h-14 flex-none bg-slate-600 rounded-full">
                    </span>
                </div>
                <div class=" flex flex-col w-full flex-none bg-cyan-600 items-center space-y-2">
                    <a href="./dash_messages.html" class="w-full flex flex-col items-center bg-yellow-400">
                        <span class="w-10 h-10 flex-none bg-slate-600 rounded-full">
                        </span>
                        <span class="text-base font-medium">Message</span>
                    </a>
                    <a href="./dash_tenants.html" class="w-full flex flex-col items-center bg-yellow-400">
                        <span class="w-10 h-10 flex-none bg-slate-600 rounded-full">
                        </span>
                        <span class="text-base font-medium">Tenants</span>
                    </a>
                    <div class="w-full flex flex-col items-center bg-yellow-400">
                        <span class="w-10 h-10 flex-none bg-slate-600 rounded-full">
                        </span>
                        <span class="text-base font-medium">Listings</span>
                    </div>
                    <div class="w-full flex flex-col items-center bg-yellow-400">
                        <span class="w-10 h-10 flex-none bg-slate-600 rounded-full">
                        </span>
                        <span class="text-base font-medium">Profile</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-full h-48 bg-blue-700 mx-auto items-center justify-between">
                <div class="w-full flex flex-col items-center bg-yellow-400">
                    <span class="w-10 h-10 flex-none bg-slate-600 rounded-full">
                    </span>
                    <span class="text-base font-medium">Settings</span>
                </div>
                <span class="w-14 h-14 flex-none bg-slate-600 rounded-full">
                </span>
            </div>
        </nav>
        <!-- inbox component -->
        <inbox></inbox>
        <MessageComponent></MessageComponent>
        
         <!--MOBILE NAV MOBILE NAV-->
    <nav
      class="h-20 grid md:hidden grid-cols-4 bg-red-600 fixed bottom-0 z-40 w-full items-center"
    >
      <div class="bg-green-400 flex items-center h-full">
        <a
          href="./dash_messages.html"
          class="w-full justify-center flex flex-col items-center bg-yellow-400 h-full"
        >
          <span
            class="w-10 h-10 flex justify-center items-center flex-none rounded-full"
          >
            <svg
              class="items-center justify-center"
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
              />
            </svg>
          </span>
          <span class="text-base font-medium">Message</span>
        </a>
      </div>
      <div class="bg-green-400 flex items-center h-full">
        <a
          href="./dash_messages.html"
          class="w-full justify-center flex flex-col items-center bg-yellow-400 h-full"
        >
          <span
            class="w-10 h-10 flex justify-center items-center flex-none rounded-full"
          >
            <svg
              id="Layer_1"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path
                d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"
              />
            </svg>
          </span>
          <span class="text-base font-medium">Tenants</span>
        </a>
      </div>
      <div class="bg-blue-400 flex items-center h-full">
        <a
          href="./dash_messages.html"
          class="w-full justify-center flex flex-col items-center bg-yellow-400 h-full"
        >
          <span
            class="w-10 h-10 flex justify-center items-center flex-none rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z"
              />
              <path
                d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z"
              />
            </svg>
          </span>
          <span class="text-base font-medium">Profile</span>
        </a>
      </div>
      <div class="bg-green-400 flex items-center h-full">
        <a
          href="./dash_messages.html"
          class="w-full justify-center flex flex-col items-center bg-yellow-400 h-full"
        >
          <span
            class="w-10 h-10 flex justify-center items-center flex-none rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
              />
              <path
                d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"
              />
            </svg>
          </span>
          <span class="text-base font-medium">Settings</span>
        </a>
      </div>
    </nav>
  </div>

</template>

<script>
import inbox from "../../components/Dashboard/Inbox.vue"
import MessageComponent from "../../components/Dashboard/Message.vue"

export default {
name:"message",
components:{
    inbox,
    MessageComponent,
}
}
</script>

<style>

</style>