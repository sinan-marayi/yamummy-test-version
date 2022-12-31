<template>
  <div class="flex h-screen w-full">

        <inbox></inbox>
        <MessageComponent></MessageComponent>
        

  </div>

</template>

<script>
import Inbox from "../../components/Dashboard/Inbox.vue"
import MessageComponent from "../../components/Dashboard/Message.vue"

export default {
name:"Message",
components:{
    Inbox,
    MessageComponent,
}
}
</script>

<style>

</style>