import React, {ReactElement} from 'react';
import ModuleProgramLeaning from "@UI/ModuleProgramLeaning/ModuleProgrammLeaning";
import styles from './ProgramLeaning.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

export default function ProgramLeaning(): ReactElement {

    return (
        <div className={cx('programLeaning')}>
            <h2 className={cx('programLeaning__title')}>Антикризисное управление</h2>
            <div className={cx('programLeaning__wrapper')}>
                <ModuleProgramLeaning/>
                <ModuleProgramLeaning/>
            </div>
        </div>
    );
};




