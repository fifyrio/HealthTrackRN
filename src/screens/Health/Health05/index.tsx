import * as React from 'react';
import {View, Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
} from 'components';
import Images from 'assets/images';
import FoodItem from '../Health04/FoodItem';
import Nutrition from './Nutrition';

const Health05 = React.memo(() => {
  const theme = useTheme();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Food Infomation'}
        accessoryLeft={<NavigationAction status="primary" icon="xcircle" />}
        accessoryRight={
          <NavigationAction status="primary" icon="circles_four" />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <HStack itemsCenter justify="flex-start" mh={24}>
          <Layout style={styles.layoutImage}>
            <Image source={Images.health.hotdog} />
          </Layout>
          <VStack ml={16}>
            <Text category="h6" marginBottom={8}>
              Hot Dogs Italia
            </Text>
            <Text category="subhead" status="platinum">
              600ml
            </Text>
          </VStack>
        </HStack>
        <Text category="h7" marginLeft={24} marginTop={24}>
          Meal Content
        </Text>
        <FoodItem
          quantity={1}
          title="Pizza"
          cals={135}
          icon={'pizza'}
          color={'#FFDE70'}
          tintColor={theme['text-basic-color']}
        />
        <FoodItem
          quantity={2}
          title="Eggs"
          cals={35}
          icon="egg"
          color="#FBF0EA"
          tintColor={theme['text-purple-color']}
        />
        <Nutrition
          data={DATA_Nutrition}
          title="Nutrition"
          style={styles.nutrition}
        />
      </Content>
      <Button
        children="Save"
        style={[styles.buttonBottom, {marginBottom: bottom + 8}]}
      />
    </Container>
  );
});

export default Health05;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingTop: 16,
  },
  layoutImage: {
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    padding: 16,
    borderRadius: 8,
  },
  nutrition: {
    marginTop: 32,
  },
  buttonBottom: {
    marginHorizontal: 24,
    marginTop: 8,
  },
});
const DATA_Nutrition = {
  cals: 523,
  protein: 13.2,
  carb: 46.2,
  fat: 6.8,
};
