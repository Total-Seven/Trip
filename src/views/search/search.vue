<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'
import useHomeStore from '@/store/modules/home'
const cityStore = useCityStore()
const homeStore = useHomeStore()

const router = useRouter()
</script>

<template>
    <div class="search">
        <h2>{{ cityStore.currentCity.cityName }}</h2>
        <h2>{{ cityStore.currentTime.start }}</h2>
        <h2>{{ cityStore.currentTime.end }}</h2>
        <h2>{{ homeStore.hotgrede }}</h2>
        <button @click="router.back()">Cancel</button>
    </div>
</template>

<style lang="less" scoped>
.search {
    position: relative;
    z-index: 2;
    height: 100vh;
    background-color: #fff;
    overflow-y: auto;
}
</style>