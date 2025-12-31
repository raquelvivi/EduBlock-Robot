import { Text, View,Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/style/cores";
import React, { useState } from "react";
import { SafeAreaView, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Index() {
  const [mostrarHeader, setMostrarHeader] = useState(true);

  // Função que recebe o código vindo do Blockly
  const lidarComMensagem = (event) => {
    const codigoGerado = event.nativeEvent.data;
    console.log("Código recebido do Blockly:", codigoGerado);
    
    // Aqui você pode executar o código, salvar ou mostrar um feedback
    Alert.alert("Seu código é:", codigoGerado);
  }

  return (
    <View style={styles.container}>
      <View style={styles.conjunto}>
        {mostrarHeader && (

            
            <SafeAreaView style={styles.header}>
              <WebView 
                source={require('../assets/block.html')}
                onMessage={lidarComMensagem}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            </SafeAreaView>

        )}
        
        {/* <View style={styles.AntImg}>
          <TouchableOpacity onPress={() => { 
            if(mostrarHeader){setMostrarHeader(false) }
            else{setMostrarHeader(true)} 
            }}>
            <Image source={require('../assets/images/Polygon 1.png')} style={[styles.chave]} />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AzulCiano,
  },
  header: {
    // width: "60%",
    // height: "100%",
    flex: 1,
    backgroundColor: Colors.Branco,
    fontSize: 40,
    // marginTop: 40
  },
  conjunto:{
    flexDirection: 'row',
    alignItems: "flex-end",
    flex: 1
  },
  chave: {
    marginLeft: 20,
    width: 20,
    height: 17,
    marginTop: (screenHeight/2) - 15,

  },
  AntImg:{

    width: 10,
    height: "100%",
    backgroundColor: Colors.Branco,
  },
  web:{
    flex: 1
  }
});
