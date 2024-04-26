import Text from 'components/Text';
import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp, ColorValue} from 'react-native';
import {Button} from '@ui-kitten/components';
import {EvaSize} from '@ui-kitten/components/devsupport';

interface Props {
  tabs?: string[];
  style?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  backgroundTab?: string | ColorValue;
  backgroundTabActive?: string | ColorValue;
  onChangeTab: (index: number) => void;
  tabActive: number;
  uppercase?: boolean;
  capitalize?: boolean;
  status?: Array<string>;
  size?: EvaSize;
}
const TabBar = ({
  tabs,
  onChangeTab,
  style,
  tabStyle,
  size,
  capitalize,
  uppercase,
  backgroundTab='#F5F7FA',
  tabActive,
  status = ['white', 'placeholder'],
  backgroundTabActive = '#5784E8',
}: Props) => {
  const _onChangeTab = React.useCallback(
    (number: number) => {
      onChangeTab(number);
    },
    [onChangeTab],
  );

  return (
    <View style={[styles.container, style, {backgroundColor: backgroundTab}]}>
      {tabs?.map((item, index) => {
        const isActive = tabActive === index;
        const backgroundColor = {
          backgroundColor: isActive ? backgroundTabActive : undefined,
        };
        const tintColor = tabActive === index ? status[0] : status[1];
        return (
          <Button
            onPress={() => _onChangeTab(index)}
            key={index}
            style={[styles.tabStyle, backgroundColor, tabStyle]}
            size={size}
            children={props => {
              return (
                <Text
                  capitalize={capitalize}
                  uppercase={uppercase}
                  category={'h7'}
                  opacity={isActive ? 1 : 0.5}
                  status={tintColor}
                  center
                  children={item}
                />
              );
            }}
          />
        );
      })}
    </View>
  );
};
export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    height: 48,
  },
  tabStyle: {
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    flex: 1,
  },
  noti: {
    position: 'absolute',
    right: 9,
    top: 9,
    borderRadius: 50,
  },
});
