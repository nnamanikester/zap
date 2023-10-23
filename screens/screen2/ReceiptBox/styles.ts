import { rh, rw } from "react-native-full-responsive";
import styled from "styled-components/native";

export const StyledBox = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff;
  padding: ${rh(2.4)}px ${rw(4)}px;
`;

export const StyledBadge = styled.View`
  border-radius: 100px;
  background-color: #29b2631a;
  align-self: center;
  padding: 3px 15px;
  margin: 8px 0;
`;

export const StyledDivider = styled.View`
  border: 1px dashed #bab6bb;
  border-radius: 1px;
  margin: 8px 0;
`;

export const StyledListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${rh(0.3)}px 0;
`;

export const StyledSupportBox = styled.View`
  border-radius: 10px;
  justify-content: center;
  background-color: #fbf5ff;
  align-self: center;
  margin: ${rh(1.8)}px 0;
  padding: 6px;
`;

export const StyledFloorBallsContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  bottom: ${rw(-4)}px;
`;

export const StyledFloorBalls = styled.View`
  width: ${rw(6)}px;
  height: ${rw(6)}px;
  border-radius: 100px;
  background-color: #3c0f67;
  margin: 0 ${rw(0.7)}px;
`;

export const StyledLeftBall = styled.View`
  width: ${rw(6)}px;
  height: ${rw(6)}px;
  border-radius: 100px;
  background-color: #3c0f67;
  margin: 0 ${rw(0.7)}px;
  position: absolute;
  left: ${rw(-8)}px;
  top: ${rh(-1.5)}px;
`;

export const StyledRightBall = styled.View`
  width: ${rw(6)}px;
  height: ${rw(6)}px;
  border-radius: 100px;
  background-color: #3c0f67;
  margin: 0 ${rw(0.7)}px;
  position: absolute;
  right: ${rw(-8)}px;
  top: ${rh(-1.5)}px;
`;
