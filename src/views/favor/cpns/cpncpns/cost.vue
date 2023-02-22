<script setup>
import littleCost from '@/components/favor/cost.vue'
import useFavorStore from '@/store/modules/favor';
import { storeToRefs } from 'pinia';
const favorStore = useFavorStore()
const { user, add_info, del_info } = storeToRefs(favorStore)

const props = defineProps({
    lists: {
        type: Object,
        default: () => { }
    }
})
const emit = defineEmits(['buttonclick'])
defineExpose({})

const select_month = () => {
    var month = prompt("请选择月份");
    // 2023--02
    if (month != null && month != "") {
        // 先改变当前月份
        user.value.current_month = month
        // 发送请求 刷新list
        favorStore.get_bill_list(true)
    }
}
const more = () => {
    favorStore.get_bill_list(false)
}

// add接口
const buttonclick = () => {
    emit('buttonclick')
    // const params = new URLSearchParams()
    // params.append('amount', 210)
    // params.append('type_id', '7')
    // params.append('type_name', '学习')
    // params.append('pay_type', '1')
    // params.append('remark', '多张本功能已完成')
    // params.append('book_id', user.value.book.current_book_id)
    // params.append('book_name', user.value.book.current_bookName)
    // params.append('book_type', user.value.book.current_book_type)
    // const date = prompt("请输入日期");
    // // 20230224
    // if (date != null && date != "") {
    //     params.append('date', date)
    // }
    // add_info.value = params
    // favorStore.add_bill()
    // setTimeout(() => {
    //     console.log(add_info.value);
    // },1000)
}
// del
const delButton = () => {
    // Test：
    var id = prompt("请输入账单ID");
    if (id != null && id != "") {
        const params = new URLSearchParams
        params.append('id', id)
        del_info.value = params
        favorStore.del_bill()
    }
    // 

}
</script>

<template>
    <div class="cost">

        <littleCost class="login" title=" " content_res="1" :foot_text="{ text: '' }">
            <div class="flow">
                <div class="head">
                    <div class="month" @click="select_month">
                        <h3>month</h3>
                    </div>
                    <div class="income">
                        <span>{{ lists[user.book.current_bookName]?.totalIncome }}</span>
                    </div>
                    <div class="expense">
                        <span>{{ lists[user.book.current_bookName]?.totalExpense }}</span>
                    </div>
                </div>
                <div v-for="(item, index) in lists[user.book.current_bookName]?.list" :key="index">
                    <div class="item">
                        <div class="date">
                            <h3>{{ item.date }}</h3>
                        </div>
                        <div class="bill" v-for="(iten, indey) in item.bills" :key="indey">
                            <div class="iten">
                                <div>{{ iten.id }}</div>
                                <div class="name">{{ iten.type_name }}</div>
                                <div class="remark">{{ iten.remark }}</div>
                                <div class="amount">${{ iten.amount }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="foot" @click="more">
                    <button>
                        More
                    </button>
                </div>
                <div class="tab">
                    <!-- <tabBar :tabtitles="['1', '2', '3', '4']" :cur-page=1 :slidable="true" /> -->
                    <div class="add">
                        <button @click="buttonclick">＋</button>
                    </div>
                    <div class="add">
                        <button @click="delButton">-</button>
                    </div>
                </div>
            </div>
        </littleCost>
    </div>
</template>

<style lang="less" scoped>
.cost {
    margin-top: 20px;
    box-sizing: border-box;

    .flow {
        width: 100%;

        .head {
            display: flex;
            justify-content: space-between;

            .month {
                display: flex;
                background-color: #d4f5e5aa;
                width: 70px;
                height: 25px;
                border-radius: 15px;
                border: 2px solid #fff;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
            }
        }


        .item {
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            background-color: #d4f5e5aa;
            border-radius: 9px;
            margin-bottom: 15px;
            justify-content: center;

            // padding: 10px;
            // align-items: center;
            .date {
                // font-size: 20px;
                // font-weight: 800;
                font-style: italic;
                color: #1d2a30;
                margin-left: 7px;
            }

            .iten {
                width: 100%;
                padding: 0 0 10px 10px;
                width: 250px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .amount {
                    position: relative;
                    left: -10px;
                }
            }


        }

        .foot {
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                border: 1px solid #fff;
                border-radius: 10px;
                margin-bottom: 10px;
                background-color: #d4f5e5aa;
                padding-bottom: 4px;
            }
        }

        .tab {
            height: 44px;
            position: fixed;
            bottom: 100px;
            left: 0;
            right: 0;
            margin: auto;

            .add {
                display: flex;
                justify-content: center;

                button {
                    width: 45px;
                    height: 45px;
                    font-size: 20px;
                    font-weight: 700;
                    color: #fff;
                    border: 1px solid #fff;
                    border-radius: 22px;
                    background-color: var(--primary--color);
                }
            }
        }
    }

}
</style>