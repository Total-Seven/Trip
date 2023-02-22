import { getAreaAll } from '@/service'
import { getGredeAll } from '@/service'
import { getFantasticAll } from '@/service'
import { defineStore, storeToRefs } from 'pinia'
import useMainStore from './main'
const mainStore = useMainStore()
let { isloading } = storeToRefs(mainStore)

const useHomeStore = defineStore('home', {
    state: () => (
        {
            allareas: [],
            hotgrede: [],
            currentPage: 1,
            fantastic: [],
        }
    ),
    getters: {},
    actions: {
        async fetchAllAreas() {
            console.log('One is fetchAllAreas');
            const res = await getAreaAll()
            this.allareas = res.data
        },
        async fetchHotGredes() {
            console.log('Two is fetchHotGredes');
            const res = await getGredeAll()
            this.hotgrede = res.data
        },
        async fetchFantastic() {
            console.log('Three is fetchFantastic');
            const res = await getFantasticAll(this.currentPage++)
            this.fantastic.push(...res.data)
        }
    },
})

export default useHomeStore