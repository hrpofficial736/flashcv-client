import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

const headerStyles = StyleSheet.create({
  header: {display: "flex", flexDirection: "column", gap: 2},
  text: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: "black",
    fontWeight: 600,
  },
  iconElement: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  phoneEmailView: {
    display: "flex",
    gap: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { width: 10, height: 10 },
});

export const Header: React.FC = () => {
  return (
    <View>
      <Text style={headerStyles.text}>Harshit Raj Pandey</Text>
      <Text
        style={{
          color: "orange",
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 5,
          fontFamily: "Poppins",
        }}
      >
        Software Developer
      </Text>
      <View style={headerStyles.phoneEmailView}>
        <View style={headerStyles.iconElement}>
          <Image
            src={
              import.meta.env.VITE_PHONE_ICON_URI
            }
            style={headerStyles.icon}
          />
          <Text
            style={{
              color: "black",
              fontSize: 10,
              fontWeight: 200,
              fontFamily: "Poppins"
            }}
          >
            +91-9810180956
          </Text>
        </View>
        <View style={headerStyles.iconElement}>
          <Image
            src={
              import.meta.env.VITE_EMAIL_ICON_URI
            }
            style={headerStyles.icon}
          />
          <Text
            style={{
              color: "black",
              fontSize: 10,
              fontWeight: 200,
              fontFamily: "Poppins"
            }}
          >
            hrpofficial736@gmail.com
          </Text>
        </View>
      </View>
    </View>
  );
};
