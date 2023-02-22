<script setup>

defineProps({
    infos: {
        type: Object,
        default: () => { }
    }
})


</script>

<template>
    <div class="headSculpture" v-show="infos?.avatar">
        <img :src="infos?.avatar" alt="">
        <div class="text">
            <strong>Hi </strong>
            <span>{{ infos?.username }}</span>
            <!-- <span>Let's cost your consumption! </span> -->
        </div>
    </div>
</template>

<style lang="less" scoped>
.headSculpture {
    height: 66px;
    display: flex;
    box-sizing: border-box;
    padding: 20px 15px 0;

    img {
        width: 42px;
        height: 42px;
        border-radius: 10px;
    }

    .text {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;

        strong {
            font-size: 25px;
        }

        span {
            margin-left: 5px;
            font-size: 25px;
        }
    }
}
</style>