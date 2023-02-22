<script setup>
import { useRouter } from 'vue-router'
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from 'pinia';
const HomeStore = useHomeStore()
const router = useRouter()


// 
// HomeStore.fetchHotGredes()
// storeToRefs不设为响应式的话，不能自动加载
const { hotgrede } = storeToRefs(HomeStore) 
</script>



<template>
    <div class="grade">
        <template v-for="(item, index) in hotgrede " :key="index">
            <div class="item">
                <img :src="item.pictureUrl" />
                <div class="text">{{ item.title }} </div>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.grade {
    display: flex;
    overflow-x: auto;
    height: 80px;
    margin-top: 5px;
    padding-left: 15px;

    &::-webkit-scrollbar {
        display: none;
    }

    // scrollbar-width: none;
    // -ms-overflow-style: none;

    .item {
        width: 70px;
        display: flex;
        margin-right: 10px;
        // 字体被挤换行了
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;



        img {
            width: 70%;
        }

        .text {
            background-color: #f9d6c3;
            height: 18px;
            line-height: 18px;
            font-size: 14px;
            border-radius: 20px;
            padding: 2px;
            color: #444;
            // color: #fdfff9;
            margin-top: 2px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

    }
}
</style>