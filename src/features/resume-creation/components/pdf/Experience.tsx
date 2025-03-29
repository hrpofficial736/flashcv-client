import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { useExperiencesStore } from "../../../../stores/useExperiencesStore";

const experienceStyles = StyleSheet.create({
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
    marginTop: 8,
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
  const experiences = useExperiencesStore((state) => state.experiences);
  return (
    <View style={experienceStyles.view}>
      <Text style={experienceStyles.headingText}>EXPERIENCE</Text>
      <View style={experienceStyles.bar}></View>
      {experiences.map((experience, index) => {
        return (
          <div key={index}>
            <Text style={experienceStyles.titleText}>{experience.jobName}</Text>
            <Text style={experienceStyles.subtitleText}>
              {experience.companyName}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={experienceStyles.text}>
                {experience.startDate} {"-"} {experience.endDate}
              </Text>
              <Text style={experienceStyles.text}>{experience.location}</Text>
            </View>
            <Text style={experienceStyles.text}>
              {experience.responsibilities}
            </Text>
            {index === experiences.length - 1 && <View style={experienceStyles.lightBar}></View>}
          </div>
        );
      })}
    </View>
  );
};
