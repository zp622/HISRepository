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
      this.$router.push({
        path: '/HomePage',
        name: '首页'
      })
    }
  }
}
</script>

<style scoped>

</style>
