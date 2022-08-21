// eslint-disable-next-line no-unused-vars
import React, {ReactElement} from 'react';
import styles from './ui.module.scss';
import ProgramLeaning from '@components/ProgramLeaning/ProgramLeaning';
import {AdditionalModuleRed} from '@UI/AdditionalModuleRed/AdditionalModuleRed';
import {AdditionalModuleBlack} from '@UI/AdditionalModuleBlack/AdditionalModuleBlack';
import CourseModule from '@UI/CourseModule/CourseModule';


export default function Test(): ReactElement {

    return (
        <>
            <div className={styles.container}>
                <br/>
                <AdditionalModuleRed/>
                <br/>
                <CourseModule title={'1 module'} items={['hello', 'hello', 'hello']}/>
            </div>
        </>
    );
}
