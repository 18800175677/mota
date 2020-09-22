import React from 'react';
import styles from './index.less';
import classnames from 'classnames';

const Hero = ({ current }) => {
    const [_, y, x] = current;
    return <div
        className={classnames(styles.hero)}
        style={{
            left: x * 32,
            top: y * 32
        }}
    ></div>;
};
export default Hero;