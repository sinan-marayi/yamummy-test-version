<template>
<!--OFF CANVAS OFFCANVAS-->

<div class="flex flex-col sm:w-1/2 md:w-2/5 lg:w-1/4 h-screen bg-purple-600 fixed top-0 right-0 z-50 px-4">
        <div class="flex h-12 bg-yellow-400 items-center justify-end " @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

        </div>
        <div class="flex flex-col flex-auto space-y-4 overflow-y-auto pb-16">

            <div class="flex flex-col bg-green-200 items-center justify-center">
                <div class="flex bg-red-200 rounded-full border-8 w-38 h-38">
                    <img src="../assets/img/card/Rectangle42strip-image-02.png">
                </div>
                <h2 class="flex text-xl bg-red-500 justify-center">{{ person.name }}</h2>
            </div>


            <div class="flex flex-col items-center justify-center bg-green-600">
                <span class="text-xs font-light">
                    Budget
                </span>
                <h3 class="text-xl font-medium">
                    RM750 - RM900
                </h3>
                <a href="#" class="bg-primary rounded-md py-2 px-5 mt-2 font-medium">
                    Send invitation
                </a>
                <span class="text-xs font-light mt-2">
                    3 invitation received
                </span>
            </div>


            <div class="flex flex-col items-start bg-green-400 border-t">
                <div class="bg-blue-400 mt-4">
                    <span class="text-xs font-extralight">
                        Space required
                    </span>
                    <h3 class="text-xl font-medium">
                        Private room
                    </h3>
                </div>
                <div class="bg-blue-600">
                    <span class="text-xs font-extralight">
                        Preferred Location
                    </span>
                    <h3 class="text-xl font-medium">
                        Kelana Jaya, Petaling Jaya
                    </h3>
                </div>
            </div>


            <div class="flex bg-green-500 border-t">
                <div class="flex flex-col mt-4 bg-red-600 w-full space-y-2">
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
            <div class="flex flex-col bg-green-600 border-t">
                <h3 class="font-medium text-base mt-4">
                    About
                </h3>
                <p class="text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus doloremque, sequi fugiat quia, eligendi inventore debitis totam fuga consequatur nam praesentium ex distinctio libero quaerat vero perferendis culpa dolorum sed!
                </p>
                <p class="text-base">
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