import React, { ReactElement } from 'react';
import { IconProps } from '@lib/types/ui';


export default function Icon(props: IconProps): ReactElement {
  const { symbol, className = '', id } = props;

  switch (symbol) {
    case 'plus':
      return (
        <div className={className}>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10 1V19M18.9706 10H1' stroke='#D9D9D9' strokeWidth='2' strokeLinecap='round'
                  strokeLinejoin='round' />
          </svg>
        </div>
      );
      break;
    case 'minus':
      return (
        <div className={className}>
          <svg width='18' height='2' viewBox='0 0 18 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='18' height='2' rx='1' fill='white' />
          </svg>
        </div>
      );
      break;

    default:
      return <></>;
  }
}
