import React from "react";
import { StyleSheet, View, Text, Image } from "@react-pdf/renderer";
import { useContactInfoStore } from "../../../../stores/useContactInfoStore";

const socialsStyles = StyleSheet.create({
  view: {
    width: 180,
    height: 100,
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

export const Socials: React.FC = () => {
  const socials = useContactInfoStore((state) => state.contactInfo.socials);
  return (
    <View style={socialsStyles.view}>
      <Text style={socialsStyles.headingText}>SOCIAL LINKS</Text>
      <View style={socialsStyles.bar}></View>
      {socials?.map((link, index) => {
        return (
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
                src={"/src/assets/globe.png"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
              <Text style={socialsStyles.text}>{link}</Text>
            </View>
          </div>
        );
      })}
    </View>
  );
};
