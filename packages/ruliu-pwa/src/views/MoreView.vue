<template>
  <div class="more-view">
    <h1>更多</h1>
    <p>这里是更多内容的详细信息。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoreView',
});
</script>

<style scoped>
.more-view {
  padding: 20px;
}
</style>