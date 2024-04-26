import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

import {
  Container,
  Content,
  Text,
  NavigationAction,
  VStack,
  HStack,
} from 'components';
import TabBar from './TabBar';
import CardWeight from './CardWeight';
import ChartBar from './ChartBar';
import BottomTab from '../elements/BottomTab';

const Health02 = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const [activeTab, setActiveTab] = React.useState(2);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" icon="alien" />}
        accessoryRight={
          <NavigationAction status="primary" icon="circles_four" />
        }
        title="aihealthtrack"
      />
      <TabBar
        tabs={TAB}
        tabActive={activeTab}
        onChangeTab={setActiveTab}
        backgroundTabActive={theme['background-basic-color-5']}
        backgroundTab={theme['background-basic-color-2']}
        style={styles.tab}
      />
      <Content contentContainerStyle={styles.content}>
        <CardWeight
          onUpdate={() => {}}
          currentWeight={50.4}
          targetLost={5}
          prvWeight={53}
        />
        <ChartBar data={data} />
        <HStack
          itemsCenter
          padding={10}
          level="10"
          border={16}
          justify="flex-start"
          mt={24}>
          <VStack padding={12}>
            <Icon pack="assets" name="smiley" style={styles.smiley} />
          </VStack>
          <VStack ml={16}>
            <Text category="h7" marginBottom={4}>
              Body measurements
            </Text>
            <Text category="footnote" uppercase>
              Good
            </Text>
          </VStack>
        </HStack>
      </Content>
      <BottomTab />
    </Container>
  );
});

export default Health02;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  tab: {
    marginHorizontal: 24,
    marginTop: 8,
  },
  content: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  smiley: {
    width: 24,
    height: 24,
    tintColor: 'text-basic-color',
  },
});
const TAB = ['Week', 'Month', 'Year'];
const data = [
  {x: 1, y: 1, y0: 52, date: 'S'},
  {x: 2, y: 1, y0: 48, date: 'M'},
  {x: 3, y: 1, y0: 53, date: 'T'},
  {x: 4, y: 1, y0: 60, date: 'W'},
  {x: 5, y: 1, y0: 50, date: 'T'},
  {x: 6, y: 1, y0: 49, date: 'F'},
  {x: 7, y: 1, y0: 54, date: 'S'},
];
