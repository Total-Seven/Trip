<script setup>
import { ref, computed } from 'vue'
// 组件
import Content from '../../../components/home/cpns/Location/location-content.vue'
import Toop from '../../../components/home/cpns/Location/location-top.vue'
// 状态管理
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia'
// 网球请求(被取代)
import { getCityAll } from '@/service'
// 路由
import { useRouter } from 'vue-router'
const router = useRouter()

// 逻辑
// const CityData = ref({})
// getCityAll().then(res => {
//     // console.dir(res)
//     CityData.value = res.data
//     // console.dir(CityData.value.cityGroup.title);
// })

// 网络请求
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allcities } = storeToRefs(cityStore)


// TabsActive
const TabsActive = ref('')
// value
const value = ref('')

const onSearch = (val) => Toast(val);
const onCancel = () => router.back();

const CurrentGroup = computed(() => {
    return allcities.value[TabsActive.value]?.cities
})
const HotCities = computed(() => {
    return allcities.value[TabsActive.value]?.hotCities
})
</script>

<template>
    <div class="city">
        <div class="top">
            <!-- <Toop :citydata="CityData" :tabsActive="TabsActive" /> -->
            <van-search v-model="value" @search="onSearch" @cancel="onCancel" placeholder="城市/区域/位置" shape="round"
                show-action />
            <van-tabs v-model:active="TabsActive" line-width="45px" line-height="3px" color="#ff9854" :animated=true>
                <template v-for="(value, key, index) in allcities">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="content">
            <!-- 网络延迟 -->
            <template v-for="(value, key, index)  in allcities ">
                <Content v-show="key==TabsActive" :Group="CurrentGroup" :hotcity="HotCities" />
            </template>
        </div>
    </div>
</template>

<style lang="less" scoped>
.city {
    position: relative;
    z-index: 3;
    height: 100vh;
    background-color: #fff;
    overflow-y: auto;

    .top {
        position: relative;
        z-index: 9;
    }

    .content {
        height: calc(100vh - 98px);
        // Specification
        // CSS Values and Units Module Level 4
        // # calc-func
        overflow-y: auto;
    }
}
</style>