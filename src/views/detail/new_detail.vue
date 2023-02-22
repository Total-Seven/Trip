<script setup>
import useScroll from '@/hooks/useScroll';
import { getDetail } from '@/service/modules/detail';
import { ref, computed, watch, onMounted } from 'vue';

import IndexTabBar from '@/components/tab_bar/Index-Tab-Bar.vue'
import Swipe from './cpns/detail_swipe.vue'
import Info from './cpns/detail_02-infos.vue'
import Facility from './cpns/detail_03-facility.vue'
import Landlord from './cpns/detail_04-landlord.vue'
import Comment from './cpns/detail_05-comment.vue'
import Notice from './cpns/detail_06-notice.vue'
import Mapp from './cpns/detail_07-map.vue'

import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const detailInfos = ref({})

const detailRef = ref()

const showIndexBar = ref(false)

// 网络请求
getDetail(route.params.id).then((res) => {
    detailInfos.value = res.data
})

function onClickLeft() {
    router.back()
}


const { top } = useScroll(detailRef)
watch(top, newValue => {
    showIndexBar.value = newValue > 300
})

const sectionELs = ref({})

const names = computed(() => {
    return Object.keys(sectionELs.value)
})

const getSectionRef = (value) => {
    console.log(value.$el);
    // const name = value.$el.getAttribute("name")
    // sectionELs.value[name] = value.$el
}
console.log(sectionELs.value);

const click = (index) => {
    const key = Object.keys(sectionELs.value)[index]
    const el = sectionELs.value[key]
    detailRef.value.scrollTo({
        top: el.offsetTop - 44,
        behavior: 'smooth'
    })
}





</script>

<template>
    <div class="detail top-page" ref="detailRef">
        <IndexTabBar :titles="names" class="tab" v-if="showIndexBar" @tab-item-click="click">
        </IndexTabBar>

        <van-nav-bar title="详情信息" left-text="返回" left-arrow @click="onClickLeft">
            <template #right>
                <van-icon name="search" slot="right" size="18" />
            </template>
        </van-nav-bar>

        <Swipe :swipeData="detailInfos?.mainPart?.topModule.housePicture.housePics" />

        <Info name="描述" :ref="getSectionRef" :topData="detailInfos?.mainPart?.topModule" />

        <Facility name="设施" :ref="getSectionRef" :facilityData="detailInfos?.mainPart?.dynamicModule.facilityModule" />

        <Landlord name="房东" :ref="getSectionRef" :landData="detailInfos?.mainPart?.dynamicModule.landlordModule" />

        <Comment name="评论" :ref="getSectionRef" :commentData="detailInfos?.mainPart?.dynamicModule.commentModule" />

        <Notice name="须知" :ref="getSectionRef"
            :noticeData="detailInfos?.mainPart?.dynamicModule.rulesModule.orderRules" />

        <Mapp name="周边" :ref="getSectionRef" :mapData="detailInfos?.mainPart?.dynamicModule.positionModule" />
        <!-- <div v-show="detailInfos">
            <p>{{ detailInfos }}</p>
        </div> -->
        <div class="footer">
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