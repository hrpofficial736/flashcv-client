import React from "react";
import { StyleSheet, View, Text, Image } from "@react-pdf/renderer";
import { useAchievementsStore } from "../../../../stores/useAchievementsStore";

const achievementsStyles = StyleSheet.create({
  view: {
    width: 180,
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
  titleText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black",
    fontSize: 11,
  },
  subtitleText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black",
    fontSize: 10,
  },
  text: {
    width: 160,
    fontFamily: "Poppins",
    color: "black",
    fontSize: 9,
    fontWeight: 200,
  },
});

export const Achievements: React.FC = () => {
  const achievements = useAchievementsStore((state) => state.achievements);
  return (
    <View style={achievementsStyles.view}>
      <Text style={achievementsStyles.headingText}>ACHIEVEMENTS</Text>
      <View style={achievementsStyles.bar}></View>
      {achievements.map((achievement, index) => {return (
        <div key={index}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              marginTop: 7,
              gap: 5,
            }}
          >
            <Image
              src={"/src/assets/star.png"}
              style={{
                width: 15,
                height: 15,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                columnGap: 5,
              }}
            >
              <Text style={achievementsStyles.titleText}>{achievement.name}</Text>
              <Text style={achievementsStyles.subtitleText}>({achievement.date})</Text>
              <Text style={achievementsStyles.text}>
                {achievement.description}
              </Text>
            </View>
          </View>
        </div>
      );})}

      
    </View>
  );
};
