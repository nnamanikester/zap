import * as React from "react";
import { StyledSafeAreaView, StyledView } from "./styles";
import { ViewProps, StatusBar } from "react-native";

interface LayoutProps extends ViewProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <StyledSafeAreaView>
        <StyledView {...props}>{props.children}</StyledView>
        <StatusBar backgroundColor="#3c0f67" barStyle="dark-content" />
      </StyledSafeAreaView>
    </>
  );
};

export { Layout };
