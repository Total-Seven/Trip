import HYRequest from '../request'

const url = {
    url: '/city/all'
}

export function getCityAll() {
    return HYRequest.get(url)
}