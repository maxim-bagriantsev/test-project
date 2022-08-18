// eslint-disable-next-line no-unused-vars
import React, {ReactElement, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import ProgramLeaning from '@components/ProgramLeaning/ProgramLeaning';
import {AdditionalModuleRed} from '@UI/AdditionalModuleRed/AdditionalModuleRed';
import {AdditionalModuleBlack} from '@UI/AdditionalModuleBlack/AdditionalModuleBlack';
import {useProductsQuery} from "@store/mba/api";

const cx = classNames.bind(styles);

export default function MainPage(): ReactElement {

    const {isLoading, isError, data} = useProductsQuery('')

    useEffect(() => {
        console.log(isLoading)
    }, [!isLoading])

    return (
        <div className={cx('mainPage')}>

            <h1 className={cx('mainPage__title')}>Специализированные дисциплины</h1>
            {isError && <p className=''>Что-то пошло не так!</p>}
            <ProgramLeaning/>

            <div className={cx('mainPage__wrapperAdditionalModules')}>
                <AdditionalModuleRed/>
                <AdditionalModuleBlack/>
            </div>

            <script type="text/javascript" src=""/>
        </div>
    );
}

