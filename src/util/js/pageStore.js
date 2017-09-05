/**
 * 数据使用localstore存储
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