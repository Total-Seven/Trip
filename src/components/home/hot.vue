<script setup>
import useHomeStore from '../../store/modules/home'
import { storeToRefs } from 'pinia'

const HomeStore = useHomeStore()
HomeStore.fetchAllAreas()
const { allareas } = storeToRefs(HomeStore)
</script>

<template>
    <div class="hot">
        <template v-for="(item, index) in allareas">
            <div class="tag" :style="{ color: item.tagText.color, background: item.tagText.background.color }">
                {{ item.tagText.text }}
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.hot {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 25px;
    // align-items: center;
    padding-left: 15px;
    padding-right: 30px;
    color: #333;

    .tag {
        // width: 36px;
        // height: 14px;
        line-height: 1.2;
        font-size: 12px;
        margin: 7px;
        padding: 2px 8px;
        border-radius: 14px;
    }
}
</style>