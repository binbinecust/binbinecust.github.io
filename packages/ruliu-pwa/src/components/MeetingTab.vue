<template>
  <div class="meeting-tab">
    <h1>会议标签</h1>
    <p>这里是会议相关的内容。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MeetingTab',
});
</script>

<style scoped>
.meeting-tab {
  padding: 20px;
  text-align: center;
}
</style>