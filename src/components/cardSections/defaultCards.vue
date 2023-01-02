<template>
    <!--Default Cards-->

    <section class="mt-4">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between">
                <div class="flex flex-1 flex-col">
                    <h2 class="mt-2 text-2xl font-medium tracking-tight text-slate-900">Non Scrollable default card Listing
                    </h2>
                    <p class=" lg:w-3/6">Handpicked listing by the editors in Kuala Lumpur</p>
                </div>

            </div>
        </div>

        <div class="container mx-auto px-6 mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
            
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
            <defaultCard></defaultCard>
        </div>
    </section>
</template>


<script>
import defaultCard from "../cards/defaultCard.vue"

export default {
    name:'defaultCards',
    components:{
        defaultCard

    }
}
</script>