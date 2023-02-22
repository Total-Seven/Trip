<script setup>
import { ref, nextTick, onMounted, onActivated, onBeforeMount, computed } from 'vue';

const props = defineProps({
    // detailData.mainPart.topModule.housePicture.housePics
    /**
     * 核心思路👇
     * 1.数组的每个对象是每张图的信息
     * 2.我们需要将该数组转变为 类别：[] 形式的对象。
     * 3.渲染这个对象，组成=>【类别名】index/totalIndex的形式的页面效果
     * 4.“index”需要二次V-for渲染对象的value数组才能获取，也就是新对象的每个元素作为一个div
     * 5.【类别名】根据value数组里的信息title获取就行。
     * 总结：转换数据结构=>双V-for循环
     * 
     * 这要求了信息里必须包含每张图的“Category”类别
     * 还有“title”类别名
     */
    swipeData: {
        type: Array,
        default: () => []
    }
})
// 新对象原型
const swipeGroup = {}
// setTimeout和setInterval和nextTick还有生命周期onMounted
setTimeout(() => {
    for (const item of props.swipeData) {  //for of知识点
        let arr = swipeGroup[item?.enumPictureCategory]
        if (!arr) {
            arr = []
            swipeGroup[item?.enumPictureCategory] = arr
        }
        arr.push(item)
    }
}, 2000)
// 非得setInterval才生效，
// 解决方法
// Computed👇
// const

const getName = (name) => {
    return name.replace(":", "")
}

const getIndex = (currentPic) => {
    const arr = swipeGroup[currentPic.enumPictureCategory]
    return arr.findIndex(item => item == currentPic)
}
let getCurrent_category_name = (current_value, currentPic) => {
    // value[0].title.replace("：", "")
    const arr = swipeGroup[currentPic.enumPictureCategory]
    if (arr == current_value) {
        const current_index = arr.findIndex(item => item == currentPic)
        return current_value[current_index]?.title.replace("：", "")
    } else {
        return current_value[0].title.replace("：", "")
    }
    // return 1
}
// const toCurrentPIc = (props) => {
//     console.log(props);
// }

// 点击跳转
const Ref_swipe = ref()
const onChange = (index) => console.log('当前 Swipe 索引：' + index)
const indicatorClick = (active, total, Category, arr) => {
    Ref_swipe.value.swipeTo(arr[0].orderIndex, false)
}


</script>

<template>
    <div class="swipe" v-if="swipeData">
        <van-swipe :autoplay="1500" indicator-color="white" @change="onChange" ref="Ref_swipe">
            <!-- props由这个for循环的数据决定 -->
            <!-- props.active相当于currentIndex -->
            <template v-for="(item, index) in swipeData">
                <van-swipe-item>
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>
            <!-- 具名作用域插槽 -->
            <!-- 由 van-swipe 提供的插槽出口 -->
            <template #indicator="props">
                <!-- indicator 指示器-->
                <div class="indicator">
                    <!-- 渲染对象 -->
                    <template v-for="(value, key, index) in swipeGroup" :key="key">
                        <div class="item" @click="indicatorClick(props.active, props.total, key, value)">
                            <!-- 【类别名】 -->
                            <span :class="{ active: swipeData[props.active].enumPictureCategory == key }">
                                <!-- replace知识点 -->
                                {{ getCurrent_category_name(value, swipeData[props.active]) }}
                            </span>
                            <!-- index/totalIndex -->
                            <span v-if="swipeData[props.active].enumPictureCategory == key"
                                :class="{ active: swipeData[props.active].enumPictureCategory == key }">
                                {{ getIndex(swipeData[props.active])+ 1 }}/{{ value.length }}
                            </span>
                        </div>
                    </template>
                    <!--  -->
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<style lang="less" scoped>
.swipe {
    .indicator {
        position: absolute;
        display: flex;
        right: 12px;
        bottom: 5px;
        color: #ff9854AA;
        background-color: rgba(0, 0, 0, 0.5);


        .item {
            color: rgba(255, 255, 255, 0.8);
            margin-right: 5px;
            border-radius: 6px;
        }

        .active {
            color: #ff9854FF;
            font-weight: 700;
            // background-color: #fff;
            // font-size: 30px;
        }
    }
}
</style>