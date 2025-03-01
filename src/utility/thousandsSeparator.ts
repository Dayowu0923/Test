//--轉換數字格式(千分位)--

export function thousandsSeparator(num, locale = "zh-TW", decimal = 2) {
    return num.toLocaleString(locale, { maximumFractionDigits: decimal });
}