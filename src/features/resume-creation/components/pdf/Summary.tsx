import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const summaryStyles = StyleSheet.create({
  view: {
    width: 360,
    height: 100,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  bar: { width: 350, height: 2, backgroundColor: "black", borderRadius: 10 },
  headingText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black",
    fontSize: 15,
  },
  text: {
    width: 350,
    fontFamily: "Poppins",
    color: "black",
    fontSize: 9,
    fontWeight: 200,
    marginTop: 7,
  },
});

export const Summary: React.FC = () => {
  return (
    <View style={summaryStyles.view}>
      <Text style={summaryStyles.headingText}>SUMMARY</Text>
      <View style={summaryStyles.bar}></View>
      
      <Text style={summaryStyles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        voluptates doloribus doloremque aut eum reiciendis eveniet,
        necessitatibus facilis quibusdam ad, molestiae minus quaerat modi,
        tempora libero laudantium! Modi, soluta reprehenderit.
      </Text>
    </View>
  );
};
