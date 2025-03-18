import React from "react";
import { StyleSheet, View, Text, Image } from "@react-pdf/renderer";

const achievementsStyles = StyleSheet.create({
  view: {
    width: 180,
    height: 300,
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1
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
  return (
    <View style={achievementsStyles.view}>
      <Text style={achievementsStyles.headingText}>ACHIEVEMENTS</Text>
      <View style={achievementsStyles.bar}></View>
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
          src={"src/assets/star.png"}
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
          <Text style={achievementsStyles.titleText}>Hackathon Winner</Text>
          <Text style={achievementsStyles.subtitleText}>(19-05-2025)</Text>
          <Text style={achievementsStyles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            obcaecati amet totam voluptas assumenda tempore necessitatibus
            accusamus cumque soluta quo impedit hic, modi voluptate animi
            adipisci alias ab reiciendis porro.
          </Text>
        </View>
      </View>

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
          src={"src/assets/star.png"}
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
          <Text style={achievementsStyles.titleText}>Hackathon Winner</Text>
          <Text style={achievementsStyles.subtitleText}>(19-05-2025)</Text>
          <Text style={achievementsStyles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            obcaecati amet totam voluptas assumenda tempore necessitatibus
            accusamus cumque soluta quo impedit hic, modi voluptate animi
            adipisci alias ab reiciendis porro.
          </Text>
        </View>
      </View>
    </View>
  );
};
