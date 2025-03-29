import React from "react";
import { StyleSheet, View, Text } from "@react-pdf/renderer";
import { useSkillsStore } from "../../../../stores/useSkillsStore";

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

export const Skills: React.FC = () => {
  const skills = useSkillsStore((state) => state.skills);
  return (
    <View style={skillsStyles.view}>
      <Text style={skillsStyles.headingText}>SKILLS</Text>
      <View style={skillsStyles.bar}></View>
      {skills.map((skill, index) => {
        return (
          <div key={index}>
            <Text style={skillsStyles.text}>
              • {skill.name} ({skill.level})
            </Text>
          </div>
        );
      })}
    </View>
  );
};
