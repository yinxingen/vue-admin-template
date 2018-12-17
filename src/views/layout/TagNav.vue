<template>
    <div class="tag-nav">
        <scroll-bar ref="scrollBar">
            <router-link ref="tag" class="tag-nav-item" :class="isActive(item) ? 'cur' : ''" v-for="(item, index) in tagNavList" 
            :to="item.path" :key="index">
                {{item.title}}
                <span class='el-icon-close' @click.prevent.stop="closeTheTag(item, index)"></span>
            </router-link>
        </scroll-bar>
    </div>
</template>

<script>
import ScrollBar from '@/components/ScrollBar'

export default {
    components: {ScrollBar},
    data(){
        return {
            defaultPage: '/home'
        }
    },
    computed: {
        tagNavList(){
            return this.$store.state.tagNav.openedPageList
        }
    },
    mounted(){
        // 首次加载时将默认页面加入缓存
        this.addTagNav()
    },
    watch: {
        $route(){
            this.addTagNav()
            this.scrollToCurTag()
        }
    },
    methods: {
        addTagNav(){
            // 如果需要缓存则必须使用组件自身的name，而不是router的name
            this.$store.commit("tagNav/addTagNav", {
                name: this.$router.getMatchedComponents()[1].name,
                path: this.$route.path,
                title: this.$route.meta.name
            })
        },
        isActive(item){
            return item.path === this.$route.path
        },
        closeTheTag(item, index){
            // 当关闭当前页面的Tag时，则自动加载前一个Tag所属的页面
            // 如果没有前一个Tag，则加载默认页面
            this.$store.commit("tagNav/removeTagNav", item)
            if(this.$route.path == item.path){
                if(index){
                    this.$router.push(this.tagNavList[index-1].path)
                } else {
                    this.$router.push(this.defaultPage)
                    if(this.$route.path == "/home"){
                        this.addTagNav()
                    }
                }
            } 
        },
        scrollToCurTag(){
            this.$nextTick(() =>{
                for (let item of this.$refs.tag) {
                    if (item.to === this.$route.path) {
                        this.$refs.scrollBar.scrollToCurTag(item.$el)
                        break
                    }
                }
            })
        }
    },
}
</script>
<style scoped lang="scss">
    .tag-nav{
        height: 50px;
        border-bottom: 1px solid #ddd;
        box-shadow: 0 1px 2px #f2f2f2;
        line-height: 50px;
        .scroll-wrap{
            white-space: nowrap;
            overflow: hidden;
        }
        .tag-nav-item{
            width: 70px;
            height: 32px;
            font-size: 14px;
            color: #52bab5;
            margin-right: 10px;
            padding: 5px 8px;
            border: 1px solid rgba(82, 186, 181, 0.2);
            border-radius: 4px;
            background-color: rgba(82, 186, 181, 0.1);
            &:nth-child(1){
                margin-left: 10px;
            }
            span{
                width: 16px;
                height: 16px;
                line-height: 16px;
                border-radius: 50%;
                text-align: center;
                vertical-align: middle;
                transition: all .3s ease;
                transform-origin: 100% 50%;
                font-size: 12px;
                &:before {
                    display: inline-block;
                }
                &:hover {
                    background-color: #52bab5;
                    color: #fff;
                }
            }
        }
        & .cur{
            background-color:#52bab5;
            color: #fff;
        }
  }
</style>
