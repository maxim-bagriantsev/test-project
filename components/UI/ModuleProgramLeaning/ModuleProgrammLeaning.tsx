import React, {FC} from 'react';
import styles from './ModuleProgramLeaning.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ModuleProgramLeaning:FC = () => {

    return (
        <div className={cx('moduleProgramLeaning')}>
            <div className={cx('moduleProgramLeaning__borderline')}/>
            <div className={cx('moduleItem')}>
                <h3 className={cx('moduleItem__title')}>1 модуль</h3>
                <ul className={cx('moduleItem__list')}>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li className={cx('listItem__text')}>Маркетинговые стратегии антикризисного менеджмента</li>
                    </div>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li>Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и
                            поглощение
                        </li>
                    </div>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li>Правовые основы антикризисного управления</li>
                    </div>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li>Проектный менеджмент в антикризисном управлении</li>
                    </div>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li>Финансово-экономические инструменты антикризисного управления</li>
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default ModuleProgramLeaning;