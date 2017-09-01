const setGlobalFontSize = (n) => {
    let oHtml = document.getElementsByTagName('html')[0],
        width = oHtml.offsetWidth;
    oHtml.style.fontSize = width / n + 'px'
}

//设置cookie：
const setCookie = (name, value) => {
    let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookie：
const getCookie = (name) => {
    let arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");　　
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
}

//删除cookie（将cookie设置过期即可）：
const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}




export default {
    setGlobalFontSize,
    setCookie,
    getCookie,
    delCookie
}

