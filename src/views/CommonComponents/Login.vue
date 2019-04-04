<template>
  <div id="login">
    <div id="loginForm">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="60px">
        <el-row>
          <el-col>
            <el-form-item label="用户" prop="username">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item>
              <el-button @click="submitLogin('loginForm')">登录</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const usernameValidator = (valid, value, callback) => {

    }
    const passwordValidator = (valid, value, callback) => {

    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', validator: usernameValidator }
        ],
        password: [
          { required: true, trigger: 'blur', validator: passwordValidator }
        ]
      }
    }
  },
  methods: {
    submitLogin (formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$store.dispatch('userLogin', this.loginForm)
          this.$router.push({ path: '/' })
        } else {

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login{
  position: fixed;
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('../../../static/img/bgi02.jpg');
  #loginForm{
    width: 20%;
    padding: 30px 45px 10px 30px;
    border: 1px solid gainsboro;
  }
}
</style>
