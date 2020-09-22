import React from 'react';
import styles from './index.less';
import classnames from 'classnames';

export const Paopao = () => {
    return <div className={classnames(styles.monster, styles.paopao)} />;
};

export const Paopao2 = () => {
    return <div className={classnames(styles.monster, styles.paopao2)} />;
};

export const Paopao3 = () => {
    return <div className={classnames(styles.monster, styles.paopao3)} />;
};

export const Kulou = () => {
    return <div className={classnames(styles.monster, styles.kulou)} />;
};

export const Kulou2 = () => {
    return <div className={classnames(styles.monster, styles.kulou2)} />;
};

export const Wushi = () => {
    return <div className={classnames(styles.monster, styles.wushi)} />;
};

export default {
    paopao: Paopao,
    paopao2: Paopao2,
    paopao3: Paopao3,
    kulou: Kulou,
    kulou2: Kulou2,
    wushi: Wushi
};