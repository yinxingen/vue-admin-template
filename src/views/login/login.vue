<template>
  <div class="login">
    <div class="form-group">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px">
          <el-form-item prop="name">
            <el-input type="text" v-model="loginForm.name" placeholder='用户名'></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input @keyup.enter.native ="onSubmitLogin('loginForm')" type="password" v-model="loginForm.password" placeholder='密码'></el-input>
          </el-form-item>
          <el-form-item >
              <el-button type="primary" @click="onSubmitLogin('loginForm')"
                @keyup.enter="onSubmitLogin('loginForm')" 
                element-loading-spinner="el-icon-loading"
                :loading="loading"
                style="width:100%;height: 45px;font-size: 20px;">立即登录</el-button>
            </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {login} from '@/api/login'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      loading:false,
      loginForm: {
          name: '',
          password: '',
      },
      loginRules: {
          name: [
              {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password :[
              {required: true, message: '请输入密码', trigger: 'blur'}
          ],
      },
    }

  },
  created () {
    // this.getData()
  },
  methods: {
      ...mapActions({
            login: 'auth/userLogin',
        }),
      getData() {
        let data = {
          "password": "string",
          "userId": "zhuxh",
          "verifycode": "string"
        }
        login(data).then(res=>{
          console.log(res)
        })
        // axios.get('https://easy-mock.com/mock/5be19d1719266809d2d80b99/example/example') //easy-mock的模拟出来的接口
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      },
      onSubmitLogin(formName){
       		this.$refs[formName].validate((valid) => {
	            if (valid) {
                this.loading = true
                this.login({
                        name: this.loginForm.name,
                        password: this.loginForm.password
                    }).then(res => {
                    if(res.statusText == 'OK'){
                      // console.log(12)
                      this.$router.push({path:'/home'})
                    } else {

                    }
                })
	            } else {
	            	console.log('error submit!!');
	            	return false;
	            }
	        });
		  },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login{
    font-size: 18px;
    color: aqua;
    .form-group{
      width: 330px;
      padding-top: 10%;
      margin:0 auto;
    }
  }
</style>
