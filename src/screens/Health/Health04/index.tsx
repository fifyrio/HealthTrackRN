import * as React from 'react';
import {Image} from 'react-native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, Content, NavigationAction} from 'components';
import Images from 'assets/images';
import CardCals from '../Health01/CardCals';
import FoodItem from './FoodItem';

const Health04 = React.memo(() => {
  const theme = useTheme();
  const {bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryRight={<NavigationAction status="primary" icon="upload" />}
        accessoryLeft={<NavigationAction status="primary" />}
        title="Add Food"
      />
      <Content contentContainerStyle={styles.content}>
        <Image
          source={Images.health.pizza_large}
          style={{alignSelf: 'center', marginBottom: 40}}
        />
        <CardCals title={'Cals'} cals={1879} totalCals={3000} />
      </Content>
      <Layout style={styles.bottom} level="2">
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
        <Button
          children="Add More Food"
          style={[styles.button, {marginBottom: bottom + 8, marginTop: 24}]}
        />
      </Layout>
    </Container>
  );
});

export default Health04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingTop: 24,
    flexGrow: 1,
    paddingBottom: 60,
  },
  bottom: {
    paddingTop: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {
    marginLeft: 40,
    marginRight: 44,
  },
});
