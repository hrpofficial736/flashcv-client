import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const skillsStyles = StyleSheet.create({
  view: {
    width: 180,
    height: 120,
    display: "flex",
    flexDirection: "column",
  },
  bar: { width: 180, height: 2, backgroundColor: "black", borderRadius: 10 },
  headingText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black",
    fontSize: 15,
  },
  text: {
    width: 180,
    fontFamily: "Poppins",
    color: "black",
    fontSize: 11,
    fontWeight: 200,
    marginTop: 7,
  },
});

export const Skills : React.FC = () => {
  return (
    <View style={skillsStyles.view}>
      <Text style={skillsStyles.headingText}>SKILLS</Text>
      <View style={skillsStyles.bar}></View>

      <Text style={skillsStyles.text}>• HTML</Text>
      <Text style={skillsStyles.text}>• HTML</Text>
      <Text style={skillsStyles.text}>• HTML</Text>
      <Text style={skillsStyles.text}>• HTML</Text>
      <Text style={skillsStyles.text}>• HTML</Text>
    </View>
  );
}

