import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Layout,
  Icon,
  useTheme,
} from '@ui-kitten/components';

import Text from 'components/Text';
import ProgressBar from 'components/ProgressBar';
import numeral from 'numeral';

interface Props {
  title: string;
  cals: number;
  totalCals: number;
  style?: StyleProp<ViewStyle>;
}

const CardCals = ({title, cals, totalCals, style}: Props) => {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const formatNumber = (amount: number) => {
    let textResult = ``;
    const _amount = amount.toFixed(2);
    try {
      if (isNaN(parseFloat(_amount))) {
        textResult += numeral(parseFloat(_amount.replace(',', ''))).format(
          '0,0',
        );
      } else {
        textResult += numeral(parseFloat(_amount)).format('0,0');
      }
    } catch (e) {
      console.log(e);
    }
    return textResult;
  };
  return (
    <Layout style={[styles.container, style]} level="9">
      <Text category="h6" children={title} marginBottom={17} />
      <ProgressBar
        progress={cals / totalCals}
        progressColor={theme['color-basic-100']}
        containColor={`${theme['color-basic-100']}20`}
      />
      <View style={styles.calsView}>
        <Text category="h7">{formatNumber(cals)}</Text>
        <Text category="h7" opacity={0.5}>
          {formatNumber(totalCals)}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnShowMore}>
        <Icon
          pack="assets"
          name="caret_down"
          style={styles.icon}
          opacity={0.5}
        />
      </TouchableOpacity>
    </Layout>
  );
};

export default CardCals;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 8,
    paddingTop: 16,
    paddingHorizontal: 16,
    marginHorizontal: 24,
  },
  calsView: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  btnShowMore: {
    alignItems: 'center',
  },
  icon: {
    tintColor: 'text-basic-color',
    marginBottom: 12,
  },
});
