<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
// 
// setInterval(() => {
//     console.log('tabsActive: ' + tabsActive.value);
// }, 3000)

// 
const onSearch = (val) => Toast(val);
const onCancel = () => router.back();

defineProps({
    // CityData
    citydata: {
        type: Object,
        default: () => { }
    },
    // tabsActive: {
    //     type: Object,
    //     default: () => { }
    // }
})

// TabsActive
const tabsActive = ref('')
// value
const value = ref('')
</script>

<template>
    <div class="top">
        <van-search v-model="value" @search="onSearch" @cancel="onCancel" placeholder="城市/区域/位置" shape="round"
            show-action />
        <!-- <div class="test2">
            {{ tabsActive }}
        </div>
        <div class="test1">
            {{ citydata }}
        </div> -->

        <van-tabs v-model:active="tabsActive" line-width="45px" line-height="3px" color="#ff9854" :animated=true>
            <template v-for="(value, key, index) in citydata">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template>
        </van-tabs>
    </div>
</template>

<style lang="less" scoped>

</style>