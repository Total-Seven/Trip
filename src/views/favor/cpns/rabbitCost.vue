<script setup>
import { ref, onMounted, computed, watch, toRaw } from 'vue';
import cost from '@/components/favor/cost.vue'
import loading from '@/components/load/load.vue'

// Store
import useFavorStore from '@/store/modules/favor'
import { storeToRefs } from 'pinia';


const FavorStore = useFavorStore()
const { user, info } = storeToRefs(FavorStore)

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    content_text: {
        type: Object,
        default: () => { },
    }
})
// test



onMounted(async () => {
    // axios({
    //     url: 'api',
    //     method: 'get'
    // }).then(res => {
    //     console.log(res.data);
    // })
    // HYRequest.get().then(res => {
    //     console.log(res.data);
    // })

    // const params = new URLSearchParams()
    // params.append('username', 'Link')
    // params.append('password', '123456')
    // HYRequest.post({
    //     url: 'user/login',
    //     Headers: {
    //         "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    //     },
    //     data: params,
    // }).then(res => {
    //     console.log(res);
    //     localStorage.setItem('token', res.data.token)
    //     console.log('将用户token保存到session中');
    // })


})


const shift = () => {
    const params = new URLSearchParams()
    params.append('username', 'Hary')
    params.append('password', '123456')
    user.value.urlSearchParams = params
    FavorStore.fetchToken()
    // router.push({
    //     path: '/search',
    //     query: {
    //         currentCity: cityStore.currentCity.cityName,
    //         nowTime: cityStore.currentTime.start,
    //         endTime: cityStore.currentTime.end,
    //     }
    // })
}
const test = () => {
    FavorStore.fetchTest()
}
</script>

<template>
    <div class="rabbit">
        <loading />
        <div class="search">
            <div class="btn" @click="shift">登录</div>
        </div>
        <br />
        <!-- 1 -->
        <div class="first">
            <cost class="login" :title="title" :content_res="user?.token" :foot_text="content_text">
                <span>Token密钥: </span>
            </cost>
        </div>
        <div class="search">
            <div class="btn" @click="test">测试</div>
        </div>
        <!-- 2 -->
        <div>
            <cost class="test" title="Test" :content_res="info?.username"
                :foot_text="{ text: 'Until that one fateful day' }">
                <span>Object:</span>
            </cost>
        </div>
        <div>
            <cost class="info" title="Test" :content_res="{}" :foot_text="{ text: 'Until that one fateful day' }">
                <span>{{ token }}</span>
            </cost>
        </div>
        <div>
            <cost class="three" title="Test" :content_res="0" :foot_text="{ text: 'Until that one fateful day' }">
            </cost>
        </div>
    </div>
</template>

<style lang="less" scoped>
.rabbit {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-content: space-around;

    .search {
        margin-top: 5px;
        align-items: center;
        padding: 10px 20px;
        padding-left: 30px;
        color: #333;
        // 

        .btn {
            width: 352px;
            height: 38px;
            max-height: 50px;
            font-size: 18px;
            font-weight: 500;
            line-height: 38px;
            text-align: center;
            border-radius: 20px;
            color: #fff;
            background-image: var(--color-linear-gradient);
        }
    }

    .login {
        flex: 1;
        position: relative;
        // z-index: 9;
    }

    .first {
        margin-bottom: 20px;
    }

    .first~div {
        margin-bottom: 20px;
    }

    .test {
        flex: 1;
        position: relative;
    }

    .info {
        flex: 1;
        position: relative;

    }

    .three {
        flex: 1;
        position: relative;

    }


}
</style>