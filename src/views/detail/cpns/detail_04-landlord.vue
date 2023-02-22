<script setup>

import detailSection from '@/components/detail/detail-section.vue';

defineProps({
    landData: {
        type: Object,
        default: () => { }
    }
})
</script>

<template>
    <div class="landlord">
        <detailSection title_text="房东信息" foot_text="查看房东主页">
            <div class="insert">
                <div class="top">
                    <img :src="landData?.topScroll" alt="">
                </div>
                <div class="header">
                    <div class="left">
                        <div class="avatar">
                            <img :src="landData?.hotelLogo" alt="">
                        </div>
                        <div class="info">
                            <div class="name">
                                {{ landData?.hotelName }}
                            </div>
                            <div class="tags">
                                <template v-for="(item, index) in landData?.hotelTags">
                                    <div class="item" :style="{ color: item.tagText.color }">
                                        <span>{{ item.tagText.text }}</span>
                                        <span v-if="index !== landData.hotelTags.length - 1" class="divider">|</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="contact">联系房东</div>
                    </div>
                </div>
                <div class="bottom">
                    <template v-for="(item, index) in landData?.hotelSummary">
                        <div class="item">
                            <div class="title">{{ item?.title }}</div>
                            <div class="score">{{ item?.introduction }}</div>
                            <div class="desc">{{ item?.tip }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </detailSection>
    </div>
</template>

<style lang="less" scoped>
.insert {
    .top {
        img {
            width: 100%;
            border-radius: 3px;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .left {
        display: flex;

        .avatar {
            img {
                width: 54px;
                height: 54px;
            }
        }

        .info {
            // margin-left: 10x;

            .name {
                margin-top: 8px;
                font-size: 16px;
                font-weight: 600;
            }

            .tags {
                display: flex;
                margin-top: 5px;
                font-size: 12px;

                .divider {
                    margin: 0 5px;
                }
            }
        }
    }

    .right {
        .contact {
            height: 24px;
            line-height: 24px;
            border-radius: 6px;
            padding: 0 12px;
            font-size: 12px;
            color: #fff;
            background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        }
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        margin: 35px 10px 10px;

        .item {
            font-size: 12px;

            .title {
                color: #999
            }

            .score {
                margin: 5px 0;
                font-size: 18px;
                font-weight: 700;
                color: #333;
            }

            .desc {
                color: #666;
            }
        }
    }
}
</style>