/**
 * vuex数据本地保存
 */
import { ls } from './pageStore'

function copy(obj) {
    var copy = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name); //获取指定对象的自身属性描述符
        Object.defineProperty(copy, name, desc);
    });
    return copy;
}

export const vuexToLocalStorage = store => {
    // 当 store 初始化后调用
    const savedState = ls.getItem('vuex');

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