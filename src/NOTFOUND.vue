<script setup>

/**
* var
*/
/**
* function
*/

defineProps({})
defineEmits({})
defineExpose({})

</script>

<template>
    <div class="not">
        404 Not Found~
        <p>路径: {{ $route.params.pathMatch }}不正确</p>
    </div>
</template>

<style lang="less" scoped>
.not {
    margin-top: 30px;
    text-align: center;
}
</style>