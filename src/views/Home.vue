<template>
  <div class="home">
    <GameConfig :config="config" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import GameConfig from "@/components/GameConfig.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "home",
  components: {
    GameConfig,
  },
  mounted() {
    this.getConfig();
  },
  computed: {
    ...mapGetters("user", ["config"]),
  },
  methods: {
    ...mapActions("user", ["getConfig"]),
  },
});
</script>
