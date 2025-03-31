import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { useBasicInfoStore } from "../../../../stores/useBasicInfoStore";

const summaryStyles = StyleSheet.create({
  view: {
    width: 320,
    display: "flex",
    flexDirection: "column",
  },
  bar: { width: 320, height: 2, backgroundColor: "black", borderRadius: 10 },
  headingText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black",
    fontSize: 15,
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

export const Summary: React.FC = () => {
  const summary = useBasicInfoStore((state) => state.info.description);
  return (
    <View style={summaryStyles.view}>
      <Text style={summaryStyles.headingText}>SUMMARY</Text>
      <View style={summaryStyles.bar}></View>
      
      <Text style={summaryStyles.text}>
        {summary}
      </Text>
    </View>
  );
};
