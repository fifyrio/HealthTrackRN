import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  ViewPager,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import TabBar from './TabBar';
import Images from 'assets/images';
import FoodDetails from './FoodDetails';
import {useLayout} from 'hooks';

const Health06 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const {top} = useLayout();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <VStack style={[styles.header, {paddingTop: top + 8}]} level="2">
        <TopNavigation
          appearance="control"
          accessoryLeft={<NavigationAction status="primary" />}
        />
        <Text category="h3" marginLeft={20}>
          Breakfast
        </Text>
      </VStack>
      <TabBar
        tabActive={selectedIndex}
        onChangeTab={setSelectedIndex}
        tabs={['Recent', 'Favorites']}
        style={styles.tabBar}
      />
      <Content contentContainerStyle={styles.content}>
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          style={styles.viewpager}>
          <VStack style={styles.page}>
            {data.map((food, index) => {
              return (
                <FoodDetails data={food} noFavoritesAdd={false} key={index} />
              );
            })}
          </VStack>
          <VStack>
            <Text>Favorites Tabs</Text>
          </VStack>
        </ViewPager>
      </Content>
    </Container>
  );
});

export default Health06;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {},
  tabBar: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  viewpager: {
    flex: 1,
    marginTop: 24,
  },
  page: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingBottom: 8,
  },
});
const data = [
  {
    id: 0,
    image: Images.health.pizza,
    cals: 516,
    gam: 55,
    quantity: 1,
    name: 'pizza',
  },
  {
    id: 1,
    image: Images.health.burger,
    cals: 516,
    gam: 55,
    quantity: 1,
    name: 'Hamburger',
  },
  {
    id: 2,
    image: Images.health.donut,
    cals: 516,
    gam: 55,
    quantity: 1,
    name: 'Donut Cake',
  },
  {
    id: 3,
    image: Images.health.sushi,
    cals: 516,
    gam: 55,
    quantity: 1,
    name: 'sushi',
  },
  {
    id: 4,
    image: Images.health.popcorn,
    cals: 516,
    gam: 55,
    quantity: 1,
    name: 'popcorn',
  },
];
