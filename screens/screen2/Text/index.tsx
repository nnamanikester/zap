import * as React from "react";
import { StyleSheet, TextStyle, TextProps as TxtProps } from "react-native";
import { rs } from "react-native-full-responsive";
import styled from "styled-components/native";

interface TextProps extends TxtProps {
  h1?: boolean;
  title?: boolean;
  bold?: boolean;
  color?: string;
  align?: TextStyle["textAlign"];
}

const StyledText = styled.Text<TextProps>`
  font-size: ${({ h1, title }) =>
    h1 ? `${rs(25)}px` : title ? `${rs(12)}px` : `${rs(10)}px`};
  color: ${(props) => props.color || "#2F2334"};
  text-align: ${(props) => props.align || "left"};
  font-family: ${({ h1, title, bold }) =>
    h1 || bold || title ? "AppFontMedium" : "AppFont"};
  line-height: ${({ h1 }) => (h1 ? "31px" : "16px")};
`;

const Text: React.FC<TextProps> = (props) => {
  return <StyledText {...props} />;
};

export { Text };
