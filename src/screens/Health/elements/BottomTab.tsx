import * as React from 'react';
import {useLayout} from 'hooks';
import {StyleService, useStyleSheet} from '@ui-kitten/components';

import {NavigationAction, HStack} from 'components';
import {Image} from 'react-native';
import Images from 'assets/images';

const BottomTab = React.memo(() => {
  const {height, width, top, bottom} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <HStack level="2" style={[styles.container, {paddingBottom: bottom + 8}]}>
      <NavigationAction status="primary" icon={'house'} />
      <NavigationAction status="primary" icon={'bookmarks'} />
      {/* @ts-ignore */}
      <Image source={Images.logo} style={styles.logo} />
      <NavigationAction status="primary" icon={'timer'} />
      <NavigationAction status="primary" icon={'user'} />
    </HStack>
  );
});

export default BottomTab;

const themedStyles = StyleService.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  logo: {
    width: 32,
    height: 32,
    marginTop: 4,
    marginHorizontal: 16,
  },
});
