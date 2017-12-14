//设置rem 字体大小
export const setGlobalFontSize = (n) => {
    let oHtml = document.getElementsByTagName('html')[0],
        width = oHtml.offsetWidth;
    oHtml.style.fontSize = width / n + 'px'
}


//类名公用方法
export const hasClass = (obj, cls) => {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export const addClass = (obj, cls) => {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

export const removeClass = (obj, cls) => {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

export const toggleClass = (obj, cls) => {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}


//cookie
export const cookie = {
    //设置cookie：
    setCookie: (name, value) => {
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },

    //读取cookie： 
    getCookie: (name) => {
        let arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");　　
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
    },

    //删除cookie（将cookie设置过期即可）：
    delCookie: (name) => {
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

//帧动画 RAF

export const RAF= ()=>{
    if (!Date.now)
        Date.now = function() { return new Date().getTime(); };

    (function() {
        var vendors = ['webkit', 'moz'];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                       || window[vp+'CancelRequestAnimationFrame']);
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
            || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() { callback(lastTime = nextTime); },
                                  nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
    }());
}




/**移动端事件封装
 * [touchs description]
 * @param  {string}   type     ['up'/'down'/'left'/'right']
 * @param  {element}   el       [element]
 * @param  {number}   distance   [触发事件 需要滑动的距离]
 * @param  {Function} callback [callback的this已绑定el]
 * @return {null}           
 * 调用: touchs('left',oBox,callback)
 */
export const touchs = (type, el, distance, callback) => {
    var start = 0,
        end = 0,
        position = '',
        x = 1,
        //distance = 20, //触发事件 需要滑动的距离
        isMove = false;
    switch (type) {
        case 'up':
            position = 'clientY';
            break;
        case 'down':
            position = 'clientY';
            x = -1;
            break;
        case 'left':
            position = 'clientX';
            break;
        case 'right':
            position = 'clientX';
            x = -1;
            break;
        default:
            break;
    }
    el.addEventListener('touchstart', function(event) {
        let touchs = event.changedTouches[0];
        start = touchs[position];
    }, false);
    el.addEventListener('touchmove', function() {
        isMOve = true;
    }, false);
    el.addEventListener('touchend', function(event) {
        let touchs = event.changedTouches[0];
        let end = touchs[position];
        if ((start - end) * x > distance && isMOve) {
            callback && callback.call(el);
        }
    }, false);
}

//获取计算样式
export const getStyle = (el, attr) => {
    return window.getComputedStyle ? window.getComputedStyle(el, null)[attr] : el.currentStyle[attr];
}

// js设置/获取transform样式 (只能适用于行内样式)
// 并给元素赋值一个属性 transform 
// transform 的值是一个对象,存储元素的 transform 样式字符串
// val 值必须为 number  不能设置简写模式
// 参数有 val 表示设置 没有val 代表取值
export const cssTransform = (el, attr, val) => {
    let value = 0; //属性的值(没有单位) -> 返回值
    // 先判断元素是否含有transform 对象
    // 没有就创建一个
    if (!el.transform) {
        el.transform = {};
    }
    // 获取原来的属性值
    let oldStyle = el.transform[attr];
    // 如果 value 存在 就赋值 否则还是原来的值
    el.transform[attr] = typeof val === 'number' ? val : oldStyle;
    // 遍历元素的 属性 transform对象 获取属性值
    let strTransform = '';
    for (let attrKey in el.transform) {
        strTransform += attrKey + '(' + getTranStyle(attrKey, el.transform[attrKey]) + ')' + ' ';
    }
    // 对象属性值转换为样式值
    function getTranStyle(strAttr, num) {
        var style = '';
        switch (strAttr) {
            case 'scale':
            case 'scaleX':
            case 'scaleY':
            case 'scaleZ':
                value = (typeof num === 'number') ? num : 1;
                style = value;
                break;
            case 'translateX':
            case 'translateY':
            case 'translateZ':
                value = (typeof num === 'number') ? num : 0;
                style = value + 'px';
                break;
            case 'rotateX':
            case 'rotateY':
            case 'rotateZ':
            case 'skewX':
            case 'skewY':
                value = (typeof num === 'number') ? num : 0;
                style = value + 'deg';
                break;
        }
        return style;
    }
    // 设置对象样式
    el.style.transform = strTransform;
    // 返回attr的值
    return value;
}

/*校验手机号*/

export const checkPhoneNumber=(num)=>{
    return /^1[35789]\d{9}$/.test(num)
}

export default {
    setGlobalFontSize,
    cookie,
    ls,
    vuexToLocalStorage,
    touchs,
    getStyle,
    cssTransform
}