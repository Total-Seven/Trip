<script setup>
//
import useFavorStore from '@/store/modules/favor';
import { storeToRefs } from 'pinia';

//
import tabBar from '@/components/tab_bar/cost-Tab-Bar.vue';
// 

// 
import cost from '@/views/favor/cpns/cpncpns/cost.vue'
import topNav from '@/views/favor/cpns/cpncpns/header.vue'
import mybook from '@/views/favor/cpns/cpncpns/myBook.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const currentBook = ref(0)
const bookActive = ref(0)

// Store 网络请求
const favorStore = useFavorStore()
const { user, infos, add_info, del_info, list_obj, lists } = storeToRefs(favorStore)


function getData(book_id) {
    return new Promise((resolve, reject) => {
        // 查找
        const res = book_id
        // 成功
        resolve(res)
        // 失败
        reject(err)
    })
}
// 模拟：根据currentBook 在数据库里查找用户的账本
const click = async (index) => {
    console.log(index);
    const res = await getData(index)
    currentBook.value = res
}
const shift = () => {
    currentBook.value++
    currentBook.value == 4 ? currentBook.value = 0 : currentBook.value = currentBook.value
}


// login
const params = new URLSearchParams()
params.append('username', 'Link')
params.append('password', '123456')
user.value.urlSearchParams = params
favorStore.fetchToken()

// getUserInfos 
setTimeout(() => {
    // 登录后，从服务器返回用户信息，用于展示用户的个人中心
    favorStore.fetchUserInfos()
    setTimeout(() => {
        favorStore.get_bill_list()
    }, 1000)
}, 1500)


const add = () => {
    console.log('add');
    router.push('/add')
}
</script>

<template>
    <div class="meta">
        <topNav :infos="infos"></topNav>
        <mybook :books="user.books" />
        <!-- <div class="Btn">
            <div class="search">
                <div class="btn" @click="shift">切换账本</div>
            </div>
        </div> -->
        <cost :lists="lists" @buttonclick="add" />
        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
@auto: auto;

.meta {
    // background-color: rgba(255, 255, 255, 0.3);
    // background-color: #ffc0cbaa;
    // background-color: ;
    background: linear-gradient(#6BCBA5, #CAF4C2);



    .Btn {
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
    }




}
</style>