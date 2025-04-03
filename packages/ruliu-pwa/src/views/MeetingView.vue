<template>
  <div class="meeting-view">
    <h1>会议视图</h1>
    <p>这里展示会议的详细信息。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MeetingView',
});
</script>

<style scoped>
.meeting-view {
  padding: 20px;
}
</style>