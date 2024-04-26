import React from 'react';
import {View, FlatList} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';

import Text from 'components/Text';
import TrendMealItem, {TrendMealProps} from './TrendMealItem';
import keyExtractor from 'utils/keyExtractor';
import Images from 'assets/images';

const TrendingMeal = () => {
  const styles = useStyleSheet(themedStyles);
  const renderItem = React.useCallback(({item}: {item: TrendMealProps}) => {
    return <TrendMealItem item={item} />;
  }, []);
  return (
    <View style={styles.container}>
      <Text category="h5" marginBottom={14} marginLeft={24}>
        Trending
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};

export default TrendingMeal;

const themedStyles = StyleService.create({
  container: {
    marginTop: 24,
  },
  content: {
    paddingLeft: 24,
    paddingRight: 8,
  },
});
const data = [
  {
    id: 0,
    name: 'sushi hot',
    image: Images.health.sushi,
    recipes: 31,
    level: '10',
  },
  {
    id: 1,
    name: 'mochi suke',
    image: Images.health.sushi,
    recipes: 31,
    level: '9',
  },
];
