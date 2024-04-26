import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  useTheme,
  Button,
} from '@ui-kitten/components';
import {Text, VStack, HStack} from 'components';
import ProgressBar from 'components/ProgressBar';

interface CardWeightProps {
  onUpdate(): void;
  targetLost: number;
  currentWeight: number;
  prvWeight: number;
}

const CardWeight = ({
  onUpdate,
  targetLost,
  currentWeight,
  prvWeight,
}: CardWeightProps) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const weightLost = prvWeight - currentWeight;

  return (
    <VStack style={styles.container} level="9">
      <HStack itemsCenter mb={8}>
        <Text category="h6" uppercase>
          Goal Weight
        </Text>
        <Text category="h4">{prvWeight}kgs</Text>
      </HStack>
      <Text category="body" status="platinum" marginBottom={24}>
        You’ve lost {(prvWeight - currentWeight).toFixed(1)} kgs
      </Text>
      <ProgressBar
        progress={weightLost / targetLost}
        containColor={`${theme['text-basic-color']}20`}
        progressColor={theme['text-basic-color']}
      />
      <HStack mt={8} mb={24}>
        <Text>{currentWeight}</Text>
        <Text>{prvWeight}</Text>
      </HStack>
      <Button children={'Update Weight'} onPress={onUpdate} />
    </VStack>
  );
};

export default CardWeight;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 8,
    padding: 16,
  },
});
