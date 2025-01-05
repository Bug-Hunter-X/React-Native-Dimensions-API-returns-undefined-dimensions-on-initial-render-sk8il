```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={{
      width: dimensions.width,
      height: dimensions.height,
      backgroundColor: 'lightblue',
    }}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;
```