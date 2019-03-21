<template>
  <div id="login">
    this is login
    <el-button @click="submitLogin">跳转</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  date () {
    return {

    }
  },
  created () {
  },
  methods: {
    submitLogin () {
      var loginParams = { username: 'zhangpei', password: '0622' }
      this.$store.dispatch('userLogin', loginParams)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>
