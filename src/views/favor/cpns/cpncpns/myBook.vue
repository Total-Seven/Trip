<script setup>
import useFavorStore from '@/store/modules/favor';
import { storeToRefs } from 'pinia';
const favorStore = useFavorStore()
const { user } = storeToRefs(favorStore)
defineProps({
    books: {
        type: Array,
        defalut: () => []
    }
})

const click = (bookName, bookId, bookType) => {
    console.log(bookName, user.value.book.current_bookName);
    if (bookName === user.value.book.current_bookName) {
        console.log(true);
    }
    else {
        // 发送网络请求，
        // 修改current_bookName
        user.value.book.current_bookName = bookName
        user.value.book.current_book_id = bookId
        user.value.book.current_book_type = bookType
        favorStore.get_bill_list(true)
    }
}
</script>

<template>
    <div class="Mybook">
        <template v-for="(book, index) in books" :key="book.id">
            <div class="book" @click="click(book.name, book.id, book.book_type)">
                <h2>{{ book.name }}</h2>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.Mybook {
    display: flex;
    overflow-x: auto;
    margin-top: 15px;
    width: 100%;
    // justify-content: space-evenly;
    // padding: 10px;

    .book {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        flex-shrink: 0;
        width: 75px;
        height: 100px;
        background-color: antiquewhite;
        box-shadow: inset -1px 10px 8px 5px antiquewhite, 2px 2px 4px 0px #e9faf2, 1px 9px 15px 5px rgba(0, 0, 0, 0);
        margin-left: 7.5px;


        h2 {
            display: inline-block;
            padding: 10px;
            text-align: center;
            font-size: 22px;
            position: relative;
            top: -2px;
        }
    }
}
</style>