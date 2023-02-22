<script setup>
import { ref, watch, computed, onMounted } from 'vue';
// 监听事件
import useScroll from '@/hooks/useScroll';
// 组件
import IndexTabBar from '@/components/tab_bar/Index-Tab-Bar.vue'
import Swipe from './cpns/detail_swipe.vue'
import Info from './cpns/detail_02-infos.vue'
import Facility from './cpns/detail_03-facility.vue'
import Landlord from './cpns/detail_04-landlord.vue'
import Comment from './cpns/detail_05-comment.vue'
import Notice from './cpns/detail_06-notice.vue'
import geo from './cpns/detail_07-map.vue'
// 网络请求
import { getDetail } from '@/service/modules/detail';
// 路由
import { useRoute, useRouter, } from 'vue-router';
const route = useRoute()
const router = useRouter()
// 用于监听detail元素的滚动
const detailRef = ref()
// 控制顶部索引栏的显示
const showIndexBar = ref(false)
// 网络请求   重点：怎么优化
const detailData = ref()
getDetail(route.params.id).then((res) => {
    detailData.value = res.data
})
// 父子间通信
const Ref_IndexTabBar = ref()
const sectionELs = ref({})
// 解决闪动问题
var isClick = false
// 在出发和到达目的地的过程中，不希望watch监听。
let currentOffset = 0
// 监听detail元素内的滚动，top为已滚动的距离，isReachBottom为是否到达底部
const { top, isReachBottom, Top, pageHeight } = useScroll(detailRef)
// 监听
watch(top, newValue => {
    // 到达目的地
    console.log(top.value, Top.value, pageHeight.value, isReachBottom.value);
    if (newValue == currentOffset || isReachBottom.value == true) {
        isClick = false
    }
    // 不在点击后的移动过程中
    if (isClick) {
        return
    }
    // 控制索引栏的显示
    showIndexBar.value = newValue > 300

    const values = Object.values(sectionELs.value)
    const cpnsTop = values.map(element => element.offsetTop)

    for (let index = 0; index < cpnsTop.length; index++) {
        const element = cpnsTop[index];
        if (element > newValue) {
            Ref_IndexTabBar.value.currentIndex = index
            break
        }
    }
    // console.log(this.$refs.Ref_IndexTabBar.currentIndex);   ✌ Vu2写法，不管用了
    // Ref_IndexTabBar.value.currentIndex = currentindex  //  ❤ $el是根元素，变量本身就是实例。
})

const names = computed(() => {
    return Object.keys(sectionELs.value)
})
const getSectionRef = (section) => {
    try {
        const name = section.$el.getAttribute('name')
        sectionELs.value[name] = section.$el
    } catch (error) {
        console.log(error);
    }

}

const click = (index) => {
    const keys = Object.keys(sectionELs.value)
    const key = keys[index]
    // 解决闪动问题
    isClick = true
    currentOffset = sectionELs.value[key].offsetTop - 44
    // 翻滚吧！
    detailRef.value.scrollTo({
        top: sectionELs.value[key].offsetTop - 44,
        behavior: 'smooth'
    })
};

</script>

<template>
    <div class="detail top-page" ref="detailRef">
        <IndexTabBar ref="Ref_IndexTabBar" :titles="names" class="tab" v-show="showIndexBar" @tab-item-click="click">
        </IndexTabBar>

        <van-nav-bar title="详情信息" left-text="返回" left-arrow @click="router.back()">
            <template #right>
                <van-icon name="search" slot="right" size="18" />
            </template>
        </van-nav-bar>

        <Swipe :swipeData="detailData?.mainPart?.topModule.housePicture.housePics" />

        <Info name="描述" :ref="getSectionRef" :topData="detailData?.mainPart?.topModule" />

        <Facility name="设施" :ref="getSectionRef" :facilityData="detailData?.mainPart?.dynamicModule.facilityModule" />

        <Landlord name="房东" :ref="getSectionRef" :landData="detailData?.mainPart?.dynamicModule.landlordModule" />

        <Comment name="评论" :ref="getSectionRef" :commentData="detailData?.mainPart?.dynamicModule.commentModule" />

        <Notice name="须知" :ref="getSectionRef" :noticeData="detailData?.mainPart?.dynamicModule.rulesModule.orderRules" />

        <geo name="周边" :ref="getSectionRef" :mapData="detailData?.mainPart?.dynamicModule.positionModule" />
        <!-- <div v-show="detailData">
                        <p>{{ detailData }}</p>
                    </div> -->
        <div class="footer" ref="FootRef">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">路漫漫，其修远兮</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.tab {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>