<script setup>
import { ref } from 'vue'
import data from '../../assets/localData/TarBardata'
// import { useRouter } from 'vue-router'
// const router = useRouter()
console.log(data);
const currentIndex = ref(0)

// function changePath(playload, index) {
//     router.push({
//         path: playload,
//         // query: {
//         //     name: 77,
//         //     age: 7
//         // }
//     })
//     currentIndex.value = index
// }
function getUrl(img) {
    return new URL(`../../assets/img/${img}`, import.meta.url).href
}
</script>
  
<template>
    <div class="tabBar">
        <van-tabbar v-model="currentIndex" active-color="#ee0a24" inactive-color="#000">
            <template v-for="(item, index) in data">
                <van-tabbar-item :to="item.JumpPath">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="currentIndex == index" :src="getUrl(item.activeimg)" alt="">
                        <img v-else :src="getUrl(item.img)" alt="">
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
//   .tabBar {
//       // position
//       position: fixed;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       // display
//       display: flex;
//       // 
//       height: 50px;
//       // boundaries
//       border-top: 1px solid #aaa;

//       .tab-bar-item {
//           // flex
//           flex: 1;
//           // display
//           display: flex;
//           flex-direction: column;
//           // padding: 0;
//           // 居中
//           // text-align: center;
//           justify-content: center;
//           align-items: center;

//           img {
//               width: 32px;
//           }

//           .text {
//               margin: 0;
//               font-size: 12px;
//           }

//           &.active {
//               color: var(--primary--color)
//           }
//       }
//   }
</style>