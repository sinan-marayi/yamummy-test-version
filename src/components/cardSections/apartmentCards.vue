<template>
    <section class="mt-4">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between">
                <div class="flex flex-1 flex-col">
                    <h2 class="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Apartments or Condos near by</h2>
                    <!--<p class=" lg:w-3/6">Handpicked listing by the editors in Kuala Lumpur</p>-->
                </div>
                <div class="">
                    <span class="flex items-center space-x-5">
                        <a href="#" class="rounded-full border border-solid border-slate-400 text-sm px-4 py-2">Show
                            all</a>
                        <img src="../../assets/img/card/Nextleft_arrow_button.png" alt="">
                        <img src="../../assets/img/card/Nextright_arrow_button.png" alt="">
                    </span>
                </div>
            </div>
        </div>
        
        <div class="container mx-auto px-6 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
            <!--Apartment Card-->
            
<ApartmentCard></ApartmentCard>
<ApartmentCard></ApartmentCard>
<ApartmentCard></ApartmentCard>
            
            
        </div>
    </section>
</template>

<script>

import ApartmentCard from '../cards/apartmentCard.vue'
export default {
    name:"ApartmentCards",
    components:{
        ApartmentCard
    }
};
</script>