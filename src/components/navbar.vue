
<template>
    <nav class="relative container mx-auto py-6">
        <div class="flex items-center px-6 max-w-screen-box mx-auto justify-between">
            <!--Logo-->
            <div class="">
                <img src="../assets/img/svg/YaMummy_Logos.svg" width="150" alt="YaMummy logo">
            </div>
            <!--Menu-->
            <div class="hidden md:flex space-x-6 items-center justify-end">
                <a href="#" class="font-medium">List your Space</a>
                <a href="#" class="font-medium">I need Space</a>
                <a href="#" class="border border-gray-400 border-solid font-medium py-2 px-4 rounded-lg">Sign In</a>
            </div>
        </div>
    </nav>
    <div class="border-b border-slate-200"></div>

</template>

<script>
    export default{
        // eslint-disable-next-line vue/multi-word-component-names
        name:"navbar",
        components:{
            
        }
    }
</script>