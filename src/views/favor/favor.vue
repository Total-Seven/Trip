<script setup>
import login from './cpns/rabbitCost.vue'
import seven from './cpns/meta.vue';

import { ref, onMounted, watch } from 'vue';
import barHead from '../../components/home/nav-head.vue'
import category from '@/components/home/hotGrade.vue'
import useScroll from '@/hooks/useScroll';

// 网络请求
import axios from 'axios';
import HYRequest from '@/service/request/index'
import useFavorStore from '@/store/modules/favor'
import { storeToRefs } from 'pinia';
const favorStore = useFavorStore()

// favorStore.fetchAllFavor()
// const { user } = storeToRefs(favorStore)
// setTimeout(() => {
//     if (user.token) {
//         console.log(user.token);
//     }
// }, 1500)



defineProps({})

// let isShowSearch = true

// const topBarRef = ref(null)
// const contentRef = ref(null)
// const { top } = useScroll(contentRef)
// console.log(top.value);


// onMounted(async () => {
//     watch(top, (newValue) => {
//         if (newValue >= 300) {
//             // 🥁绝对元素特点
//             // 如何实现width = 参照元素width
//             // width:100% ❌
//             topBarRef.value.style.position = 'fixed'
//             // topBarRef.value.style.width = '300px'
//             topBarRef.value.style.left = 0
//             topBarRef.value.style.right = 0
//             // 左右=0
//             topBarRef.value.style.margin = 'auto' || 0
//             // margin左右也=0
//             // 父元素width=子元素width+left+right+margin-left+margin-right ✔
//             topBarRef.value.style.top = '-100px'
//         } else {
//             topBarRef.value.style.position = 'relative'
//             topBarRef.value.style.width = 'auto'
//             topBarRef.value.style.top = '0'
//         }
//     })
    // axios({
    //     url: 'api',
    //     method: 'get'
    // }).then(res => {
    //     console.log(res.data);
    // })
    // HYRequest.get().then(res => {
    //     console.log(res.data);
    // })
    // const params = new URLSearchParams()
    // params.append('username', 'Link')
    // params.append('password', '123456')
    // HYRequest.post({
    //     Headers: {
    //         "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    //     },
    //     data: params,
    // }).then(res => {
    //     console.log(res);
    //     localStorage.setItem('token', res.data.token)
    //     console.log('将用户token保存到session中');
    // })

// })
</script>

<template>
    <div class="favor">
        <seven />
        <!-- <div class="topBar" ref="topBarRef">
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

        </div>
        <div class="contain">
            <barHead />
            <div class="content" ref="contentRef">
                0
                <login title="Login" :content_text="{ text: 'Life was perfect' }" />
                <br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>
                <br><br><br><br>100

            </div>
        </div> -->
    </div>
</template>

<style lang="less" scoped>
.favor {
    position: relative;
    // background-color: #fff;
}

.topBar {
    transition: top 0.275s;

    .search {
        // height: 44px;
        position: relative;
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
}

.contain {
    .content {
        position: relative;
        height: 80vh;
        box-sizing: border-box;
        // margin-top: 120px;
        padding: 5px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }

}
</style>