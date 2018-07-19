import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

type Props = {
  cancelNdefWrite: func,
  clearMessages: func,
  nfcEnabled: boolean,
  goToNfcSetting: func,
  isWriting: boolean,
  onChangeText: func,
  requestFormat: func,
  requestNdefWrite: func,
  startDetection: func,
  stopDetection: func,
  supported: boolean,
  tag: string,
  urlToWrite: string,
};

const NFCComponent = (props: Props) => {
  const {
    cancelNdefWrite,
    clearMessages,
    nfcEnabled,
    goToNfcSetting,
    isWriting,
    onChangeText,
    requestFormat,
    requestNdefWrite,
    startDetection,
    stopDetection,
    supported,
    tag,
    urlToWrite,
  } = props;

  console.log('nfc.js supported', supported);
  console.log('nfc.js nfcEnabled is', nfcEnabled);

  return (
    <View style={styles.container}>
      <Text>{`Is NFC supported ? ${supported}`}</Text>
      <Text>{`Is NFC nfcEnabled (Android only)? ${nfcEnabled}`}</Text>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={startDetection}>
        <Text style={{ color: 'blue' }}>Start Tag Detection</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={stopDetection}>
        <Text style={{ color: 'red' }}>Stop Tag Detection</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={clearMessages}>
        <Text>Clear</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={goToNfcSetting}>
        <Text >(android) Go to NFC setting</Text>
      </TouchableOpacity>

      {
        <View style={{padding: 10, marginTop: 20, backgroundColor: '#e0e0e0'}}>
          <Text>(android) Write NDEF Test</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>http://www.</Text>
            <TextInput
              style={{width: 200}}
              value={urlToWrite}
              onChangeText={onChangeText}
            />
          </View>

          <TouchableOpacity
            style={{ marginTop: 20, borderWidth: 1, borderColor: 'blue', padding: 10 }}
            onPress={isWriting ? cancelNdefWrite : requestNdefWrite}>
            <Text style={{color: 'blue'}}>{`(android) ${isWriting ? 'Cancel' : 'Write NDEF'}`}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20, borderWidth: 1, borderColor: 'blue', padding: 10 }}
            onPress={isWriting ? cancelNdefWrite : requestFormat}>
            <Text style={{color: 'blue'}}>{`(android experimental) ${isWriting ? 'Cancel' : 'Format'}`}</Text>
          </TouchableOpacity>
        </View>
      }

        <Text style={{ marginTop: 20 }}>{`Current tag JSON: ${JSON.stringify(tag)}`}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default NFCComponent;
