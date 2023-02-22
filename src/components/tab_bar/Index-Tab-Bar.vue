<script >
export default {
    props: {
        titles: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    emits: ['tabItemClick'],
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('tabItemClick', index)
        },
        setCurrentIndex(index) {
            this.currentIndex = index
        }
    }
}
</script>

<template>
    <div class="indexTabBar">
        <template v-for="(item, index) in titles" :key="index">
            <div class="item" :class="{ actiie: index == currentIndex }" @click="itemClick(index)">
                <span>{{ item }}</span>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.indexTabBar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;

    .item {
        flex: 1;
    }

    .actiie {
        color: var(--primary--color);
        font-weight: 700;
    }

    .actiie span {
        border-bottom: 3px solid var(--primary--color);
        padding: 8px;
    }
}
</style>