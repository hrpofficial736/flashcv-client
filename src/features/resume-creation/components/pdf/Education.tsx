import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer';

const experienceStyles = StyleSheet.create({
  view: {
    width: 320,
    height: 100,
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
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
    fontSize: 12,
  },
  subtitleText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "orange",
    fontSize: 10,
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

export const Education : React.FC = () => {
  return (
    <View style={experienceStyles.view}>
          <Text style={experienceStyles.headingText}>EDUCATION</Text>
          <View style={experienceStyles.bar}></View>
          <Text style={experienceStyles.titleText}>B.Tech in Computer Science and Engineering</Text>
          <Text style={experienceStyles.subtitleText}>Guru Gobind Singh Indraprastha University</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={experienceStyles.text}>2023-2027</Text>
            <Text style={experienceStyles.text}>New Delhi, India</Text>
          </View>
          <View style={experienceStyles.lightBar}></View>
        </View>
  )
}

