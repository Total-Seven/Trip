<script setup>

defineProps({
    topData: {
        type: Object,
        default: () => { }
    }
})

</script>

<template>
    <div class="info">
        <div class="inner" v-if="topData">
            <h2 class="title child">{{ topData.houseName }}</h2>
            <div class="tag child">
                <template v-for="(item, index) in topData.houseTags">
                    <div class="trait" :style="{
                        color: item.tagText?.color, background: item.tagText?.background.color
                    }">
                        {{ item.tagText?.text }}
                    </div>
                </template>
            </div>
            <div class="comment child box">
                <div class="left">
                    <div class="first">{{ topData.commentBrief.overall }}</div>
                    <div class="second">{{ topData.commentBrief.scoreTitle }}</div>
                    <div class="third">"{{ topData.commentBrief.commentBrief }}""</div>
                </div>
                <div class="right">
                    {{ topData.commentBrief.totalCount }}条评论
                    <van-icon name="arrow" color="var(--primary--color)" />
                </div>
            </div>
            <div class="position child box">
                <div class="left address">
                    {{ topData.nearByPosition.address }}
                </div>
                <div class="map right"><span>地图 周边</span><van-icon name="arrow" color="var(--primary--color)" /></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.info {
    box-sizing: border-box;
    padding: 10px;

    .child {
        margin-bottom: 15px;
        color: #404647;
    }

    .title {
        font-size: 24px;
        margin-top: 5px
    }

    .tag {
        display: flex;
        justify-content: flex-start;


        .trait {
            display: inline-block;
            margin-right: 5px;
            padding: 2px;
        }
    }

    .box {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding: 0 10px;
        height: 44px;
        line-height: 44px;
        // vertical-align: baseline;
        background-color: rgba(155, 155, 155, 0.1);
    }

    .comment {
        .left {
            display: flex;


            :nth-child(n) {
                margin-right: 3px;
            }

            :first-child {
                position: relative;
                top: -2px;
                font-size: 22px;
                font-weight: 700;
            }

            .second {
                font-weight: 700;
            }
        }

        .right {
            color: var(--primary--color);
        }
    }

    .position {
        margin-bottom: 0;

        .address {
            font-size: 12px;
            font-weight: 800;
        }

        .right {
            color: var(--primary--color);
        }
    }
}
</style>