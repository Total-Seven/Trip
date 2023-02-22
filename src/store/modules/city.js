import { getCityAll } from '@/service'
import { defineStore } from 'pinia'

// 一个对象
const city = {
    state: () => (
        // state函数返回一个对象，对象里的属性都是全局变量（状态）
        {
            allcities: {},
            currentCity: { cityName: '福建' },
            currentTime: { start: '', end: '', }
        }
    ),
    getters: {},
    actions: {
        async fetchAllCitiesData() {
            console.log('This is fetchAllCitiesData');
            const res = await getCityAll()
            this.allcities = res.data
        }
    },
}
// 变成全局对象
const useCityStore = defineStore('city', city)
// 导出
export default useCityStore