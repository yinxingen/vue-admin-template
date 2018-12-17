<template>
    <div class="wrapper">
        <template>
            <header-bar v-once>
                <p>VueJS模板系统</p>
            </header-bar>
            <nav-bar></nav-bar>
        </template>
         <div class="sys-content">
            <tag-nav></tag-nav>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import NavBar from './NavBar'
import TagNav from './TagNav'

export default {
    components:{
        HeaderBar,
        NavBar,
        TagNav
    }
}
</script>

<style scoped lang="scss">
    .sys-content{
        position: absolute;
        top: 50px;
        left: 160px;
        right: 0;
        bottom: 0;
    }
</style>
