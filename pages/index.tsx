import React, {ReactElement} from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss'
import ProgramLeaning from "@components/ProgramLeaning/ProgramLeaning";
import {AdditionalModuleRed} from "@UI/AdditionalModuleRed/AdditionalModuleRed";
import {AdditionalModuleBlack} from "@UI/AdditionalModuleBlack/AdditionalModuleBlack";

const cx = classNames.bind(styles);

export default function MainPage(): ReactElement {

    return (
        <div className={cx('mainPage')}>
            <h1 className={cx('mainPage__title')}>Специализированные дисциплины</h1>
            <ProgramLeaning/>
            <div className={cx('mainPage__wrapperAdditionalModules')}>
                <AdditionalModuleRed/>
                <AdditionalModuleBlack/>
            </div>
        </div>
    );
}

