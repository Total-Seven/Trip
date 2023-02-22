<script setup>
import Section from '@/components/detail/detail-section.vue'

defineProps({
    facilityData: {
        type: Object,
        default: () => { }
    }
})

</script>

<template>
    <div class="facility">
        <Section title_text="房屋设施" foot_text="查看全部设施">
            <div class="insert" v-if="facilityData">
                <template v-for="(value, key, index) in facilityData.houseFacility.houseFacilitys" :key="index">
                    <div class="item" v-if="facilityData.houseFacility.facilitySort.includes(value.groupId)">
                        <div class="ul">
                            <img :src="value.icon" />
                            <span>{{ value.groupName }}</span>
                        </div>
                        <div class="li">
                            <template v-for="(item, index) in value.facilitys.slice(0, 4) ">
                                <div class="iten">
                                    <i class="icon icon_check"></i>
                                    <span>{{ item.name }}</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </Section>
    </div>
</template>

<style lang="less" scoped>
.facility {

    .insert {
        display: flex;
        flex-direction: column;
        background-color: #f7f9fb;
        padding: 30px 0 30px 15px;

        .item:nth-last-child(1) {
            margin-bottom: 0 !important;
        }

        .item {
            height: 40px;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 30px;

            .ul {
                width: 120px;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                margin-right: 15px;

                img {
                    width: 30px;
                    height: 30px;
                }
            }

            .li {
                // width: 260px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                position: relative;
                top: 5px;
                left: 15px;
                // align-items: center;

                .iten {
                    display: flex;
                    // height: 20px;
                    align-items: center;
                    width: 120px;
                    margin-right: 10px;
                    margin-bottom: 6px;

                    .icon_check {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: url(@/assets/img/detail/icon_check.png) 0 0 /100% 100%;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>