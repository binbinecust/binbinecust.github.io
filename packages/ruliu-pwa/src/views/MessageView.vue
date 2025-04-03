<template>
  <div class="message-view">
    <h1>消息视图</h1>
    <p>这里展示消息的详细信息。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageView',
});
</script>

<style scoped>
.message-view {
  padding: 20px;
}
</style>