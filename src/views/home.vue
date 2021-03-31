<template>
    <div class="home">
        <el-container>
            <el-header class="home-header">
                <div class="title">云E办</div>
                <el-dropdown @command="handleCommand">
                    <el-avatar src=""></el-avatar>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="center" icon="el-icon-s-custom">个人中心</el-dropdown-item>
                            <el-dropdown-item command="setting" icon="el-icon-setting">系统设置</el-dropdown-item>
                            <el-dropdown-item command="logout" icon="el-icon-switch-button">注销登录
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>

            <el-container class="container">
                <el-aside width="200px">
                    <el-menu router unique-opened v-for="(item,index) in routers" :key="index">
                        <el-submenu index="1" v-if="!item.enabled">
                            <template #title>
                                <i :class="item.icon"></i>
                                <span>{{ item.name }}{{ item.hidden }}</span>
                            </template>
                            <el-menu-item v-for="(children, j) in item.children" :key="j"
                                          :index="children.path">
                                {{ children.name }}
                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <router-view/>
                </el-main>
            </el-container>

        </el-container>
    </div>
</template>
<script>
import {ElMessage}                  from "element-plus";
import {computed, reactive, toRefs} from 'vue'
import {useStore}                   from "vuex";
import router                       from "../router";

export default {
    name: "hello",
    setup(){
        const store = useStore()
        const data = reactive({})
        const routers = computed(() => {
            return router.getRoutes().splice(2)
            // return store.state.routers
        })

        function handleCommand(index){
            ElMessage.info(index)
        }

        return {
            ...toRefs(data), routers, handleCommand
        }
    }
}
</script>

<style lang="less" scoped>
.home{

    .home-header{
        background-color : #3b8dfa;
        color            : #333333;
        display          : flex;
        justify-content  : space-between;
        align-items      : center;

        .title{
            font-size : 30px;

        }
    }

    .container{
        position : absolute;
        top      : 60PX;
        bottom   : 0px;
        width    : 100%;

        .el-aside{
            color : #333;

            .el-menu-item{
                min-width : 0;
            }
        }

        .el-main{
            background-color : #E9EEF3;
            color            : #333;

            .el-table__row--striped{
                background-color : red;
            }
        }
    }

}
</style>
