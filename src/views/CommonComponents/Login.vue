<template>
  <div id="login">
    <div id="loginForm">
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="60px">
        <div style="margin-bottom:20px">
          <h2>Sign in</h2>
        </div>
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
              <el-button @click="submitLogin('loginForm')" type="success" autofocus style="width: 95%;">登录</el-button>
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
    /* const usernameValidator = (valid, value, callback) => {

    }
    const passwordValidator = (valid, value, callback) => {

    } */
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          // { required: true, trigger: 'blur', validator: usernameValidator }
          { required: true, message: '必填', trigger: 'blur' }
        ],
        password: [
          // { required: true, trigger: 'blur', validator: passwordValidator }
          { required: true, message: '必填', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitLogin (formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$router.push({path: '/helloworld'})
          /* this.$axios.get('/api/District', { // params参数必写 , 如果没有参数传{}也可以
            params: {
              id: 12345,
              name: 'user'
            }
          })
            .then(function (res) {
              console.log(res)
            })
            .catch(function (err) {
              console.log(err)
            }) */
          /* this.$axios({
            url: '/api/District',
            method: 'get',
            data: {
              id: 12345,
              name: 'user'
            },
            crossDomain: true,
            xhrFields: {
              withCredentials: true
            },
            dataType: 'json',
            success: function (data) {
              console.log(data)
            }
          }) */
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
  background-image: url('../../../static/img/bgi0.jpg');
  #loginForm{
    border-radius: 10px;
    box-shadow: 0px 2px 6px 2px #154e916e;
    background-color: rgba(255,255,255,0.7);
    margin: 13% auto auto 55%;
    width: 25%;
    padding: 30px 45px 10px 30px;
    .el-input{
      background-color: transparent;
    }
  }
}

</style>
