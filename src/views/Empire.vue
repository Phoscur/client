<template>
  <div class="empireView">
    <h1>Empire</h1>
    {{ units }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "Empire",
  mounted() {
    this.getUnits();
  },
  computed: {
    ...mapGetters("user", ["units"]),
  },
  methods: {
    ...mapActions("user", ["getUnits"]),
  },
});
</script>
