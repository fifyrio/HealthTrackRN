import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {
  StyleService,
  useStyleSheet,
  Icon,
  Toggle,
  Layout,
} from '@ui-kitten/components';

import {Text} from 'components';

interface Props {
  icon: string;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
  style?: StyleProp<ViewStyle>;
}

const ToggleReminder = ({checked, icon, onChange, style}: Props) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftView}>
        <Layout style={styles.notification}>
          <Icon pack="assets" name={icon} style={styles.icon} />
        </Layout>
        <View>
          <Text category="h7" marginTop={2}>
            Remind Me
          </Text>
          <Text category="footnote" marginTop={4}>
            8:00
          </Text>
        </View>
      </View>
      <Toggle checked={checked} status="primary" onChange={onChange} />
    </View>
  );
};

export default ToggleReminder;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
  },
  notification: {
    backgroundColor: 'background-basic-color-9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 99,
    marginRight: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'text-primary-color',
  },
});
