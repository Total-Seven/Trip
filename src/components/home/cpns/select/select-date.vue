<script setup>
// 
import { ref, computed } from 'vue'
import formatMonthDay from '@/utils/format-MonthDay'
import useMainStore from '@/store/modules/main';
// utils
import { getDiffDays } from '@/utils/format-MonthDay';
// Store
const mainStore = useMainStore()
const { current_time_end, current_time_start } = mainStore
//
// 格式化
const StartTime_Str = ref(formatMonthDay(current_time_start))
const EndTime_Str = ref(formatMonthDay(current_time_end))

let stayDay = ref(getDiffDays(current_time_start, current_time_end))
// calendar 
const showCalendar = ref(false)

const formatter = day => {
    const month = day.date.getMonth() + 1;
    const date = day.date.getDate();
    if (day.type === 'start') {
        day.bottomInfo = '入住';
    } else if (day.type === 'end') {
        day.bottomInfo = '离店';
    }
    return day;
};
const formatDate = (date) => `${date.getMonth() + 1}月${date.getDate()}日`;

const date = ref('')

const onConfirm = (values) => {
    const [start, end] = values;

    // date.value = `${formatDate(start)} - ${formatDate(end)}`;
    StartTime_Str.value = `${formatDate(start)}`
    EndTime_Str.value = `${formatDate(end)}`
    stayDay.value = getDiffDays(start, end)
    // computed
    // console.log(start, end);
    showCalendar.value = false;
};
</script>

<template>
    <div class="date">
        <div class="datebox">
            <div item class="left">
                <span>入住</span>
                <div class="time item" @click="showCalendar = true">{{ StartTime_Str }}</div>
            </div>
            <div :value="date" item class="middle ">共{{ stayDay }}晚</div>
            <div item class="right">
                <span>离店</span>
                <div class="time item" @click="showCalendar = true">{{ EndTime_Str }}</div>
            </div>
        </div>
    </div>
    <van-calendar position="right" type="range" v-model:show="showCalendar" @confirm="onConfirm" :round='false'
        color="#ff9854" confirm-text="完成" confirm-disabled-text="请选择结束时间" :max-range="31" :allow-same-day="true"
        :formatter="formatter" />

    <div class="price-counter">
        <div class="start">价格不限</div>
        <div class="middle"> </div>
        <div class="end">人数不限</div>
    </div>
    <div class="keyword">关键字/位置/民宿名</div>
</template>

<style lang="less" scoped>
.datebox {
    display: flex;
    // flex-wrap: wrap;
    margin-top: 5px;
    align-items: center;
    padding: 0 20px;
    padding-left: 30px;
    color: #333;

    .left {
        flex: 1;
        height: 44px;

        // text-align: center;
        // align-items: center;
    }

    .middle {
        flex: 1;
        height: 44px;
        display: flex;
        padding-left: 20px;
        padding-bottom: 12px;
        align-items: center;
        min-width: 30%;
        // text-align: center;

    }

    .right {
        flex: 1;
        height: 44px;
        min-width: 30%;
        padding-left: 10px;
        // text-align: center;
    }

    .item {
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 12px;
        color: #999;
    }

    .time {
        margin-top: 3px;
        font-size: 15px;
        font-weight: 500;
    }
}

.price-counter {
    display: flex;
    // flex-wrap: wrap;
    margin-top: 5px;
    align-items: center;
    padding: 0 20px;
    padding-left: 30px;
    color: #999;
    height: 44px;


    .start {
        flex: 1;
    }

    .middle {
        flex: 1;
        display: flex;
        // margin-left: 5px;
        padding-left: 20px;
        padding-bottom: 12px;
        align-items: center;
        min-width: 30%;
        // text-align: center;
        border-right: 1px solid #f8f9f9;
    }

    .end {
        flex: 1;
        min-width: 30%;
        padding-left: 5px;
        // text-align: center;

    }
}

.keyword {
    height: 44px;
    display: flex;
    // flex-wrap: wrap;
    margin-top: 5px;
    align-items: center;
    padding: 0 20px;
    padding-left: 30px;
    color: #999;
}
</style>