import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useLayout} from 'hooks';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
} from '@ui-kitten/components';

import {Container, Text, NavigationAction} from 'components';
import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';
import PlanItem from './PlanItem';

const Health08 = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const renderItem = React.useCallback(({item}) => {
    return <PlanItem item={item} />;
  }, []);
  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        style={[styles.topNav, {paddingTop: top - 8}]}
        accessoryLeft={
          <Text category="h6" marginLeft={16}>
            Plans
          </Text>
        }
        accessoryRight={
          <View style={styles.rightTopNav}>
            <NavigationAction marginRight={-8} icon="menu" status="primary" />
            <NavigationAction icon="search" marginRight={4} status="primary" />
          </View>
        }
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, {paddingBottom: bottom + 32}]}
      />
    </Container>
  );
});

export default Health08;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNav: {
    marginBottom: -10,
  },
  rightTopNav: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  content: {
    paddingTop: 24,
  },
});
const data = [
  {
    id: 0,
    level: '7',
    title: 'Food For Strengs',
    titleButton: 'Be Strongs',
    description: 'Get strong with food plans',
    image: Images.health.plan01,
  },
  {
    id: 1,
    level: '8',
    title: 'Food For Mind',
    titleButton: 'Be Smarts',
    description: 'Get strong with food plans',
    image: Images.health.plan02,
  },
  {
    id: 2,
    level: '9',
    title: 'Food For Nice',
    titleButton: 'Be Nice',
    description: 'Get strong with food plans',
    image: Images.health.plan03,
  },
  {
    id: 3,
    level: '10',
    title: 'Food For Strengs',
    titleButton: 'Be Fly',
    description: 'Get strong with food plans',
    image: Images.health.plan04,
  },
];
