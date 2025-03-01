// 驗證 email 格式
export const isValidEmail = (email) => {
    const emailRex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRex.test(email);
}
  
// 驗證手機格式
export const isValidPhone = (phone) => {
    const phoneRex = /^09[0-9]{8}$/;
    return phoneRex.test(phone);
}
  
  // 驗證地址格式
export const isValidAddress = (address) => {
    // 僅匹配漢字或數字，排除特殊符號，限制長度為5-100
    const addressRex = /^[\p{Script=Han}\p{Number}]{5,100}$/u;
    return addressRex.test(address);
}
  
// 驗證表單
export const verify = ({ name, phone, email, address }, carData) => {
    // 檢查購物車是否有商品
    if (carData.length === 0) return "購物車內沒有商品";
    // 檢查欄位是否空白
    if (!name || !phone || !email || !address) return "請填寫完整資料";
    // 驗證手機格式
    if (!isValidPhone(phone)) return "手機格式有誤喔";
    // 驗證 email 格式
    if (!isValidEmail(email)) return "email格式有誤喔";
    // 驗證地址格式
    if (!isValidAddress(address)) return "地址格式有誤喔";
  
    return 0;
}