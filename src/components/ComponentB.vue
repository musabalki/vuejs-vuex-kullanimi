<template>
    <div>
        B Componenti {{$store.getters.getAd}}

        <li :key="item" v-for="item in getList">
            {{item}}
        </li>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name:"ComponentB",
    computed:{
        ...mapGetters(['getList'])
    }
 
}
</script>