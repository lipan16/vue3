<template>
    <div id="home">
      <el-button type="primary">按钮</el-button>
      <van-cell title="12" :value="val"></van-cell>
    </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
    name: "hello",
    setup(){
        const store = useStore()
        const val   = store.state.homeId
        return {
            val
        }
    }
}
</script>

<style lang="less" scoped>
#home {
    position : absolute;
    top      : 0;
    bottom   : 0;
    width    : 100%;
}
</style>
