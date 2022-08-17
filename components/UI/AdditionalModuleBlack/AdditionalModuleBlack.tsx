import React, {FC} from 'react';
import styles from './AdditionalModuleBlack.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

export const AdditionalModuleBlack: FC = () => {
    return (
        <div className={cx('additionalModuleBlack')}>
            <h2 className={cx('additionalModuleBlack__title')}>Итоговая аттестация</h2>
            <div className={cx('additionalModuleBlack__wrapper')}>
                <ul className={cx('additionalModuleBlack__list')}>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li className={cx('listItem__text')}>Бизнес-проектирование (подготовка итоговой аттестационной
                            работы, консультирование по бизнес-проектированию)
                        </li>
                    </div>
                    <div className={cx('listItem')}>
                        <div className={cx('listItem__tod')}/>
                        <li className={cx('listItem__text')}>Защита итоговой аттестационной работы
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    );
};

