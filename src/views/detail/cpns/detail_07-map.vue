<script setup>
import detailSection from '@/components/detail/detail-section.vue';
import { onMounted, ref } from 'vue';
const props = defineProps({
    mapData: {
        type: Object,
        default: () => { }
    }
})
const mapRef = ref()

onMounted(() => {

    const map = new BMapGL.Map(mapRef.value);         // 创建地图实例 
    const point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    // let marker = new BMapGL.Marker(point);        // 创建标注   
    // map.addOverlay(marker);                     // 将标注添加到地图中
})


</script>

<template>
    <div class="mapmap">
        <detailSection title_text="位置周边" foot_text="查看更多周边信息">
            <div class="baidu" ref="mapRef"></div>
            <!-- <div id="container">container</div> -->
        </detailSection>
    </div>
</template>

<style lang="less" scoped>

</style>


