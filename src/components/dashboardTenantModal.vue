<template>
<!--OFF CANVAS OFFCANVAS-->

<div class="flex flex-col sm:w-1/2 md:w-2/5 lg:w-1/4 h-screen border-l-4 border-l-gray-300/20  rounded-l-2xl bg-white fixed top-0 right-0 z-50 px-4">
        <div class="flex h-12  items-center justify-end " @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        </div>
        <div class="flex flex-col flex-auto space-y-4 overflow-y-auto pb-16">

            <div class="flex flex-col  items-center justify-center">
                <div class="flex bg-red-200 rounded-full border-8 h-28 w-28 lg:h-36 lg:w-36 mb-4">
                    <img src="">
                </div>
                <h2 class="flex text-2xl  justify-center font-medium ">{{ person.name }}</h2>
            </div>


            <div class="flex flex-col items-center justify-center ">
                <span class="text-xs font-light">
                    Budget
                </span>
                <h3 class="text-md font-medium">
                    RM750 - RM900
                </h3>
                <a href="#" class="bg-rose-500 rounded-md py-2 px-5 mt-2 font-medium">
                    Send invitation
                </a>
                <span class="text-xs font-light mt-2">
                    3 invitation received
                </span>
            </div>


            <div class="flex flex-col items-start  border-t">
                <div class=" mt-4">
                    <span class="text-xs font-extralight">
                        Space required
                    </span>
                    <h3 class="text-xl font-medium">
                        Private room
                    </h3>
                </div>
                <div class="">
                    <span class="text-xs font-extralight">
                        Preferred Location
                    </span>
                    <h3 class="text-xl font-medium">
                        Kelana Jaya, Petaling Jaya
                    </h3>
                </div>
            </div>


            <div class="flex  border-t">
                <div class="flex flex-col mt-4  w-full space-y-2">
                    <div class="grid grid-cols-2 w-full">
                        <span class="text-base">Gender</span>
                        <span class="text-base">Male</span>
                    </div>
                    <div class="grid grid-cols-2 w-full">
                        <span class="text-base">Age</span>
                        <span class="text-base">21</span>
                    </div>
                    <div class="grid grid-cols-2 w-full">
                        <span class="text-base">Status</span>
                        <span class="text-base">Working</span>
                    </div>
                    <div class="grid grid-cols-2 w-full">
                        <span class="text-base">Nationality</span>
                        <span class="text-base">India</span>
                    </div>
                    <div class="grid grid-cols-2 w-full">
                        <span class="text-base">Moving</span>
                        <span class="text-base">2 people</span>
                    </div>
                    <div class="grid grid-cols-2 w-full">
                        <span class="text-base">Moving date</span>
                        <span class="text-base">3 April 22</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col  border-t">
                <h3 class="font-medium text-base mt-4">
                    About
                </h3>
                <p class="text-md font-light mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus doloremque, sequi fugiat quia, eligendi inventore debitis totam fuga consequatur nam praesentium ex distinctio libero quaerat vero perferendis culpa dolorum sed!
                </p>
                <p class="text-md font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus doloremque, sequi fugiat quia, eligendi inventore debitis totam fuga consequatur nam praesentium ex distinctio libero quaerat vero perferendis culpa dolorum sed!
                </p>
            </div>
        </div>
    </div>

</template>

<script>


export default{
    name:'TenantModal',
    props:['person'],
    methods:{
        close(){
            this.$emit('close')
        }

    }
}
</script>