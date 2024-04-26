import React from 'react';
import {View, Image} from 'react-native';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import useLayout from 'hooks/useLayout';

import Text from 'components/Text';
import {MealRecipesProps} from './types';

interface ItemProps {
  data: MealRecipesProps;
}

const MealRecipesItem = ({data}: ItemProps) => {
  const {id, name, image, cals} = data;
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, {width: 160 * (width / 375)}]}>
      <Image
        source={image}
        /* @ts-ignore */
        style={styles.image}
      />
      <Text category="h7" marginBottom={8} capitalize>
        {name}
      </Text>
      <View style={styles.calsView}>
        <Text category="subhead">{cals} Cals</Text>
        <Icon pack="assets" name="smiley" style={styles.icon} />
      </View>
    </View>
  );
};

export default MealRecipesItem;

const themedStyles = StyleService.create({
  container: {
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    borderRadius: 8,
    marginRight: 8,
    padding: 16,
  },
  image: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  calsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    tintColor: 'color-primary-100',
    width: 16,
    height: 16,
  },
});
