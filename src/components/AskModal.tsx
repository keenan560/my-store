import React, {useState, useRef} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AskModal = ({navigation}) => {
  const keyBoardRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Listening...</Text>
            {/* <Image style={{height: 100}} source={recording} /> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // alignItems: 'center',
          padding: 8,
          backgroundColor: '#fff',
          borderRadius: 50,
          marginBottom: 8,
        }}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => keyBoardRef.current.focus()}>
          <MaterialCommunityIcons name="keyboard-outline" size={26} />
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="microphone" size={26} />
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => navigation.navigate('barcode-scanner')}>
          <MaterialCommunityIcons name="barcode-scan" size={26} />
        </Pressable>
      </View>
      <TextInput ref={keyBoardRef} focusable={true} style={{display: 'none'}} />
    </View>
  );
};

export default AskModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    alignSelf: 'baseline',
    flex: 0.3,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    textAlign: 'center',
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
