import React, {FC} from 'react';
import styles from './AdditionalModuleRed.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const AdditionalModuleRed: FC = () => {
    return (
        <div className={cx('additionalModuleRed')}>
                <h2 className={cx('additionalModuleRed__title')}>Практические модули</h2>
                <div className={cx('additionalModuleRed__text')}>Работа над собственными проектами: практика групповых взаимодействий, кейс&nbsp;-методы, эссе</div>
        </div>
    );
};

