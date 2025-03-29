import React from 'react';
import { View, Document, Page, StyleSheet} from "@react-pdf/renderer";
import { Summary } from './Summary';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Achievements } from './Achievements';
import { Socials } from './Socials';
import { Header } from './Header';

const styles = StyleSheet.create({
  page: { padding: 20, backgroundColor: "white", overflow: "hidden" },
});

export const ResumeDocument : React.FC = () => {
  return (
    <Document
      style={{
        overflow: "hidden",
      }}
    >
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
              width: "80%",
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
              rowGap: 20,
            }}
          >
            <Skills />
            <Achievements />
            <Socials />
          </View>
        </View>
      </Page>
    </Document>
  );
}

