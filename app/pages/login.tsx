import styles from "@/assets/style/pages/login";
import NavigateButton from "@/components/Buttons/NavigateButton";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Image, Platform } from "react-native";

const Login = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/login-background.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Frenchie!</ThemedText>
        <ThemedText type="title">Let's learn Frech</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.textHealine}>
          Login/SignUp
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <NavigateButton title="Sign In With Google" />
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Login;
