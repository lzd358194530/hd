//设置rem 字体大小
export const setGlobalFontSize = (n) => {
    let oHtml = document.getElementsByTagName('html')[0],
        width = oHtml.offsetWidth;
    oHtml.style.fontSize = width / n + 'px'
}


//cookie
export const cookie = {
    //设置cookie：
    setCookie : (name, value) => {
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },

    //读取cookie： 
    getCookie : (name) => {
        let arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");　　
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
    },

    //删除cookie（将cookie设置过期即可）：
    delCookie : (name) => {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = cookie.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },

}

/**
 * 数据使用localStorage存储
 */
export const ls = {
    //本地存数据，days 有效时间（天）
    setItem: function(key, value, days) {
        let Days = Days || 7; //有效时间默认7天
        let exp = new Date();
        let expires = exp.getTime() + Days * 24 * 60 * 60 * 1000;

        localStorage.setItem(key, JSON.stringify({
            value,
            expires
        }));

    },
    getItem: function(key) {
        let o = JSON.parse(localStorage.getItem(key));

        if (!o || o.expires < Date.now()) {
            return null
        } else {
            return o.value
        }
    },
    removeItem: function(key) {
        localStorage.removeItem(key)
    }
}

const copy = (obj) => {
    let copy = Object.create(Object.getPrototypeOf(obj));
    let propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        //获取指定对象的自身属性描述符
        let desc = Object.getOwnPropertyDescriptor(obj, name); 
        Object.defineProperty(copy, name, desc);
    });
    return copy;
}

//vuex 数据localstorage存储插件
export const vuexToLocalStorage = store => {
    // 当 store 初始化后调用
    let savedState = ls.getItem('vuex');
    if (savedState) {
        store.replaceState(savedState);
    }
    store.subscribe((mutation, state) => {
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
        let storeClone = copy(state);
        ls.setItem('vuex', storeClone);
    })
}

export default{
    setGlobalFontSize,
    cookie,
    ls,
    vuexToLocalStorage
}

