import * as React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLayout} from 'hooks';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Input,
  Button,
} from '@ui-kitten/components';

import {Container, Content, Text, NavigationAction, VStack} from 'components';
import Images from 'assets/images';
import WaterItem from './WaterItem';
import ToggleReminder from './ToggleReminder';

const Health03 = React.memo(() => {
  const theme = useTheme();
  const {goBack} = useNavigation();
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);

  const onSelect = React.useCallback((num: number) => {
    setSelectedIndex(num);
  }, []);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        accessoryRight={<NavigationAction icon="menu" status="primary" />}
        title="Goal Drink"
      />
      <Content>
        <Content horizontal contentContainerStyle={styles.contentWalter}>
          {DATA.map((item, i) => {
            return (
              <WaterItem
                key={i}
                title={item.title}
                capacity={item.capacity}
                image={item.image}
                isChoose={selectedIndex === i + 1}
                num={i + 1}
                onPress={onSelect}
              />
            );
          })}
        </Content>
        <VStack mh={24}>
          <Text category="h6" status="primary" marginBottom={8}>
            Daily
          </Text>
          <Input
            status="primary"
            accessoryRight={() => (
              <Text status="placeholder" opacity={0.6} category="subhead">
                Glass
              </Text>
            )}
          />
        </VStack>
        <ToggleReminder
          checked={isChecked}
          onChange={setIsChecked}
          icon="bell"
          style={styles.toggle}
        />
      </Content>
      <Button
        children="SETUP GOAL"
        disabled={!selectedIndex}
        style={[styles.bottomBtn, {bottom: bottom + 26}]}
      />
    </Container>
  );
});

export default Health03;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  contentWalter: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  toggle: {
    marginTop: 42,
    marginLeft: 26,
    marginRight: 32,
  },
  bottomBtn: {
    marginRight: 40,
    marginLeft: 44,
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
const DATA = [
  {image: Images.health.coca, title: 'Glass', capacity: '600ml'},
  {image: Images.health.walter, title: 'Bottle', capacity: '600ml'},
  {image: Images.health.coca, title: 'Glass', capacity: '600ml'},
  {image: Images.health.walter, title: 'Bottle', capacity: '600ml'},
];
