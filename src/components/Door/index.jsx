import React from 'react';
import styles from './index.less';
import classNames from 'classnames';

const Door = ({ type }) => {
    return <div className={classNames(styles.door, styles[type])}></div>;
};

export default Door;