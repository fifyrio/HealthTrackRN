import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import TrendingMeal from './TrendingMeal';
import ListRecipes from './ListRecipes';
import Images from 'assets/images';

const Health07 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <VStack style={[styles.header, {paddingTop: top + 8}]} level="2">
        <TopNavigation
          appearance="control"
          accessoryLeft={
            <NavigationAction
              status="primary"
              icon="dot_six"
              style={styles.menu}
            />
          }
          accessoryRight={<NavigationAction icon="search" status="primary" />}
        />
        <Text category="h3" marginLeft={20} marginBottom={8}>
          Recipes
        </Text>
      </VStack>
      <Content>
        <TrendingMeal />
        <ListRecipes title={'breakfast'} dataList={Data_MealRecipes} />
        <ListRecipes title={'lunch'} dataList={Data_MealRecipes} />
      </Content>
    </Container>
  );
});

export default Health07;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  menu: {
    transform: [{rotate: '90deg'}],
  },
  header: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export const Data_MealRecipes = [
  {
    id: 0,
    name: 'pizza',
    image: Images.health.medium_pizza,
    cals: 328,
  },
  {
    id: 1,
    name: 'donut',
    image: Images.health.medium_donut,
    cals: 328,
  },
  {
    id: 2,
    name: 'sushi',
    image: Images.health.medium_sushi,
    cals: 328,
  },
];
