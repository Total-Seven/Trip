<script setup>

defineProps({
    title: {
        type: String,
        default: ''
    },
    foot_text: {
        type: Object,
        defalut: () => { text: '' }
    },
    content_res: {
        type: String,
        defalut: ''
    },
})

</script>

<template>
    <div class="cost-test">
        <div class="inner">
            <div class="Head">{{ title }}</div>
            <div class="content">
                <div class="contentInner">
                    <!-- <span>Token密钥: </span> -->
                    <slot></slot>
                    <!-- <span>{{ content_res }}</span> -->
                </div>
            </div>
            <div class="rightFoot">{{ foot_text.text }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.cost-test {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    width: 300px;
    // height: 300px;
    border-radius: 6px;
    box-sizing: border-box;
    -webkit-box-shadow: inset -1px 3px 8px 5px #51de9a, 2px 5px 16px 0px #e9faf2, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: inset -1px 3px 8px 5px #51de9a, 2px 5px 16px 0px #e9faf2, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    background: #4ae99c;

    .inner {
        color: #1d2a30;
        box-sizing: border-box;
        padding: 6px;

        .Head {
            position: relative;
            font-size: 30px;
            font-style: italic;
            top: 10px;
            text-align: center;

        }

        .content {
            margin-top: 5px;

            .contentInner {
                padding: 15px;
                word-wrap: break-word;
                // white-space: ;
            }
        }

        .rightFoot {
            position: absolute;
            bottom: 10px;
            right: 0;
            left: 0;
            padding-top: 8px;
            padding-left: 10px;
            font-size: 16px;
            font-weight: 700;
            line-height: 16px;
            text-align: center;
            border-top: 1.5px solid rgba(0, 0, 0, 0.2);
        }
    }
}
</style>