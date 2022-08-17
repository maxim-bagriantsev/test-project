import React, {ReactElement} from 'react';
import styles from './ui.module.scss';
import classNames from 'classnames/bind';
import ModuleProgramLeaning from "@components/UI/ModuleProgramLeaning/ModuleProgrammLeaning";
import ProgramLeaning from "@components/ProgramLeaning/ProgramLeaning";
import {AdditionalModuleRed} from "@UI/AdditionalModuleRed/AdditionalModuleRed";
import {AdditionalModuleBlack} from "@UI/AdditionalModuleBlack/AdditionalModuleBlack";

const cx = classNames.bind(styles);


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
