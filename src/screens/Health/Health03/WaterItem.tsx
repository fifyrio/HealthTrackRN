import React from 'react';
import {ImageSourcePropType, View, Image, TouchableOpacity} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import useLayout from 'hooks/useLayout';
import {Checkbox, Text} from 'components';

interface Props {
  title: string;
  capacity: string;
  image: ImageSourcePropType;
  isChoose: boolean;
  onPress: (num: number) => void;
  num: number;
}

const WaterItem = ({title, capacity, image, isChoose, onPress, num}: Props) => {
  const {width} = useLayout();
  const styles = useStyleSheet(themedStyles);
  const onSelect = React.useCallback(() => {
    onPress && onPress(num);
  }, [num, onPress]);
  return (
    <TouchableOpacity
      onPress={onSelect}
      activeOpacity={0.7}
      style={[styles.container, {width: (width - 55) / 2}]}>
      <View style={styles.checkbox}>
        <Checkbox checked={isChoose} />
      </View>
      <Image
        source={image}
        /* @ts-ignore */
        style={styles.image}
      />
      <Text category="h6" center marginTop={20}>
        {title}
      </Text>
      <Text category="subhead" center>
        {capacity}
      </Text>
    </TouchableOpacity>
  );
};

export default WaterItem;

const themedStyles = StyleService.create({
  container: {
    paddingTop: 8,
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 16,
    maxHeight: 224,
  },
  checkbox: {
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 8,
  },
  image: {
    width: 80,
    height: 112,
    marginTop: 3,
  },
});
