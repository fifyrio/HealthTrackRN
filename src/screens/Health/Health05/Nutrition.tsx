import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import Text from 'components/Text';

interface Props {
  cals: number;
  protein: number;
  fat: number;
  carb: number;
}
interface DataProps {
  data: Props;
  title: string;
  style: StyleProp<ViewStyle>;
}
const Nutrition = ({data, title, style}: DataProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, style]}>
      <Text category="h6">{title}</Text>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Cals
        </Text>
        <Text category="h7">{data.cals}g</Text>
      </View>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Protein
        </Text>
        <Text category="h7">{data.protein}g</Text>
      </View>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Carb
        </Text>
        <Text category="h7">{data.carb}g</Text>
      </View>
      <View style={styles.item}>
        <Text category="body" status="snow">
          Fat
        </Text>
        <Text category="h7">{data.fat}g</Text>
      </View>
    </View>
  );
};

export default Nutrition;

const themedStyles = StyleService.create({
  container: {
    paddingHorizontal: 24,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'background-basic-color-3',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingBottom: 14,
  },
});
