import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Input = ({
  disabled,
  externalStyle,
  label,
  maxLength,
  multiline,
  numberOfLines,
  onChangeText,
  placeholder,
  secureTextEntry,
  value,
}) => {
  const mergedStyles = { ...styles, ...externalStyle };

  const {
    inputStyle,
    labelStyle,
    containerStyle,
  } = styles;

  return (
    <View style={containerStyle}>
      {label &&
        <Text style={labelStyle}>{label}</Text>
      }
      <TextInput
        autoCorrect={false}
        disabled={disabled}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    // paddingRight: 5,
    // paddingLeft: 5,
    fontSize: 14,
    lineHeight: 23,
  }
});

export { Input };
