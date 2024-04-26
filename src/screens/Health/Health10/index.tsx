import * as React from "react";
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
} from "@ui-kitten/components";

import { Container, Content, Text, NavigationAction, VStack } from "components";
import Chart from "../Health01/Chart";
import { Data_Weight } from "../Health01/data";
import ChartBar from "../Health02/ChartBar";

const Health10 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={<NavigationAction icon="dot_six" status="primary" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Text
          category="h3"
          marginHorizontal={24}
        >{`Keep it up!\nTracked your heath.`}</Text>
        <Chart
          data={Data_Weight}
          title={"Weight"}
          style={styles.chart}
          strokeColor={theme["background-basic-color-5"]}
        />
        <VStack mh={24}>
          <ChartBar data={data} />
        </VStack>
        <Chart
          data={Data_Weight}
          title={"Exercise"}
          style={styles.chart}
          strokeColor={theme["background-basic-color-11"]}
        />
      </Content>
    </Container>
  );
});

export default Health10;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {},
  chart: {
    marginVertical: 24,
  },
});
const data = [
  { x: 1, y: 1, y0: 52, date: "S" },
  { x: 2, y: 1, y0: 48, date: "M" },
  { x: 3, y: 1, y0: 53, date: "T" },
  { x: 4, y: 1, y0: 60, date: "W" },
  { x: 5, y: 1, y0: 50, date: "T" },
  { x: 6, y: 1, y0: 49, date: "F" },
  { x: 7, y: 1, y0: 54, date: "S" },
];
