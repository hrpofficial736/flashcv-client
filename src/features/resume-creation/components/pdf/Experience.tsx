import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const experienceStyles = StyleSheet.create({
  view: {
    width: 320,
    height: 300,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    // borderColor: "black",
    // borderWidth: 1,
  },
  bar: { width: 320, height: 2, backgroundColor: "black", borderRadius: 10 },
  lightBar: {
    width: 320,
    height: 0.2,
    backgroundColor: "gray",
    borderRadius: 10,
    marginTop: 8
  },
  headingText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black",
    fontSize: 15,
  },
  titleText: {
    marginTop: 10,
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "black",
    fontSize: 13,
  },
  subtitleText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "orange",
    fontSize: 11,
  },
  text: {
    width: 320,
    fontFamily: "Poppins",
    color: "black",
    fontSize: 9,
    fontWeight: 200,
    marginTop: 7,
  },
});

export const Experience: React.FC = () => {
  return (
    <View style={experienceStyles.view}>
      <Text style={experienceStyles.headingText}>EXPERIENCE</Text>
      <View style={experienceStyles.bar}></View>
      <Text style={experienceStyles.titleText}>Software Developer</Text>
      <Text style={experienceStyles.subtitleText}>Microsoft Corporation</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={experienceStyles.text}>2019-2025</Text>
        <Text style={experienceStyles.text}>Bangalore, India</Text>
      </View>
      <Text style={experienceStyles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        voluptates doloribus doloremque aut eum reiciendis eveniet,
        necessitatibus facilis quibusdam ad, molestiae minus quaerat modi,
        tempora libero laudantium! Modi, soluta reprehenderit.
      </Text>
      <View style={experienceStyles.lightBar}></View>
      <Text style={experienceStyles.titleText}>Software Developer</Text>
      <Text style={experienceStyles.subtitleText}>Microsoft Corporation</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={experienceStyles.text}>2019-2025</Text>
        <Text style={experienceStyles.text}>Bangalore, India</Text>
      </View>
      <Text style={experienceStyles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        voluptates doloribus doloremque aut eum reiciendis eveniet,
        necessitatibus facilis quibusdam ad, molestiae minus quaerat modi,
        tempora libero laudantium! Modi, soluta reprehenderit.
      </Text>
      <View style={experienceStyles.lightBar}></View>
    </View>
  );
};
