import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  useTheme,
  StyleService,
  useStyleSheet,
  Layout,
  Icon,
} from '@ui-kitten/components';
import useLayout from 'hooks/useLayout';

import Text from 'components/Text';
import {
  VictoryBar,
  VictoryGroup,
  VictoryLabel,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';
import {HStack} from 'components';

interface Props {
  x: number;
  y: number;
  date: string;
}
interface DataProps {
  data: Props[];
}

const ChartBar = memo(({data}: DataProps) => {
  const {width} = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  return (
    <Layout style={styles.container} level="1">
      <HStack style={[styles.header, {width: width - 80}]}>
        <Text category="h7" marginTop={16}>
          Weight
        </Text>
        <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
          <Icon pack="assets" name="arrow_circle_right" style={styles.icon} />
        </TouchableOpacity>
      </HStack>
      <HStack>
        <VictoryGroup
          height={200}
          data={data}
          containerComponent={
            <VictoryVoronoiContainer
              labels={({datum}) => `${datum.y0}Kg`}
              labelComponent={
                <VictoryTooltip
                  activateData={true}
                  flyoutWidth={60}
                  flyoutHeight={32}
                  cornerRadius={8}
                  pointerLength={5}
                  dy={data => -data.datum.y0 * 1.7}
                  flyoutStyle={{
                    strokeWidth: 0,
                    fill: '#1F2933',
                  }}
                  style={{
                    fill: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 17,
                  }}
                  constrainToVisibleArea
                />
              }
            />
          }>
          <VictoryBar
            cornerRadius={{bottom: 4, top: 4}}
            barWidth={24}
            width={width - 40}
            labelComponent={<VictoryLabel dy={28} />}
            labels={({datum}) => `${datum.date}`}
            style={{
              labels: {
                fill: theme['text-placeholder-color'],
              },
              data: {fill: theme['background-basic-color-12']},
            }}
          />
        </VictoryGroup>
      </HStack>
    </Layout>
  );
});

export default ChartBar;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: 'background-basic-color-4',
    marginTop: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: -40,
    zIndex: 10,
  },
  icon: {
    tintColor: 'text-primary-color',
  },
  btn: {
    paddingTop: 17,
  },
});
