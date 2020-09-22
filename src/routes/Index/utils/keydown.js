/**
 * @description: 
 * @author: ycz
 * @Date: 2020-09-20 17:52:11
 * @LastEditTime: 2020-09-21 16:40:17
 * @LastEditors: ycz
 */
export const left = ({ map, current, key, dispatch }) => {
    const c = map[current[0]].map;
    const [f, x, y] = current;
    if (x === 0) return;
    const { door, monster, npc, prop, stairs, floor } = c[x - 1][y];
    if (floor === 'q') return;
    else if (door) {
        if (key[door] === 0) {
            return;
        }
        else {
            c[x - 1][y] = { ...c[x - 1][y], door: null };
            dispatch({
                [`key.${door}`]: key[door] - 1,
                map,
                current: [f, x - 1, y]
            });
            return;
        }
    }
    else if(prop){

    }
};