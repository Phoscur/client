<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class="pt-5 blue darken-4">
          <v-toolbar-title class="white--text">
            <h4 v-t="'login.modal.title'" />
          </v-toolbar-title>
          <v-toolbar-items></v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <div>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  :label="$t('login.modal.label.enterEmail')"
                  name="email"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  :label="$t('login.modal.label.enterPassword')"
                  name="password"
                  v-model="password"
                  min="8"
                  :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="passwordRules"
                  counter
                  required
                ></v-text-field>
                <v-layout justify-space-between>
                  <v-btn
                    name="login"
                    @click="submit"
                    :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }"
                    v-t="'login.modal.button.login'"
                  />
                  <a href v-t="'login.modal.button.forgotPassword'" name="passwordForgotten" />
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      valid: false,
      showPassword: false,
      password: "",
      passwordRules: [
        (v: string) => !!v || this.$t("login.modal.validation.passwordRequired"),
        (v: string) => v.length >= 8 || this.$t("login.modal.validation.passwordTooShort", { passwordMinLength: 8}),
      ],
      email: "",
      emailRules: [
        (v: string) => !!v || this.$t("login.modal.validation.emailRequired"),
        (v: string) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
          || this.$t("login.modal.validation.emailInvalid"),
      ],
    };
  },
  methods: {
    submit() {
      const form = this.$refs.form as HTMLFormElement;
      if (form.validate()) {
        form.$el.submit();
      }
    },
    clear() {
      const form = this.$refs.form as HTMLFormElement;
      form.reset();
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
