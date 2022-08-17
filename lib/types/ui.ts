import {TouchEventHandler} from 'react'

export type InputProps = {
  type?: string,
  label?: string,
  name: string,
  error?: string,
  value?: string,
  onChange: Function,
  textAreaHeight?: number,
  placeholder?: string,
  onClear?: Function,
};

export type ButtonProps = {
  id?: string
  label: string,
  size?: string,
  type?: 'button' | 'submit' | 'reset' | undefined,
  onSubmit?: () => void,
  onClick?: () => void,
  onTouchEnd?: TouchEventHandler
  inactive?: boolean,
};

export type IconProps = {
  symbol: string,
  className?: string,
  id?: string
};

export type SeparatorProps = {
  style?: string,
  label?: string,
};

export type DefaultObject = {
  [key: string]: string,
};

export type SwitcherProps = {
  active?: boolean,
  onChange?: Function,
};

export type CheckboxProps = {
  id?: string,
  active?: boolean,
  label: string,
  onChangeStatus?: Function,
  level?: string,
  specializationsId?: Array<string>,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
};

export type SelectProps = {
  label: string,
  error?: string,
  value?: string | number,
  onChange?: Function,
  name: string,
  options: Array<string>,
  values?: Array<string>,
};

export type DifficultyLevelProps = {
  level: 1 | 2 | 3 | 4,
};

export type ProgressProps = {
  value: number,
  width?: string,
};

export type BreadcrumbsTypes = {
  root?: string,
  route: string,
  className?: string
};
