import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import CubeSvg from '../img/svg/Vector.svg';
import BallSvg from '../img/svg/ball.svg';
import PyramidSvg from '../img/svg/pyramid.svg';
import TriangleSvg from '../img/svg/triangle-down.svg';
import RubySvg from '../img/svg/ruby.svg';
import PentagramSvg from '../img/svg/pentagram.svg';

export const DiceFigure = ({
  title,
  size,
  color,
  text,
  onPress,
  figureStyles,
}) => {
  const svgs = {
    cube: () => <CubeSvg fill={color} width={size} height={size} />,
    ball: () => <BallSvg fill={color} width={size} height={size} />,
    pyramid: () => <PyramidSvg fill={color} width={size} height={size} />,
    triangle: () => <TriangleSvg fill={color} width={size} height={size} />,
    ruby: () => (
      <RubySvg fill={color} stroke={color} width={size} height={size} />
    ),
    pentagram: () => <PentagramSvg fill={color} width={size} height={size} />,
  };

  const styles = StyleSheet.create({
    figure: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      ...figureStyles,
    },
    text: {
      fontSize: 12,
      color: color,
    },
  });

  return (
    <TouchableOpacity style={styles.figure} onPress={() => onPress()}>
      {svgs[`${title}`]()}
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};
