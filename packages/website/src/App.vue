<template>
  <div id="app">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        首页
      </MenuItem>
      <Submenu name="2">
        <template slot="title">
          <Icon type="stats-bars"></Icon>说说
        </template>
        <MenuItem name="2-1"><router-link to="/say">说说</router-link></MenuItem>
        <MenuItem name="2-2">图片</MenuItem>
        <MenuItem name="2-3">博客</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="stats-bars"></Icon>关于
        </template>
        <MenuItem name="2-1">个人信息</MenuItem>
        <MenuItem name="2-2">爱好</MenuItem>
        <MenuItem name="2-3">经历</MenuItem>
        <MenuItem name="2-4">音乐</MenuItem>
        <MenuItem name="2-5">书单</MenuItem>
      </Submenu>
      <MenuItem name="4">
        <Icon type="settings"></Icon>留言
      </MenuItem>
    </Menu>
    <router-view class="irouter"/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="stylus">
  @import "./global/base.styl";
  @import "./global/app.styl";
</style>
