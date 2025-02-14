import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, ViewStyle, StyleProp } from 'react-native';

interface SpriteViewerProps {
  source: ImageSourcePropType;
  spriteWidth?: number;
  spriteHeight?: number;
  row: number;
  column: number;
  scale?: number;
  style?: StyleProp<ViewStyle>;
}

const SpriteViewer: React.FC<SpriteViewerProps> = ({
  source,
  spriteWidth = 32,
  spriteHeight = 32,
  row,
  column,
  scale = 1,
  style,
}) => {
  return (
    <View style={[
      styles.container,
      {
        width: spriteWidth * scale,
        height: spriteHeight * scale,
        overflow: 'hidden',
      },
      style,
    ]}>
      <Image
        source={source}
        style={{
          width: '100%',
          height: '100%',
          transform: [
            {
              translateX: -column * spriteWidth * scale,
            },
            {
              translateY: -row * spriteHeight * scale,
            },
            {
              scale: scale,
            },
          ],
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
});

// Example usage with TypeScript
// const SpritesheetExample: React.FC = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <SpriteViewer
//         source={require('./path/to/spritesheet.png')}
//         spriteWidth={32}
//         spriteHeight={32}
//         row={1}
//         column={2}
//         scale={2}
//       />
//     </View>
//   );
// };

export type { SpriteViewerProps };
export { SpriteViewer };