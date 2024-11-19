import React, { DispatchWithoutAction } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface AddButtonProps {
  title: string;
  color?: string;
  onClick?: DispatchWithoutAction;
}

function NavigateButton({ title, onClick, color }: AddButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: (color: string) => color ?? "#30b6d1",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default NavigateButton;
