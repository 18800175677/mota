/**
 * @description: 
 * @author: ycz
 * @Date: 2020-09-17 19:57:48
 * @LastEditTime: 2020-09-17 19:58:52
 * @LastEditors: ycz
 */
import React, { useReducer, useEffect } from 'react';
import styles from './index.less';
import { initData, reducer } from '../../models';
import Map from '../../components/Map';
import { left } from './utils/keydown';

const Index = () => {
    const [state, dispatch] = useReducer(reducer, initData);
    const { map, current, key: _key } = state;
    useEffect(() => {
        const operation = (e) => {
            const key = e.keyCode;
            if (key === 37) {
                console.error('left');
                left({ map, current, key: _key, dispatch });
            }
            else if (key === 38) {
                console.error('up');
            }
            else if (key === 39) {
                console.error('right');
            }
            else if (key === 40) {
                console.error('down');
            }
            else if (key === 76) {
                console.error('L');
            }
            else if (key === 74) {
                console.error('J');
            }
            else if (key === 32) {
                console.error('space');
            }
        };
        document.body.addEventListener('keydown', operation);
        return () => document.body.removeEventListener('keydown', operation);
    }, []);
    return <div className={styles.container} >
        <Map data={map[current[0]]} current={current} />
    </div>;
};

export default Index;