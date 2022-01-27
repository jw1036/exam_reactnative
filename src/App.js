import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './navigations';
import { images } from './utils/images';
import { ProgressProvider, UserProvider } from './contexts';

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([
      require('../assets/splash.png'),
      ...Object.values(images),
    ]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProgressProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={theme.background}
          />
          <Navigation />
        </ProgressProvider>
      </UserProvider>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;
