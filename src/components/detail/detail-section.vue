<script setup>

defineProps({
    title_text: {
        type: String,
        default: "默认标题"
    },
    foot_text: {
        type: String,
        default: ""
    }
})

</script>

<template>
    <div class="sction center-cpn">
        <div class="top">
            <h2>{{ title_text }}</h2>
        </div>
        <div class="content">
            <slot>默认内容</slot>
        </div>
        <div class="foot" v-if="foot_text.length">
            <span>{{ foot_text }}</span>
            <van-icon name="arrow" color="var(--primary--color)" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.top {
    border-top: 2px solid #f7f8f9;
}

.content {
    padding: 0 5px;
}

.foot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    font-size: 16px;
    color: var(--primary--color);
    margin-bottom: 10px;
}
</style>