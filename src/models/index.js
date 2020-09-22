/**
 * @description: 
 * @author: ycz
 * @Date: 2020-09-17 20:09:54
 * @LastEditTime: 2020-09-21 16:12:12
 * @LastEditors: ycz
 */
import map from './map';
export const initData = {
    map,
    current: [1, 9, 5],
    user: {
        level: 0,
        attack: 10,
        defense: 10,
        hp: 100,

    },
    key: {
        yellow: 0,
        blue: 0,
        red: 0,
    }
};

export const reducer = (state, payload) => {
    const obj = { ...state };
    Object.keys(payload).map(key => {
        const t = key.split('.');
        t.reduce((pre, cur, i) => {
            if (i === t.length - 1) {
                if (Array.isArray(pre) && !payload[key]) {
                    pre.splice(parseInt(cur), 1);
                } else {
                    pre[cur] = payload[key];
                }
            }
            else {
                return pre[cur];
            }
        }, obj);
    })
    return obj;
};