<script setup>
// router
import { useRouter } from 'vue-router'
// store
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
// JS👇
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 逻辑Logic
const router = useRouter()
function PositionClick() {
    const position = navigator.geolocation.getCurrentPosition((ces) => {
        var crd = ces.coords;
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    }, (err) => {
        console.warn(err.massage);
    })
}
function CityClick() {
    router.push('/city')
}
</script>

<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="CityClick">{{ currentCity.cityName }}</div>
            <div class="position" @click="PositionClick">
                <span>我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
    </div>
</template>

<!-- <style lang="less" scoped>
.search-box {
    height: 40px;
    line-height: 44px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;

    .location {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .city {
            font-size: 15px;
            color: #333;
        }

        .position {
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                color: #666;
                font-size: 12px;
                margin-right: 5px;
            }

            img {
                width: 16px;
                height: 16px;
            }
        }
    }
}
</style> -->
<style lang="less" scoped>
.location {
    margin-top: 3px;
    display: flex;
    height: 44px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    padding-left: 30px;


    .city {
        flex: 1;
        font-size: 15px;
        color: #333;
        // font-size: 15px;
    }

    .position {
        // flex: 1;
        // 宽度
        width: 74px;
        // display
        display: flex;
        // 居中
        align-items: center;

        span {
            // position
            position: relative;
            top: 2;
            color: #666;
            font-size: 12px;
        }

        img {
            margin-left: 5px;
            width: 16px;
            height: 16px;
        }
    }
}
</style>