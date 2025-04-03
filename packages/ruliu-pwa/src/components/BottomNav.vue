<template>
  <nav class="bottom-nav">
    <router-link to="/messages" class="nav-item">
      <span>消息</span>
    </router-link>
    <router-link to="/meetings" class="nav-item">
      <span>会议</span>
    </router-link>
    <router-link to="/workflows" class="nav-item">
      <span>工作流</span>
    </router-link>
    <router-link to="/more" class="nav-item">
      <span>更多</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BottomNav',
});
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 10px 0;
}

.nav-item {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.nav-item:hover {
  color: #0056b3;
}
</style>