import dayjs from 'dayjs'

function formatMonthDay(date) {
    return dayjs(date).format('MM月DD日')
}

export function getDiffDays(start, end) {
    return dayjs(end).diff(start, "day")
}

export default formatMonthDay