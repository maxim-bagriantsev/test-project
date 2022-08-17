// eslint-disable-next-line no-unused-vars
import React, {ReactElement} from 'react';
import styles from './ui.module.scss';
import ProgramLeaning from '@components/ProgramLeaning/ProgramLeaning';
import {AdditionalModuleRed} from '@UI/AdditionalModuleRed/AdditionalModuleRed';
import {AdditionalModuleBlack} from '@UI/AdditionalModuleBlack/AdditionalModuleBlack';


export default function Test(): ReactElement {

    return (
        <>
            <div className={styles.container}>
                <ProgramLeaning/>
                <br/>
                <AdditionalModuleRed/>
                <br/>
                <AdditionalModuleBlack/>
            </div>
        </>
    );
}
