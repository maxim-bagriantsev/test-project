import React, { memo, useState } from 'react';
import styles from './CourseModule.module.scss';
import classNames from 'classnames/bind';
import Icon from '@UI/Icon/Icon';
import useWindowDimensions from '@hooks/useWindowDimensions';

const cx = classNames.bind(styles);

type CourseModuleType = {
  title: string
  items: string []
}

const CourseModule = memo((props: CourseModuleType) => {
  const { title, items } = props;
  const [open, setOpen] = useState(false);

  const handelClickOpen = () => {
    setOpen(!open);
  };

  const { width }: any = useWindowDimensions();
  const tablet = 768;

  return (

    <div className={cx('moduleProgramLeaning')}>
      <div className={cx('moduleProgramLeaning__borderline')} />
      {width > tablet && <div className={cx('moduleItem')}>
        <h3 className={cx('moduleItem__title')}>{title}</h3>
        <ul className={cx('moduleItem__list')}>

          {items.map((item, index) => (
            <div className={cx('listItem')} key={index}>
              <div className={cx('listItem__tod')} />
              <li className={cx('listItem__text')}>{item}</li>
            </div>
          ))}

        </ul>
      </div>}

      {width < tablet && <details onClick={handelClickOpen}>
        <summary>
          <div className={cx('icon', { ['icon_modify']: open })}>{open ? <Icon symbol={'minus'} /> :
            <Icon symbol={'plus'} />}</div>
          {title}
        </summary>
        <ul className={cx('moduleItem__list')}>

          {items.map((item, index) => (
            <div className={cx('listItem')} key={index}>
              <div className={cx('listItem__tod')} />
              <li className={cx('listItem__text')}>{item}</li>
            </div>
          ))}
        </ul>
      </details>}
    </div>
  );
});

export default CourseModule;