import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Layout,
} from '@ui-kitten/components';
import useLayout from 'hooks/useLayout';
import Text from 'components/Text';
import NavigationAction from 'components/NavigationAction';
import {
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';

interface Props {
  x: number;
  y: number;
  date?: string;
}
interface ItemProps {
  data: Props[];
  style?: StyleProp<ViewStyle>;
  title: string;
  strokeColor: string;
}

const Chart = ({data, style, title, strokeColor}: ItemProps) => {
  const {height, width, top, bottom} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={[styles.container, style]} level="1">
      <Layout level="1" style={styles.topCard}>
        <Text category="h7" children={title} capitalize />
        <NavigationAction icon="arrow_circle_right" status="primary" />
      </Layout>
      <VictoryChart
        maxDomain={{y: 150}}
        width={width - 50}
        height={120 * (812 / height)}
        padding={{left: -1, bottom: 0, right: 0, top: 0}}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({datum}) => `${datum.step}`}
            labelComponent={
              <VictoryTooltip
                activateData={true}
                renderInPortal={false}
                flyoutWidth={60}
                flyoutHeight={32}
                cornerRadius={8}
                pointerLength={6}
                flyoutStyle={{
                  strokeWidth: 0,
                  fill: '#FFFFFF',
                }}
                style={{
                  fill: '#1A051D',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 17,
                }}
                dy={10}
                constrainToVisibleArea
                dx={4}
              />
            }
          />
        }>
        <VictoryLine
          y0={() => 40}
          animate={{
            duration: 2000,
            onLoad: {duration: 1000},
          }}
          interpolation={'catmullRom'}
          style={{
            data: {
              stroke: strokeColor,
              strokeWidth: 4,
            },
          }}
          data={data}
        />
      </VictoryChart>
      <Layout style={styles.label} level="1">
        <Text category="c1" status="placeholder">
          S
        </Text>
        <Text category="c1" status="placeholder">
          M
        </Text>
        <Text category="c1" status="placeholder">
          T
        </Text>
        <Text category="c1" status="placeholder">
          W
        </Text>
        <Text category="c1" status="placeholder">
          T
        </Text>
        <Text category="c1" status="placeholder">
          F
        </Text>
        <Text category="c1" status="placeholder">
          S
        </Text>
      </Layout>
    </Layout>
  );
};

export default Chart;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'color-basic-900',
    marginHorizontal: 24,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    marginTop: -4,
    paddingTop: 22,
    borderRadius: 8,
    marginBottom: 16,
  },
});
