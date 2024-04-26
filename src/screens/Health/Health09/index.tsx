import * as React from 'react';
import {View, Image} from 'react-native';
import {StyleService, useStyleSheet, Button, Icon} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  IDivider,
  HStack,
} from 'components';
import ListRecipes from '../Health07/ListRecipes';
import Images from 'assets/images';

const Health09 = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <HStack itemsCenter>
        <NavigationAction status="primary" />
        <Button children={'Be Strongs'} size="small" />
        <NavigationAction status="primary" icon="download" />
      </HStack>
      <Content>
        <Image
          source={Images.health.plan01}
          /* @ts-ignore */
          style={styles.image}
        />
        <Text category="h3" center marginBottom={8}>
          Food For Strengs
        </Text>
        <Text category="subhead" opacity={0.5} center>
          Get strong with food plans
        </Text>
        <View style={styles.statusView}>
          {Data_Status.map((item, index) => {
            return (
              <View key={index}>
                <Icon pack="assets" name="check" style={styles.checked} />
                <Text category="subhead" marginTop={8}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>
        <IDivider marginHorizontal={24} />
        <ListRecipes title={'Recipes'} dataList={Data_Recipes} />
      </Content>
      <Button children="Start Plan $25" style={styles.btnBottom} />
    </Container>
  );
});

export default Health09;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  checked: {
    tintColor: 'color-primary-100',
  },
  btnBottom: {
    marginTop: 8,
    marginHorizontal: 24,
    marginBottom: 8,
  },
  statusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 34,
    marginTop: 32,
    marginBottom: 24,
  },
  image: {
    alignSelf: 'center',
  },
});
const Data_Status = [
  {id: 0, title: 'Loss Weight'},
  {id: 1, title: 'Muscle Gain'},
  {id: 2, title: 'Less Snack'},
];
export const Data_Recipes = [
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
    name: 'pizza',
    image: Images.health.medium_sushi,
    cals: 328,
  },
];
