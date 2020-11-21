<template>
    <router-view></router-view>
    <van-overlay :show="this.$store.state.showLoading"></van-overlay>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
</style>
