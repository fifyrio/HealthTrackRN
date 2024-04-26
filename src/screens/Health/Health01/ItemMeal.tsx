import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import {StyleService, useStyleSheet, Button} from '@ui-kitten/components';
import {useLayout} from 'hooks';
import {Text} from 'components';

interface Props {
  id: number;
  image: ImageSourcePropType;
  title: string;
  calsUnder?: number;
  cals: number;
  recommended?: number;
}
interface ItemProps {
  data: Props;
  onPress?(): void;
}

const ItemMeal = ({data, onPress}: ItemProps) => {
  const {height, width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, {width: (width - 55) / 2}]}>
      <Image
        source={data.image}
        /* @ts-ignore */
        style={styles.image}
      />
      <Text category="h7" children={data.title} />
      <Text
        category="subhead"
        marginTop={24}
        marginBottom={8}
        children={`${data.cals} Cals`}
      />
      {data.calsUnder ? (
        <Text
          category="c1"
          status="placeholder"
          children={`${data.calsUnder} Cals Under`}
          marginBottom={26}
        />
      ) : (
        <Text
          category="c1"
          status="placeholder"
          children={`${data.recommended} Recommended`}
          marginBottom={26}
        />
      )}
      <Button onPress={onPress} status="primary" children="ADD" size="small" />
    </View>
  );
};

export default ItemMeal;

const themedStyles = StyleService.create({
  container: {
    borderWidth: 1,
    borderColor: 'color-basic-900',
    borderRadius: 16,
    marginRight: 12,
    padding: 16,
  },
  image: {
    marginBottom: 8,
  },
});
