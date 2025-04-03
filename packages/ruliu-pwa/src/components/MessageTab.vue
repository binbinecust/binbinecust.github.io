<template>
  <div class="message-tab">
    <h1>消息</h1>
    <p>这里是消息相关的内容。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageTab',
});
</script>

<style scoped>
.message-tab {
  padding: 20px;
  background-color: #f9f9f9;
}
</style>