<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router';

import item9 from '@/components/home/item-V9.vue'
import item3 from '@/components/home/item-V3.vue'


// 
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from 'pinia';

//
import useScroll from '@/hooks/useScroll'

const router = useRouter()

const HomeStore = useHomeStore()

const isShowSearch = ref(false)

// 
HomeStore.fetchFantastic()
// storeToRefs不设为响应式的话，不能自动加载
const { fantastic } = storeToRefs(HomeStore)

// 第一种方法
// scrollListen(HomeStore.fetchFantastic)

// 第二种方法
const { isReachBottom, top } = useScroll()
watch(isReachBottom, (newValue) => {
    if (newValue == true) {
        HomeStore.fetchFantastic().then(() => {
            isReachBottom.value = false
        })
    }
})
watch(top, newValue => {
    isShowSearch.value = newValue > 500
})


//
// const moreBtn = () => {
//     HomeStore.fetchFantastic()
// }

function detail(data) {
    console.log(data.houseId)
    router.push('/detail/' + data.houseId)
}
</script>

<template>
    <div class="invincible">
        <div class="search" v-if="isShowSearch">
            <div class="inner">
                <div class="time">
                    <div class="stay">
                        <span>住07.25</span>
                    </div>
                    <div class="leave">
                        <span>离07.26</span>
                    </div>
                </div>
                <div class="keyword">关键字/位置/民宿</div>
                <div class="find">
                    <van-icon name="search" size="25px" color="#9ea0a2" />
                </div>
            </div>

        </div>
        <h2>精品列表</h2>
        <!-- <div class="list">
            commodity-data
        </div> -->
        <div class="box">
            <template v-for="(item, index) in fantastic" :key="item.data.houseId">
                <item9 :itemData="item.data" v-if="item.discoveryContentType === 9" @click="detail(item.data)" />
                <item3 :itemData="item.data" v-else-if="item.discoveryContentType === 3" @click="detail(item.data)" />
            </template>
        </div>
        <!-- <button @click="moreBtn">加载更多</button> -->
    </div>
</template>

<style lang="less" scoped>
.invincible {
    // 底部 TabBar遮挡
    // padding-bottom: 60px;
    // // 
    // margin-top: 5px;
    // align-items: center;
    // padding-left: 30px;
    // color: #333;
    padding: 10px 8px;
    box-sizing: border-box;
    // display: flex;
    // align-items: center;

    .search {
        // height: 44px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        z-index: 9;
        padding: 12px 15px;

        // justify-content: center;

        .inner {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            padding: 8px 8px;
            border-radius: 6px;
            background-color: #f2f4f5;
            position: relative;

            .time {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 10px 0 5px;
                position: relative;
                color: #585751;
                font-size: 16px;

                .stay::first-letter,
                .leave::first-letter {
                    color: #b7b6b6;
                    margin-right: 3px;
                    font-size: 14px;
                }
            }

            .time::after {
                content: '';
                display: inline-block;
                box-sizing: border-box;
                width: 8px;
                height: 8px;
                background-color: transparent;
                border: 4px solid transparent;
                border-left: 4px solid #636668;
                transform: rotate(45deg);
                position: absolute;
                right: -12px;
                bottom: -1px;

            }

            .keyword {
                color: #b7b6b6;
                padding: 0 7px;
            }

            .find {
                position: absolute;
                right: 5px;
                flex: 1;
            }


        }

        // padding: 15px;

    }

    h2 {
        font-size: 22px;
        padding: 10px;
    }

    .box {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>