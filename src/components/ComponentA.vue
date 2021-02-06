<template>
    <div>
        A Componenti 
        <ul>
            <li :key="item" v-for="item in getList">
                {{item}}
            </li>
        </ul>
        <ComponentB/>
    </div>
</template>
<script>
import ComponentB from "./ComponentB"
import {mapGetters} from "vuex"

export default {
    name:"ComponentA",
    computed:{
        ...mapGetters(['getList']) //$store.getters.getList {yenisim:getters}
    },
    components:{
        ComponentB
    }
}
</script>