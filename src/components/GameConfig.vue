<template>
  <div class="gameConfig">
    <h2 v-t="'game.config.title'" />
    <p v-t="{ path: 'game.config.startResources', args: config }" />
    {{ config }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GameConfig",
  props: {
    config: Object,
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
