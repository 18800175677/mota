import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

const Stairs = ({ type }) => {
    return <div className={classNames(styles.stairs, styles[type])}></div>;
};

export default Stairs;