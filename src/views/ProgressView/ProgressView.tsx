import React from 'react';
import { Modifiers } from '../../utils/modifiers';
import { Indeterminate } from './Indeterminate';
import { Linear } from './Linear';

type ProgressViewProps = Modifiers & {
  value?: number;
  total?: number;
  progressViewStyle?: 'linear' | 'indeterminate';
  accentColor?: string;
};

export const ProgressView = ({
  value,
  total,
  progressViewStyle,
  ...rest
}: ProgressViewProps) => {
  switch (progressViewStyle) {
    case 'linear':
      return <Linear value={value} total={total} {...rest} />;
    case 'indeterminate':
    default:
      return <Indeterminate {...rest} />;
  }
};
