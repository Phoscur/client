<template>
  <div class="gameConfig">
    <h2 v-t="'game.config.title'" />
    <p v-t="{ path: 'game.config.startResources', args: resources }" />
    {{ config }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ResourceCollection } from "@/models";

export default Vue.extend({
  name: "GameConfig",
  props: {
    config: Object,
  },
  computed: {
    resources(): ResourceCollection {
      return this.config?.planet?.resources;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
