import { defineStore } from "pinia";

const current_time_start = new Date()
const current_time_end = new Date()
current_time_end.setDate(current_time_start.getDate() + 1)

const useMainStore = defineStore('main', {
    state: () => ({
        current_time_start,
        current_time_end,

        isloading: false,
    }),
    actions: {

    }
})


export default useMainStore