import React from 'react';
import styles from './index.less';
import classnames from 'classnames';

const Prop = ({type}) => {
    return <div className={classnames(styles.prop, styles[type])}></div>;
};

export default Prop;