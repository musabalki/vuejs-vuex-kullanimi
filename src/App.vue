<template>
  <ComponentA :ad="ad"/>
  <ComponentC/>
  <button @click="sayiEkle">
Ekle
  </button>
</template>

<script>

import ComponentA from "./components/ComponentA"
import ComponentC from "./components/ComponentC"
import {mapActions} from "vuex"

export default {
  name: 'App',
  components: {
ComponentA,ComponentC
  },
  data(){
    return {
      ad :"MB"
    }
  },
  methods:{
    ...mapActions(["yeniSayiEkle"]),
    sayiEkle(){
      //action dispatch edilir this.$store.dispatch(type,payload)
      //this.$store.dispatch("yeniSayiEkle",10)
      this.yeniSayiEkle(20)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
