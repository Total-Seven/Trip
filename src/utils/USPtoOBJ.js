function USPtoOBJ(usp) {
    const obj = {}
    for (const item of usp.entries()) {
        obj[item.at(0)] = item.at(1)
    }
    return obj
}

export function getDiffDays(start, end) {
    return dayjs(end).diff(start, "day")
}

export default USPtoOBJ