import React from 'react';
import styles from './index.less';
import Block from '../Block';
import Hero from '../Hero';
const Map = ({
    data,
    current
}) => {
    const { map } = data;
    return <div className={styles.map}>
        {
            map.map(line => {
                return line.map((item, i) => {
                    return <Block key={i} data={item} />;
                });
            })
        }
        <Hero current={current} />
    </div>;
};

export default Map;