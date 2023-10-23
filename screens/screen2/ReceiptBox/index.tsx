import * as React from "react";
import {
  StyledBadge,
  StyledBox,
  StyledDivider,
  StyledFloorBalls,
  StyledFloorBallsContainer,
  StyledLeftBall,
  StyledListItem,
  StyledRightBall,
  StyledSupportBox,
} from "./styles";
import { View } from "react-native";
import { Text } from "../Text";

interface ReceiptBoxProps {}

const ReceiptBox: React.FC<ReceiptBoxProps> = () => {
  return (
    <>
      <StyledBox>
        <Text h1 align="center">
          ₦24,000
        </Text>

        <StyledBadge>
          <Text color="#29B263" bold>
            Completed
          </Text>
        </StyledBadge>

        <StyledDivider>
          <StyledLeftBall />
          <StyledRightBall />
        </StyledDivider>

        <StyledListItem>
          <Text color="#938A99">Transaction type</Text>
          <Text bold>Outward Transfer</Text>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Date</Text>
          <Text bold>6:50 pm, 10 Oct 2023</Text>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Fee</Text>
          <Text bold>₦0 (Free)</Text>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Sender details</Text>
          <View>
            <Text bold align="right">
              Falola Oluwaseyi
            </Text>
            <Text color="#938A99" align="right">
              Zap account
            </Text>
          </View>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Beneficiary</Text>
          <View>
            <Text bold align="right">
              Njoku Kalu
            </Text>
            <Text color="#938A99" align="right">
              GTBank - 2072411113
            </Text>
          </View>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Description</Text>
          <Text bold>Seyi</Text>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Reference number</Text>
          <Text bold>9219 6282 2832 283</Text>
        </StyledListItem>

        <StyledListItem>
          <Text color="#938A99">Session ID</Text>
          <Text bold>9219628228322832832283322</Text>
        </StyledListItem>

        <StyledSupportBox>
          <Text bold align="center">
            For support and enquiries:
          </Text>
          <Text color="#48127C" title align="center">
            support@zap.money
          </Text>
        </StyledSupportBox>

        <StyledFloorBallsContainer>
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
          <StyledFloorBalls />
        </StyledFloorBallsContainer>
      </StyledBox>
    </>
  );
};

export { ReceiptBox };
