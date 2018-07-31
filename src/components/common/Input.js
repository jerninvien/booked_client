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
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    // lineHeight: 23,
  }
});

export { Input };
