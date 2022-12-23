<template>
<!--Menu-->
<div class="container mx-auto px-6">
        <div class="flex flex-col">
            <h1 class="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Federal Territory of Kuala Lumpur</h1>
            <nav aria-label="Breadcrumbs" class="order-first flex space-x-2 text-sm font-medium"><a
                    class="text-slate-500 hover:text-slate-600" href="#">Malaysia</a>
                <div aria-hidden="true" class="select-none text-slate-400">/</div><a
                    class="text-slate-500 hover:text-slate-600" href="#">Federal Territory of Kuala Lumpur</a>
            </nav>
            <p class="mt-1 lg:w-3/6">Find a Room for rent, Apartment, House, Condo, Studio, duplex, or shared
                accommodation in Federal
                Territory of Kuala Lumpur.</p>
        </div>
    </div>
    <!--Category Cards 01-->
    <section class="">
        <div class="container mx-auto px-6">
        </div>
        <div class="container mx-auto px-6 mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
            <PrimaryCard></PrimaryCard>
            <PrimaryCard></PrimaryCard>
            <PrimaryCard></PrimaryCard>
            <PrimaryCard></PrimaryCard>
            
            
            
        </div>
    </section>
</template>

<script>
import PrimaryCard from "../cards/primaryCard.vue"
export default {
name:'PrimaryCards',
components:{
    PrimaryCard
}
}
</script>