import * as React from "react";
import { StyledView } from "./styles";
import { Text } from "../Text";

interface CopyrightProps {}

const Copyright: React.FC<CopyrightProps> = () => {
  return (
    <StyledView>
      <Text color="#fff" align="center">
        Enjoy easy money transfers with Zap
      </Text>
      <Text color="#fff" align="center">
        © 2023 Paystack Limited.
      </Text>
    </StyledView>
  );
};

export { Copyright };
