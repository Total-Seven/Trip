<script setup>
import useMainStore from '@/store/modules/main';
import { storeToRefs } from 'pinia';

/**
* var
*/
const mainStore = useMainStore()
const { isloading } = storeToRefs(mainStore)
/**
* function 
*/

</script>

<template>
    <div class="load" v-show="isloading">
        <div class="bg">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>

<style lang="less" scoped>
.load {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 104px;
        height: 104px;
        background: url(@/assets/img/home/loading-bg.png) 0 0 /100% 100%;

        img {
            width: 70px;
            height: 70px;
        }
    }
}
</style>