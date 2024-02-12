<script setup>
import { RouterView } from "vue-router";
import { NNotificationProvider } from "naive-ui";
</script>

<template>
  <NNotificationProvider>
    <RouterView />
  </NNotificationProvider>
</template>

<style scoped></style>
