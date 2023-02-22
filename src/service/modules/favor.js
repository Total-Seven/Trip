import HYRequest from '../request/index'

export function PostUserToken(data) {
    return HYRequest.post({
        url: '/user/login',
        Headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        data,
    })
}

export function getUserTest() {
    return HYRequest.get({
        url: '/user/test',
        // headers: {
        //     authorization: token
        // }
    })
}

export function getUserInfos() {
    return HYRequest.get({
        url: '/user/get_userinfo',
        // headers: {
        //     authorization: token
        // }
    })
}

export function addBill(data) {
    return HYRequest.post({
        url: '/bill/add',
        Headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        data,
    })
}

export function delBill(data) {
    return HYRequest.post({
        url: '/bill/delete',
        Headers: {
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        data,
    })
}

export function getBillList(current_book_id, date, cuurent_page, page_size = 5) {
    return HYRequest.get({
        url: `/bill/list?book_id=${current_book_id}&date=${date}&page_size=${page_size}&page=${cuurent_page}`,
    })
}