import { StyleProp, ViewStyle } from 'react-native';
import { Border } from '../border';
import { Frame } from '../frame';
import { Padding } from '../padding';
import { Shadow } from '../shadow';
import { Rotation } from '../transform';

export type Modifiers = {
  backgroundColor?: string;
  padding?: Padding;
  cornerRadius?: number;
  rotationEffect?: Rotation;
  scaleEffect?: number;
  shadow?: Shadow;
  border?: Border;
  opacity?: number;
  frame?: Frame;
  zIndex?: number;
  style?: StyleProp<ViewStyle>;
  onAppear?: () => void;
  onDisappear?: () => void;
};

export type TextModifiers = {
  font?: string;
  fontWeight?: string;
  fontSize?: number;
  foregroundColor?: string;
  customFont?: string;
};

export type ShapeModifiers = Omit<Modifiers, 'backgroundColor' | 'frame'> & {
  fill?: string;
  frame:
    | { width: number; height: number }
    | { width: number }
    | { height: number };
};

export type WithChildren = {
  children?: React.ReactElement | React.ReactElement[];
};
