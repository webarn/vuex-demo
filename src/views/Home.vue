<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <button @click="$store.commit('add')"> ++ </button> -->
    <button @click="time"> ++ </button>
    <button @click="sum(2)"> -- </button>
    <button @click="mul"> *{{val}} </button>
    <!-- <h3>count: {{$store.state.count}}</h3> -->
    <h3>count: {{count}}</h3>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      val: 2
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapMutations(["add", "sum"]),
    ...mapActions(["time"]),
    mul() {
      console.log("***");
    }
  },
  computed: mapState(["count"])
};
</script>
<style>
button {
  padding: 8px 13px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 3px;
}
</style>
