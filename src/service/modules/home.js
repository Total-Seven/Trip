import HYRequest from '../request'

const Areaurl = {
    url: '/home/hotSuggests'
}

const Gredeurl = {
    url: '/home/categories'
}

// 
export function getAreaAll() {
    return HYRequest.get(Areaurl)
}

export function getGredeAll() {
    return HYRequest.get(Gredeurl)
}

export function getFantasticAll(currentPage) {
    return HYRequest.get({
        url: '/home/houselist',
        params: {
            page: currentPage
        }
    })
}