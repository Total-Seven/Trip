<script setup>
import naav from '@/components/home/nav-head.vue'
import Select from '@/components/home/select.vue'
import hot from '../../components/home/hot.vue'
import BtnSearch from '@/components/home/btn-search.vue'
import categorise from '@/components/home/hotGrade.vue'
import fantasticVue from '@/components/home/fantastic.vue'
import Load from '@/components/load/load.vue'

</script>

<template>
    <div class="home">
        <!-- 产品标题 -->
        <naav />
        <!-- 轮播图 -->
        <div class="picture "><img src="@/assets/img/home/banner.webp" alt=""></div>
        <!-- 用户首页查询 -->
        <Select />
        <!-- 热门建议 -->
        <!-- <hot /> -->
        <!-- 搜索按钮 -->
        <BtnSearch />
        <!-- 类别 -->
        <!-- <categorise /> -->
        <!-- 精品列表 -->
        <fantasticVue />
        <!-- Load加载 -->
        <Load />
    </div>

</template>

<style lang="less" scoped>
.home {
    padding-bottom: 60px;
}

.picture {
    img {
        width: 100%;
    }
}
</style>