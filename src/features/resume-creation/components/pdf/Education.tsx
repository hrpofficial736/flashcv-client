import React from 'react';
import {View, Text, StyleSheet} from '@react-pdf/renderer';
import { useEducationInfoStore } from '../../../../stores/useEducationInfoStore';

const educationStyles = StyleSheet.create({
  view: {
    width: 320,
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
  const education = useEducationInfoStore((state) => state.info);
  return (
    <View style={educationStyles.view}>
          <Text style={educationStyles.headingText}>EDUCATION</Text>
          <View style={educationStyles.bar}></View>
          <Text style={educationStyles.titleText}>{education.degree}</Text>
          <Text style={educationStyles.subtitleText}>{education.universityName}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={educationStyles.text}>{education.startDate} {"-"} {education.endDate}</Text>
            <Text style={educationStyles.text}>{education.location}</Text>
          </View>
          <View style={educationStyles.lightBar}></View>
        </View>
  )
}

