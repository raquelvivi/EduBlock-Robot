import { Text, View,Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../assets/style/cores";
import React, { useState } from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Index() {
  const [mostrarHeader, setMostrarHeader] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.conjunto}>
        {mostrarHeader && (
          <View style={styles.header}>
            

          </View>
        )}
        <View style={styles.AntImg}>
          <TouchableOpacity onPress={() => { 
            if(mostrarHeader){setMostrarHeader(false) }
            else{setMostrarHeader(true)} 
            }}>
            <Image source={require('../assets/images/Polygon 1.png')} style={[styles.chave]} />
          </TouchableOpacity>
        </View>
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
    width: "60%",
    height: "100%",
    backgroundColor: Colors.Branco,
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
});
