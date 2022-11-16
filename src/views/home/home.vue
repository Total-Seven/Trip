<script setup>
import naav from '@/components/nav/nav.vue'

</script>

<template>
    <div class="home">
        <naav></naav>
        <div class="picture">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <van-button class="spinner" loading type="primary" loading-type="spinner" />
    </div>

</template>

<style lang="less" scoped>
.home {
    // .spinner {
    //     position: flxed;
    // }
    box-sizing: border-box;

    .picture {
        img {
            width: 100%;
        }
    }
}
</style>