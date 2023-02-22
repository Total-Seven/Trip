<script setup>
import { ref } from 'vue'
import data from '../../assets/localData/TarBardata'

const currentIndex = ref(0)
const icon = data

function getUrl(img) {
    return new URL(`../../assets/img/${img}`, import.meta.url).href
}
</script>
  
<template>
    <div class="tabBar">
        <van-tabbar v-model="currentIndex" active-color="#ff9854" inactive-color="#000">
            <template v-for="(item, index) in data">
                <van-tabbar-item :badge="index == 3 ? 7 : undefined" :to="item.JumpPath">
                    <span>{{ item.text }}</span>
                    <template #icon="props">
                        <img :src="props.active ? getUrl(item.activeimg) : getUrl(item.img)" />
                        <!-- <img v-if="currentIndex == index" :src="getUrl(item.activeimg)" alt="">
                        <img v-else :src="getUrl(item.img)" alt=""> -->
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>

        <!-- <template v-for="(item, index) in data" :key="index">
            <div class="tab-bar-item" @click="changePath(item.JumpPath, index)"
                :class="{ active: currentIndex === index }">
                <img v-if="currentIndex == index" :src="getUrl(item.activeimg)" alt="">
                <img v-else :src="getUrl(item.img)" alt="">
                <p class="text">{{ item.text }}</p>
            </div>
        </template> -->
    </div>
</template>
  
<style lang="less" scoped>
// .tabBar {
//     --primary--color: #ff9854;
// }
</style>