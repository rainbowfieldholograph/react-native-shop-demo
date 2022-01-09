import React from 'react';
import {Pressable} from 'react-native';

export const PressableArea = ({children, style, ...rest}) => {
  return (
    <Pressable
      {...rest}
      style={args => {
        const appliedStyle = typeof style === 'function' ? style(args) : style;
        if (args.pressed) {
          return [appliedStyle, {opacity: 0.6}];
        }
        return appliedStyle;
      }}>
      {children}
    </Pressable>
  );
};
