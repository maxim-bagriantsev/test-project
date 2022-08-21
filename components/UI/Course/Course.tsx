import React from 'react';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';
import CourseModule from '@UI/CourseModule/CourseModule';

const cx = classNames.bind(styles);


type CourseType = {
  title: string
  items: string[]
}

const splitModuleItems = (items: string[]): { title: string, items: string[] }[] => {

  const moduleItemOne = [];
  const moduleItemTwo = [];

  for (let i = 0; i < items.length; i++) {
    if (items.indexOf(items[i]) % 2 === 0) {
      moduleItemOne.push(items[i]);
    } else {
      moduleItemTwo.push(items[i]);
    }
  }

  const item1: CourseType = {
    title: '1 модуль',
    items: moduleItemOne,
  };
  const item2: CourseType = {
    title: '2 модуль',
    items: moduleItemTwo,
  };

  return [item1, item2];

};


const Course = (props: CourseType) => {
  const { title, items } = props;

  const arrItems = splitModuleItems(items);

  return (
    <div className={cx('programLeaning')}>
      <h2 className={cx('programLeaning__title')}>{title}</h2>
      <div className={cx('programLeaning__wrapper')}>
        {arrItems.map((item, index) => <CourseModule title={item.title} items={item.items} key={index} />)}
      </div>
    </div>
  );
};

export default Course;