import React from 'react';
import styles from './index.less';
import classnames from 'classnames';
import Monsters from '../../components/monsters';
import Prop from '../../components/Prop';
import Door from '../../components/Door';
import Stairs from '../../components/Stairs';

const Block = ({ data }) => {
    const { floor, monster, stairs, prop, door } = data;
    const Monster = monster ? Monsters[monster] : () => <></>;
    return <div className={classnames(styles.block, floor === 'q' ? styles.wall : '')}>
        {
            monster ? <Monster /> : null
        }
        {
            prop ? <Prop type={prop} /> : null
        }
        {
            door ? <Door type={door} /> : null
        }
        {
            stairs ? <Stairs type={stairs} /> : null
        }
    </div>;
};

export default Block;