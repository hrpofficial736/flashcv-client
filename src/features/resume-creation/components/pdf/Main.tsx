import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  PDFViewer,
  Font,
  View,
} from "@react-pdf/renderer";
import { Header } from "./Header";
import { Summary } from "./Summary";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Achievements } from "./Achievements";

Font.register({
  family: "Poppins",
  fonts: [
    { src: "src/assets/fonts/Poppins/Poppins-Black.ttf", fontWeight: 900 },
    { src: "src/assets/fonts/Poppins/Poppins-Bold.ttf", fontWeight: 800 },
    { src: "src/assets/fonts/Poppins/Poppins-SemiBold.ttf", fontWeight: 600 },
    { src: "src/assets/fonts/Poppins/Poppins-Regular.ttf", fontWeight: 400 },
    { src: "src/assets/fonts/Poppins/Poppins-Medium.ttf", fontWeight: 300 },
    { src: "src/assets/fonts/Poppins/Poppins-Light.ttf", fontWeight: 100 }
  ],
  fontWeight: 2000,
});

const styles = StyleSheet.create({
  page: { padding: 20, backgroundColor: "white" },
});

export const Main: React.FC = () => {
  return (
    <PDFViewer className="w-screen h-screen" width={"100%"} height={"100%"}>
      <Document>
        <Page style={styles.page} size={"A4"}>
          <Header />
          <View
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              paddingTop: 10,
              columnGap: 140,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%"
              }}
            >
              <Summary />
              <Experience />
              <Education />
            </View>
            <View
              style={{
                width: "70%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: 20
              }}
            >
              <Skills />
              <Achievements />
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
