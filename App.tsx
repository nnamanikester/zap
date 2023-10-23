import { View } from "react-native";
import * as React from "react";
import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        await loadAsync({
          AppFont: require("./assets/fonts/SFProRounded.ttf"),
          AppFontMedium: require("./assets/fonts/SFProRoundedMedium.ttf"),
          AppFontBold: require("./assets/fonts/SFProRoundedBlack.ttf"),
        });
        setIsLoaded(true);
      } catch (e: any) {
        setIsLoaded(true);
        console.log(e.message);
      }
    })();
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* <Screen1 /> */}
      <Screen2 />
    </View>
  );
}
