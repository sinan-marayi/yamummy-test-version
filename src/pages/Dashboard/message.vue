<template>
  <div class="flex h-screen w-full">

        <inbox></inbox>
        <router-view></router-view>

  </div>

</template>

<script>
import Inbox from "../../components/Dashboard/Inbox.vue"

export default {
name:"Message",
components:{
    Inbox,
}
}
</script>

<style>

</style>