import * as React from "react";
import { StyledSafeAreaView, StyledView } from "./styles";
import { ViewProps, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";

interface LayoutProps extends ViewProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <StyledSafeAreaView>
        <StyledView {...props}>{props.children}</StyledView>
        <StatusBar backgroundColor="#3C0F67" />
      </StyledSafeAreaView>
    </>
  );
};

export { Layout };
