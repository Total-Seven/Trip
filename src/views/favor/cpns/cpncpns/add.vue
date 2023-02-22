<script setup>
import { ref } from 'vue'
import useFavorStore from '@/store/modules/favor';
import { storeToRefs } from 'pinia';
const favorStore = useFavorStore()
const { user } = storeToRefs(favorStore)

const isShow = ref(false)
const current_key = ref('')
const click = (key) => {
    current_key.value = key
    console.log(current_key.value);
}
</script>

<template>
    <div class="add">
        <template v-for="(value, key, index) in user.types " :key="index">
            <div class="box">
                <div class="type" @click="click(key)">
                    <h2>{{ key }}</h2>
                </div>
                <div class="categories">
                    <template v-for="(item, index) in value">
                        <div class="category" v-show="value == user.types[current_key]">
                            <span>{{ item.name }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
@wid: 90vw;
@left: 100vw-@wid;
@color: linear-gradient(#e9d9c4, #4cce8f);

.add {
    // display: none;
    font-family: roboto;
    box-sizing: border-box;
    padding: 20px;
    width: @wid;
    height: auto;
    // 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: calc(@left/2);
    // background: linear-gradient(#018ABE, #b0c0c6);
    background: @color;
    border-radius: 12px;
    box-shadow: inset -1px 3px 8px 5px @color, 2px 5px 16px 0px #505653, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    position: relative;
    z-index: 99;
    margin-bottom: 150px;


    .box {

        // box-shadow: 0 20px 34px 0 rgba(0, 0, 0, 0.20);
        width: @wid - @left;

        .type {
            width: 46px;
            height: 22px;
            text-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0);
            background-color: #F5F5F5AA;
            box-shadow: inset -1px 8px 5px #F5F5F5AA, 2px 5px 4px 0px #505653, 5px 5px 15px 5px rgba(0, 0, 0, 0);
            border-radius: 10px;

            // background-color: #c1523D;
            h2 {
                font-size: 14px;
                text-align: center;
                line-height: 1.5;
            }
        }

        .categories {
            display: flex;
            margin-top: 5px;
            width: 98%;
            flex-wrap: wrap;
            justify-content: flex-start;
            font-size: 14px;
            line-height: 14px;

            .category {
                // background-color: #F4EDB4;
                // flex: 1;
                display: flex;
                flex-direction: row;
                margin-top: 7px;
                flex-shrink: 0;
                width: 20%;
                height: 25px;
                justify-content: center;
                text-align: center;
                border: 1.5px solid #ededecAA;
                border-radius: 20px;
                margin-left: 12px;

                span {
                    font-size: 12px;
                    line-height: 24px;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    // top: 7px;
                }
            }
        }
    }


}
</style>