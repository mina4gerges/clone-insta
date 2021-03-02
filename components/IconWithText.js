import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Component that contains an icon with a clickable button
const IconButton = ({
  onPress,
  iconName,
  iconStyle,
  text,
  textStyle,
  iconSize = 25,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonPadding, styles.button]}
      onPress={onPress}>
      <Icon size={iconSize} style={iconStyle} name={iconName} />
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPadding: {
    paddingHorizontal: 5,
  },
  button: {
    flexDirection: 'row',
  },
});

export default IconButton;
