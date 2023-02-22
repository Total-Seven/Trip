<script setup>
import { useRouter } from 'vue-router'
import useCityStore from '@/store/modules/city'
const cityStore = useCityStore()
const router = useRouter()

//

// 
const shift = () => {
    router.push({
        path: '/search',
        query: {
            currentCity: cityStore.currentCity.cityName,
            nowTime: cityStore.currentTime.start,
            endTime: cityStore.currentTime.end,
        }
    })
}
</script>

<template>
    <div class="search">
        <!-- <van-button type="primary" to="search" block round color="linear-gradient(to right, #ff6034, #ee0a24)">块级元素
        </van-button> -->
        <div class="btn" @click="shift">点击搜索</div>
    </div>
</template>

<style lang="less" scoped>
.search {
    margin-top: 5px;
    align-items: center;
    padding: 10px 20px;
    padding-left: 30px;
    color: #333;
    // 

    .btn {
        width: 352px;
        height: 38px;
        max-height: 50px;
        font-size: 18px;
        font-weight: 500;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-image: var(--color-linear-gradient);
    }
}
</style>