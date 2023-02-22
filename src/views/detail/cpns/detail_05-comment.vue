<script setup>


import detailSection from '@/components/detail/detail-section.vue';

defineProps({
    commentData: {
        type: Object,
        default: () => { }
    }
})

</script>

<template>
    <div class="comment">
        <detailSection title_text="热门评论" :foot_text="查看全部100条评论">
            <div class="insert">
                <div class="header">
                    <div class="left">
                        <div class="score">
                            <div class="text">{{ commentData?.overall }}</div>
                            <div class="line"></div>
                        </div>
                        <div class="info">
                            <div class="title">{{ commentData?.scoreTitle }}</div>
                            <div class="count">{{ commentData?.totalCount }}条评论</div>
                            <div class="star">
                                <van-rate v-if="commentData?.overall" v-model="commentData.overall" color="#ff9645"
                                    size=12></van-rate>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <template v-for="(item, index) in commentData?.subScores" :key="item">
                            <span class="item">
                                {{ item }}
                            </span>
                        </template>
                    </div>
                </div>
                <div class="tags">
                    <template v-for="(item, index) in commentData?.commentTagVo" :key="index">
                        <span class="item" :style="{ color: item.color, background: item.backgroundColor }">
                            {{ item.text }}
                        </span>
                    </template>
                </div>
                <div class="content">
                    <div class="user">
                        <div class="avatar">
                            <img :src="commentData?.comment.userAvatars" alt="">
                        </div>
                        <div class="profile">
                            <div class="name">
                                {{ commentData?.comment.userName }}
                            </div>
                            <div class="date">
                                {{ commentData?.comment.checkInDate }}
                            </div>
                        </div>
                    </div>
                    <div class="text">{{ commentData?.comment.commentDetail }}</div>
                </div>
            </div>
        </detailSection>
    </div>
</template>

<style lang="less" scoped>
.insert {
    padding: 10px 0;

    .header {
        display: flex;

        .left {
            display: flex;
            align-items: center;

            .score {
                width: 65px;
                height: 100%;
                color: #333;
                position: relative;
                font-weight: 600;

                .text {
                    font-size: 48px;
                    // position: relative;
                    // z-index: 9;
                }

                .line {
                    width: 66px;
                    height: 6px;
                    background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
                    border-radius: 3px;
                    position: absolute;
                    bottom: 6px;
                    // z-index: 5;
                }
            }

            .info {
                margin-left: 19px;
                font-size: 12px;
                color: #333;
            }

            .count {
                margin: 3px 0;
                color: #999;
            }
        }

        .right {
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            justify-content: flex-end;

            .item {
                margin-left: 5px;
                font-size: 12px;
                color: #666;
            }
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;

        .item {
            padding: 3px;
            margin: 0 15px 8px 0;
            font-size: 14px;
            line-height: 14px;
            border-radius: 8px;
        }
    }

    .content {
        padding: 10px 0;
        border-radius: 6px;
        background-color: #f7f9fb;

        .user {
            display: flex;

            .avatar {
                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
            }

            .profile {
                margin-left: 8px;

                .date {
                    margin-top: 3px;
                    font-size: 12px;
                    color: #999;
                }
            }
        }

        .text {
            margin-top: 10px;
            font-size: 12px;
            line-height: 16px;
            color: #333;
        }
    }
}
</style>