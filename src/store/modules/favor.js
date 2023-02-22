import { PostUserToken, getUserTest, getUserInfos, addBill, delBill, getBillList } from "@/service/modules/favor";
import { defineStore } from "pinia";
import dayjs from 'dayjs'
import { toRaw } from "vue";

const useFavorStore = defineStore('favor', {
    state: () => ({
        user: {
            urlSearchParams: {},  //账号密码
            token: '',            //Token
            // 记录当前的选择 
            current_month: dayjs().format('YYYY-MM'),
            current_totalPage: 1,
            // 分页
            current_page: 1,
            // 当前账本信息
            book: { current_book_id: 0, current_bookName: '默认账本', current_book_type: 0 },
            // 默认账本
            default_book_id: null,
            books: [],
            types: {}
        },
        info: {},   //没啥用
        infos: {},  //用户信息（名字，头像，站本[]，默认账本ID、）
        // ❌用params
        add_info: {},  //添加bill的信息
        // ❌用params
        del_info: {},  //删除bill的信息

        /**
         * 核心
         */
        // 如何添加分账本功能
        // 一、将list对象分为1，2，3，4放进一个对象(lists)里，
        //      也就是不再渲染list，而是lists.账本名 ,将[账本名]用current_bookName保存。全局都会用到这个变量。
        //      默认current_bookName为'默认账本'，也就是一开始V-for渲染lists['默认账本'],它的value就是现在的list.
        //      后端返回的data里除了list、还要有账本名，
        //     🆗
        // 二、 用户修改账本信息(Name,budget)，发送请求，请求成功,
        //  前端需要做什么？
        //      1.一旦添加一个账本，就需要在lists里添加一个数组。
        //      2.添加后切换，
        //  后端需要做什么？
        //      1. add_book、shift_book、del_book、alter_book.
        //      2. add_book返回一个list
        // 
        // 二、切换后改变list.
        //     点击切换，发送请求，请求成功
        //     返回新的list，
        //     直接覆盖原list或删除原list创建新的。（Store可以动态新建变量吗？）
        //     直接覆盖的方法（=赋值）

        /**
         * 账本信息
         */
        // list_obj: { book_id=0, totalExpense: 0, totalIncome: 0, totalPage: 0, list: [] },
        lists: {}
        // 当前月的账单列表
    }),
    actions: {
        async fetchToken() {
            const res = await PostUserToken(this.user.urlSearchParams)
            localStorage.setItem('token', res.data.token) // 前端保留token 在当前浏览器
            this.user.token = res.data.token  //用户的token没什么用好像，可以删。
            console.log('1.登入=>fetchToken:', res.data.token);  //方便调式，可以删
            this.fetchTest()
        },
        async fetchTest() {
            const res = await getUserTest()
            console.log('2.测试=>fetchTest:', res);  //方便调式，可以删
            this.info = res.data
        },
        init() {
            this.user.books.forEach(item => {
                this.lists[item.name] = {}
            })
        },
        async fetchUserInfos() {
            const res = await getUserInfos()
            console.log('3.获取用户信息=>fetchUserInfos:', res);
            this.infos = res.data
            this.user.books = res.data.books
            // 默认账本ID
            this.user.default_book_id = res.data.default_book_id
            // 当前账本ID
            this.user.book.current_book_id = res.data.default_book_id
            // 默认账本对象
            const default_book = this.user.books.find(item => item.id == res.data.default_book_id)
            // 当前账本名
            this.user.book.current_bookName = default_book.name
            // 用户的所有类别
            this.user.types = res.data.typess
            this.init()
            /**
             * 用默认ID匹配Book，因为有可能被改名了。
             */
            // console.log(this.user.books);
        },
        async add_bill() {
            const res = await addBill(this.add_info)
            console.log('*.加加加add_bill:', res);
            if (res.code == 200) {
                this.add_info.append('id', res.data.insertId)
                const obj = {}
                for (const item of this.add_info.entries()) {
                    obj[item.at(0)] = item.at(1)
                }
                // 根据this.bill的日期，取遍历list数组，找到{date：‘相应的日期’}这个对象，
                // 然后往它的bills数组里shift添加一个对象
                // console.log('this.lists[this.user.current_bookName].list第一个元素的日期', this.lists[this.user.current_bookName].list[0].date);
                if (!this.lists[this.user.book.current_bookName].list) {
                    console.log('空空如也');
                    !this.lists[this.user.book.current_bookName].list.bills.unshift(obj)
                }
                const target = this.lists[this.user.book.current_bookName].list.find(element => {
                    return dayjs(element.date).format('YYYYMMDD') == this.add_info.get('date')
                })
                // 将URLSearchparams对象拷贝一份
                if (target) {
                    console.log('target');
                    target.bills.unshift(obj)  // 添加add
                    this.lists[this.user.book.current_bookName].totalExpense += Number(this.add_info.get('amount'))
                }
                else {
                    console.log('noTarget');
                }
            }
        },
        async del_bill() {
            // 数据库中删除：
            const res = await delBill(this.del_info)
            console.log('*.退退退del_bill:', res);
            // 前端这删除：
            const date = dayjs(res.data[0].date).format('YYYY-MM-DD')   //拿到删除的数据的创建时间
            const target = this.lists[this.user.book.current_bookName].list.find(element => {         //在当前月渲染的list中找对应一天的数组
                return element.date == date
            })
            if (target) {
                const del_target_id = target.bills.findIndex(item => {     //在数组里找要删除的数据的id
                    return item.id == this.del_info.get('id')
                })
                this.lists[this.user.book.current_bookName].totalExpense -= Number(target.bills[del_target_id].amount)  //先减价格
                target.bills.splice(del_target_id, 1)
            }
            //删除成功
            // console.log(target.bills[del_target_id]);
        },
        async get_bill_list(isAlter = false,) {
            if (isAlter) {
                this.user.current_page = 1
                this.user.current_totalPage = 1
            }
            // this.lists['默认账本'] = this.list_obj
            console.log('current_page=', this.user.current_page,);
            // 拉到底了
            if (this.user.current_page > this.user.current_totalPage) {
                alert('到底啦')
                return
            }
            console.log('month', this.user.current_month);
            const res = await getBillList(this.user.book.current_book_id, this.user.current_month, this.user.current_page++)
            console.log('4.拿数据咯=>get_bill_list:', res);
            // 首次加载，直接拿数据
            if (!this.lists[this.user.book.current_bookName].list) {
                console.log('4.拿数据咯=>get_bill_list:我进来啦！');
                this.lists[this.user.book.current_bookName] = res.data
                this.user.current_totalPage = res.data.totalPage
            }
            // 切换账本
            else if (isAlter) {
                console.log(this.user.book.current_bookName);
                this.lists[this.user.book.current_bookName] = res.data
                console.log('4.拿数据咯=>get_bill_list:切换账户！');
                this.user.current_totalPage = res.data.totalPage
                // this.lists['xx账本'] = this.lists[this.user.current_bookName]
            }
            else {
                // 后续加载，用数组push
                this.lists[this.user.book.current_bookName].totalExpense = res.data.totalExpense
                this.lists[this.user.book.current_bookName].totalIncome = res.data.totalIncome
                this.lists[this.user.book.current_bookName].totalPage = res.data.totalPage
                this.lists[this.user.book.current_bookName].list.push(...res.data.list)
                console.log('4.拿数据咯=>get_bill_list:后续Push！');
            }
        }
        // 一开始为用户创建默认
    }
})

export default useFavorStore