<template>
    <div class="sys-header">
        <div class="auditHeader">
            <div class="logo">
                <p>IBM-audit</p>
            </div>
            <div class="userInfo">
                <el-dropdown @command="userOperation">
                    <span class="user">{{username}} <i class="el-icon-caret-bottom el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="editPaw">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <el-dialog title="修改密码" width="400px" :visible.sync="dialog.editPaw.show" :modal-append-to-body="false">
            <el-form :model="editPaw" :rules="editPawRules" ref="editPaw" label-width="100px" >
                <el-form-item label="旧密码" prop="oldPaw">
                    <el-input v-model="editPaw.oldPaw" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPaw">
                    <el-input v-model="editPaw.newPaw" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="confirmNewPaw">
                    <el-input v-model="editPaw.confirmNewPaw" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div style="text-align:center;">
                <el-button type="primary" @click="editPawSubmit">保存</el-button>
            </div>
        </el-dialog>
    </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            username:'1234',
            dialog: {
                editPaw: {
                    show: false
                }
            },
            editPaw: {
                oldPaw: '',
                newPaw: '',
                confirmNewPaw: ''
            },
            editPawRules: {
                oldPaw: [
                    {required: true, message: '请输入旧密码', trigger: 'blur'}
                ],
                newPaw: [
                    {required: true, message: '请输入新密码', trigger: 'blur'},
                    {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
                    {
                        // eslint-disable-next-line
                        validator(rule, value, callback, source, options) {
                            var errors = [];
                            if(!/^[a-z0-9]+$/.test(value)) {
                                console.log("不符合输入规则")
                                errors.push("请输入字母或特殊字符")
                            }
                            callback(errors);
                        }
                    }
                ],
                confirmNewPaw: [
                    {required: true, message: '请再次输入新密码', trigger: 'blur'},
                    {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
                    {
                        // eslint-disable-next-line
                        validator(rule, value, callback, source, options) {
                            var errors = [];
                            if(!/^[a-z0-9]+$/.test(value)) {
                                console.log("不符合输入规则")
                                errors.push("请输入字母或特殊字符")
                            }
                            callback(errors);
                        }
                    }
                ]
            }
        }
    },
    computed: {

    },
    methods: {
        ...mapActions({
            sysLogout: 'auth/logout',
            loadLang: 'loadLang'
        }),
        userOperation(command){
            switch(command){
                case 'logout': 
                    this.logout()
                    break
                case 'editPaw':
                    this.dialog.editPaw.show = true
                    console.log('编辑密码')
                    break
            }
        },
        logout() {
            this.sysLogout().then(() => {
                this.$router.push('/login')
            })
        },
        editPawSubmit(){
            this.$refs.editPaw.validate((valid) => {
                if (valid) {
                    console.log("修改密码表单提交")
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped lang="scss">
    .sys-header{
        .auditHeader{
            width: 100%;
            height: 50px;
            background: #52bab5;
            .logo {
                float: left;
                height: 50px;
                line-height: 50px;
                padding-left: 20px;
                color: white;
                font-size: 20px;
            }
            .userInfo{
                float: right;
                height: 50px;
                margin-right: 20px;
                line-height: 50px;
                .user {
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
</style>