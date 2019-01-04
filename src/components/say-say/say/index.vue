<template>
  <div class="say">
    <div class="publish">
      <img src="./mengxi.jpeg" alt="宝宝" width="50px" height="50px" class="baobao">
      <Input type="textarea" :rows="4" placeholder="Enter something..." class="textarea"></Input>
      <div>
        <Upload action="//jsonplaceholder.typicode.com/posts/" class="fl">
          <Button type="ghost" icon="ios-cloud-upload-outline" accept="image/*">上传图片</Button>
        </Upload>
        <Button type="primary" shape="circle" icon="ios-search" class="fr">发表</Button>
      </div>
    </div>
    <hr>
    <div class="published">
      <div><Input v-model="searchValue" placeholder="请输入搜索内容" style="width: 300px"></Input>&nbsp;&nbsp;&nbsp;&nbsp;我都说了些啥呢？？？</div>
      <ul class="content">
        <li v-for="(say, index) in says" :key="index">
          <i>mengxi</i>{{say.detail}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'say',
  data() {
    return {
      searchValue: '',
      says: [
        {detail: 'aaaaa', like: 3, unlike: 5},
        {detail: 'bbbbb', like: 34, unlike: 55},
        {detail: 'ccccc', like: 2, unlike: 511}
      ]
    };
  }
};
</script>
<style lang="stylus">
.textarea textarea
  text-indent 25px
  margin-bottom 5px;
</style>

<style lang="stylus" scoped>
@import "./index.styl";
</style>
