import React from 'react';
import {View, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import Text from 'components/Text';

interface Props {
  image: ImageSourcePropType;
  name: string;
  quantity: number;
  gam: number;
  cals: number;
}
interface ItemProps {
  data: Props;
  noFavoritesAdd: boolean;
}

const FoodDetails = ({data, noFavoritesAdd}: ItemProps) => {
  const styles = useStyleSheet(themedStyles);
  const [isFavorites, setIsFavorites] = React.useState(false);
  const onPress = React.useCallback(
    () => setIsFavorites(!isFavorites),
    [isFavorites],
  );
  return (
    <View style={styles.container}>
      <Image
        source={data.image}
        /* @ts-ignore */
        style={styles.image}
      />
      <View>
        <Text category="h6" capitalize>
          {data.name}
        </Text>
        <View style={styles.calsView}>
          <Text category="c1" status="placeholder">
            {data.cals} Cals
          </Text>
          <View style={styles.dot} />
          <Text category="c1" status="placeholder">
            {`${data.quantity} medium (${data.gam}g)`}
          </Text>
        </View>
      </View>
      {noFavoritesAdd ? null : (
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.7}
          onPress={onPress}>
          {isFavorites ? (
            <Icon pack="assets" name="bookmark" style={styles.icon} />
          ) : (
            <Icon pack="assets" name="plus_circle" style={styles.icon} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FoodDetails;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'background-basic-color-3',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 24,
  },
  image: {
    marginRight: 20,
  },
  calsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 99,
    backgroundColor: 'color-basic-700',
    marginHorizontal: 8,
  },
  btn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'color-primary-100',
  },
});
