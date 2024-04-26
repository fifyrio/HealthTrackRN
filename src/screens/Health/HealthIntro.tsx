import * as React from 'react';
import {FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, NavigationAction} from 'components';
import {HealthStackParamList} from 'navigation/navigation-types';

interface ButtonProps {
  name: string;
  navigate: keyof HealthStackParamList;
}

const HealthIntro = React.memo(() => {
  const {navigate} = useNavigation<NavigationProp<HealthStackParamList>>();

  const styles = useStyleSheet(themedStyles);

  const data: ButtonProps[] = [
    {name: '01. Home Health', navigate: 'Health01'},
    {name: '02. Update Weight', navigate: 'Health02'},
    {name: '03. Water Goal', navigate: 'Health03'},
    {name: '04. Add Food', navigate: 'Health04'},
    {name: '05. Food Information', navigate: 'Health05'},
    {name: '06. Add Food List', navigate: 'Health06'},
    {name: '07. Repcies', navigate: 'Health07'},
    {name: '08. Set Plan', navigate: 'Health08'},
    {name: '09. Plan Details', navigate: 'Health09'},
    {name: '10. Activity', navigate: 'Health10'},
  ];

  return (
    <Container style={styles.container}>
      <TopNavigation
        title={'Health'}
        accessoryLeft={<NavigationAction status="placeholder" />}
      />
      <FlatList
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => {
          return (
            <Button
              status="primary"
              children={item.name}
              style={styles.button}
              onPress={() => {
                navigate(item.navigate);
              }}
            />
          );
        }}
      />
    </Container>
  );
});

export default HealthIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    paddingHorizontal: 24,
  },
  button: {
    marginBottom: 16,
  },
});
