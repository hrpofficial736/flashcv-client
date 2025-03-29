import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { useBasicInfoStore } from "../../../../stores/useBasicInfoStore";
import { useContactInfoStore } from "../../../../stores/useContactInfoStore";

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
  const basicInfo = useBasicInfoStore((state) => state.info);
  const contactInfo = useContactInfoStore((state) => state.contactInfo);
  return (
    <View>
      <Text style={headerStyles.text}>{basicInfo.fullName}</Text>
      <Text
        style={{
          color: "orange",
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 5,
          fontFamily: "Poppins",
        }}
      >
        {basicInfo.jobTitle}
      </Text>
      <View style={headerStyles.phoneEmailView}>
        <View style={headerStyles.iconElement}>
          <Image
            src={'/src/assets/phone.png'}
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
            {contactInfo.phoneNo}
          </Text>
        </View>
        <View style={headerStyles.iconElement}>
          <Image
            src={'/src/assets/mail.png'}
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
            {contactInfo.email}
          </Text>
        </View>
      </View>
    </View>
  );
};
