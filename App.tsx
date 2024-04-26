import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';














export default function App() {


  const [RandomBackground, setRandomBackground] = useState("#FFFFFF")

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF'
    let color = "#"


    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]

    }

    setRandomBackground(color);
  }




  return (
    <>

      <StatusBar backgroundColor={RandomBackground} />

      <View style={[styles.container, { backgroundColor: RandomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt} >press me</Text>
          </View>
        </TouchableOpacity>


      </View>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#c9f29b",
    paddingVertical: 10,
    paddingHorizontal: 40,

  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: "uppercase",
  },

});
