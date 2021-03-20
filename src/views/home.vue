<template>
    <div class="home">
        <el-container>
            <el-header class="home-header">
                <div class="title">云E办</div>
                头像，个人中心，设置，注销登录
            </el-header>

            <el-container class="container">
                <el-aside width="200px">
                    <el-menu router unique-opened v-for="(item,index) in $router.options.routes" :key="index">
                        <el-submenu v-if="!item.hidden">
                            <template #title>
                                <i :class="item.icon"></i>
                                <span>{{ item.name }}{{ item.hidden }}</span>
                            </template>
                            <el-menu-item v-for="(children, indexj) in item.children" :key="indexj"
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
import {reactive, toRefs} from 'vue'
import router             from "../router";

export default {
    name: "hello",
    setup(){
        const data = reactive({})

        function menuClick(index){
            router.push(index);
        }

        function handleOpen(key, keyPath){
            console.log(key, keyPath)
        }

        function handleClose(key, keyPath){
            console.log(key, keyPath)
        }

        return {
            ...toRefs(data), menuClick, handleOpen, handleClose
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    position   : absolute;
    top        : 0;
    bottom     : 0;
    width      : 100%;
    text-align : center;

    .home-header{
        background-color : #B3C0D1;
        color            : #333;
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
