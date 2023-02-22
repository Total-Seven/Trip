<script setup>
import detailSection from '@/components/detail/detail-section.vue';

defineProps({
    noticeData: {
        type: Array,
        default: () => []
    }
})

</script>

<template>
    <div class="notice">
        <detailSection title_text="预定须知">
            <div class="insert">
                <template v-for="(item, index) in noticeData">
                    <div class="item">
                        <div class="title">{{ item.title }}</div>
                        <div class="intro">{{ item.introduction }}</div>
                        <div class="tip" v-if="item.tips">查看说明</div>
                    </div>
                </template>
            </div>
        </detailSection>
    </div>
</template>

<style lang="less" scoped>
.notice {
    .item {
        display: flex;
        margin: 10px 0 20px;
        font-size: 12px;

        .title {
            width: 64px;
            color: #666;
        }

        .intro {
            flex: 1;
            color: #333;
        }
    }
}
</style>