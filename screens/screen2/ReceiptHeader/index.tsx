import * as React from "react";
import { StyledView } from "./styles";
import { LogoIcon } from "../../../icons";
import { Text } from "../Text";

interface ReceiptHeaderProps {}

const ReceiptHeader: React.FC<ReceiptHeaderProps> = () => {
  return (
    <StyledView>
      <LogoIcon />

      <Text color="#fff" title>
        Transaction Receipt
      </Text>
    </StyledView>
  );
};

export { ReceiptHeader };
