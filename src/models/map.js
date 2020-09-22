/**
 * @description: 
 * @author: ycz
 * @Date: 2020-09-17 20:15:55
 * @LastEditTime: 2020-09-20 17:57:42
 * @LastEditors: ycz
 */
const baseData = {
    floor: 'db',
    monster: null,
    npc: null,
    event: null,
    user: null,
    prop: null,
    stairs: null,
    door: null
};

const one = [
    [{ stairs: 'up' }, {}, { prop: 'huangyaoshi' }, { monster: 'paopao' }, { monster: 'paopao2' }, { monster: 'paopao' }, {}, {}, {}, {}, {}],
    [{ floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, {}],
    [{ prop: 'hongxueping' }, {}, { monster: 'kulou' }, { door: 'yellow' }, {}, { floor: 'q' }, { prop: 'hongxueping' }, { prop: 'huangyaoshi' }, { prop: 'hongxueping' }, { floor: 'q' }, {}],
    [{ prop: 'huangyaoshi' }, { monster: 'kulou' }, { prop: 'hongbaoshi' }, { floor: 'q' }, {}, { floor: 'q' }, { prop: "hongxueping" }, { prop: 'huangyaoshi' }, { prop: 'hongxueping' }, { floor: 'q' }, {}],
    [{ floor: 'q' }, { door: 'yellow' }, { floor: 'q' }, { floor: 'q' }, {}, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { monster: 'paopao3' }, { floor: 'q' }, {}],
    [{ prop: 'huangyaoshi' }, { monster: 'kulou2' }, {}, { floor: 'q' }, {}, { door: 'yellow' }, { monster: 'wushi' }, { monster: 'paopao' }, { monster: 'paopao' }, { floor: 'q' }, {}],
    [{ prop: 'lanbaoshi' }, {}, { prop: 'lanyaoshi' }, { floor: 'q' }, {}, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, {}],
    [{ floor: 'q' }, { door: 'yellow' }, { floor: 'q' }, { floor: 'q' }, {}, {}, {}, {}, {}, {}, {}],
    [{}, { monster: 'kulou2' }, {}, { floor: 'q' }, { floor: 'q' }, { door: 'red' }, { floor: 'q' }, { floor: 'q' }, { floor: 'q' }, { door: 'yellow' }, { floor: 'q' }],
    [{ prop: 'hongxueping' }, { prop: 'lanxueping' }, { prop: 'huangyaoshi' }, { floor: 'q' }, { prop: 'hongyaoshi' }, {}, {}, { floor: 'q' }, { prop: 'huangyaoshi' }, { monster: 'wushi' }, { prop: 'lanyaoshi' }],
    [{ prop: 'hongxueping' }, { prop: 'chakanqi' }, { prop: 'huangyaoshi' }, { floor: 'q' }, {}, { stairs: 'down' }, {}, { floor: 'q' }, { prop: 'huangyaoshi' }, { prop: 'huangyaoshi' }, { prop: 'huangyaoshi' },]
];

const map = {
    1: {
        map: one.map(item => item.map(i => ({ ...baseData, ...i }))),
        init: {
            up: [1, 0],
            down: [9, 5]
        }
    },
};

export default map;