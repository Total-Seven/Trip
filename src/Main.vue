<script setup>
import TabBar from '@/components/tab_bar/tabBar.vue'
import VantTab from '@/components/tab_bar/vant-tab.vue'

import { useRoute } from 'vue-router'
const router = useRoute()
</script>

<template>
    <main>
        <router-view></router-view>
        <VantTab v-if="!router.meta.whetherHide"></VantTab>
    </main>
</template>

<style  scoped>

</style>