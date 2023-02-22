import HYRequest from '../request'

export function getDetail(houseId) {
    return HYRequest.get({
        url: '/detail/infos',
        params: {
            houseId
        }
    })
}