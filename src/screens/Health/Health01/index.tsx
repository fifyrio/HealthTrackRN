import * as React from 'react';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import CardCals from './CardCals';
import Chart from './Chart';
import {dataMeal, Data_Weight} from './data';
import ItemMeal from './ItemMeal';

const Health01 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <VStack level="2" pt={top + 8} style={styles.header}>
        <TopNavigation
          appearance="control"
          accessoryLeft={
            <NavigationAction
              icon="dot_six"
              status="primary"
              style={styles.menu}
            />
          }
          accessoryRight={
            <NavigationAction icon="bell_ring" status="primary" />
          }
        />
        <Text category="h3" marginLeft={20}>
          Dashboard
        </Text>
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <CardCals totalCals={3000} cals={1879} title={'Cals'} />
        <Chart
          data={Data_Weight}
          title={'Weight'}
          style={styles.chart}
          strokeColor={theme['background-basic-color-5']}
        />
        <Content contentContainerStyle={styles.contentFood} horizontal>
          {dataMeal.map((item, index) => {
            return <ItemMeal data={item} key={index} />;
          })}
        </Content>
      </Content>
    </Container>
  );
});

export default Health01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  menu: {
    transform: [{rotateZ: '90deg'}],
  },
  content: {
    paddingTop: 24,
  },
  chart: {
    marginTop: 24,
  },
  contentFood: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
