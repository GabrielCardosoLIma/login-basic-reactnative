import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <FontAwesome style={styles.UserIcon} name="user-circle-o" size={80} color="#fff" />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <MaterialIcons style={styles.Icon} name="email" size={24} color="#fff" />
        <TextInput
          style={styles.TextInput}
          placeholder="Digite seu email"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
      <AntDesign style={styles.Icon} name="lock" size={24} color="#fff" />
        <TextInput
          style={styles.TextInput}
          placeholder="Digite sua senha"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.recoverypassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  UserIcon: {
    marginBottom: 40
  },
  inputView: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#4d4d4d",
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    // backgroundColor: "#ff0"
  },
  TextInput: {
    height: 50,
    marginHorizontal: 80,
    marginLeft: 65
  },
  recoverypassword: {
    color: "#fff",
    height: 30,
    marginBottom: 30,
    marginLeft: 4
  },
  loginText: {
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    fontSize: 18
  },
  loginBtn: {
    width: 100,
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
  },
});