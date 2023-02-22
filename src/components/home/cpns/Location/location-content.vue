<script setup>
import { computed } from 'vue';
// Router
import { useRouter } from 'vue-router'
// Store
import useCityStore from '@/store/modules/city'

const cityStore = useCityStore()

const router = useRouter()

// 
const props = defineProps({
    Group: {
        type: Array,
        default: []
    },
    hotcity: {
        type: Object,
        default: () => { }
    }
})

const groupIndex = computed(() => {
    const list = props.Group.map(item => item.group)
    list.unshift('#')
    return list
})
// function print() {
//     groupIndex.forEach((item) => {
//         console.log(item);
//     })
// }

function cityClick(city) {
    // console.log('before---cityStore.currentCity: ', cityStore.currentCity.cityName);
    cityStore.currentCity = city
    // console.log('after---cityStore.currentCity: ', cityStore.currentCity.cityName);
    router.back()
}
</script>

<template>
    <div class="content">
        <van-index-bar :index-list="groupIndex">
            <div class="top">
                <van-index-anchor index="热门" />
                <div class="ul">
                    <template v-for="(item, index) in hotcity">
                        <div @click="cityClick(item)" class="li">{{ item.cityName }}</div>
                    </template>
                </div>
            </div>

            <template v-for="(Group, index) in  Group">
                <van-index-anchor :index="Group.group" />
                <template v-for="(city, indey) in Group.cities">
                    <van-cell :title="city.cityName" @click="cityClick(city)" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>

<style lang="less" scoped>
.top {
    margin: 5px 0;

    .ul {
        display: flex;
        padding: 10px;
        padding-right: 25px;
        justify-content: space-around;
        flex-wrap: wrap;

        .li {
            // flex: 1;
            width: 70px;
            height: 28px;
            // 居中
            line-height: 28px;
            text-align: center;
            // align-items: center;
            // justify-content: center;
            font-size: 12px;
            border-radius: 14px;
            // #fff4ec
            background-color: #f2d6c2;
            color: #000;
            margin: 5px;
        }
    }
}
</style>

<!-- <style lang="less" scoped>
.top {
    .ul {
        display: flex;
        flex-flow: wrap;
        // justify-content: center;
        padding: 10px 5px 5px 20px;

        .li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 28px;
            margin-bottom: 10px;
            margin-right: 18px;
            font-size: 12px;
            border-radius: 14px;
            background-color: #f2d6c2;
            // 居中

        }
    }
}
</style> -->