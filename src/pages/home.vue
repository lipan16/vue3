<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>

      <el-container class="container">
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template #title>
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template #title>分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template #title>选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>

              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <template #title>导航二</template>
              </el-menu-item>

              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <template #title>导航三</template>
              </el-menu-item>

              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <template #title>导航四</template>
              </el-menu-item>

            </el-menu>
          </el-col>
        </el-aside>

        <el-main>
          <el-table
              :data="tableData"
              stripe
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
  name: "hello",
  setup() {
    const data = reactive({
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    })
    function handleOpen(key, keyPath) {
      console.log(key, keyPath)
    }

    function handleClose(key, keyPath) {
      console.log(key, keyPath)
    }

    return {
      ...toRefs(data), handleOpen, handleClose
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  text-align: center;

  .el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60PX;
  }

  .container {
    position: absolute;
    top: 60PX;
    bottom: 0px;
    width: 100%;

    .el-aside {
      color: #333;

      .el-menu-item{
        min-width: 0;
      }
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;

      .el-table__row--striped{
        background-color: red;
      }
    }
  }

}
</style>
