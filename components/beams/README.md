# React Bits Style 3D Beams Component

This is a Three.js-based implementation of the React Bits beams effect, customized for your Forum ENIT Entreprise website with your blue brand color (#28384d).

## Usage

```tsx
import Beams from '@/components/beams/Beams';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#28384d"  // Your homepage blue
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0}
  />
</div>
```

## Props

- `beamWidth` (number, default: 2): Width of each beam
- `beamHeight` (number, default: 15): Height of each beam
- `beamNumber` (number, default: 12): Total number of beams
- `lightColor` (string, default: '#28384d'): Color of the light beams
- `speed` (number, default: 2): Animation speed
- `noiseIntensity` (number, default: 1.75): Intensity of the noise effect
- `scale` (number, default: 0.2): Scale of the noise pattern
- `rotation` (number, default: 0): Rotation angle in degrees

## Features

- ✅ 3D animated noise beams using WebGL shaders
- ✅ Customizable parameters for different visual effects
- ✅ Transparent background for overlay usage
- ✅ Optimized for performance with Three.js
- ✅ Integrated with your homepage blue color scheme
- ✅ Responsive design

## Implementation Details

The component creates multiple plane geometries with custom shader materials that:
- Apply Perlin noise for organic movement
- Use your brand color (#28384d) as the base
- Animate smoothly over time
- Create depth with lighting effects