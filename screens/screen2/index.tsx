import * as React from "react";
import { ReceiptBox } from "./ReceiptBox";
import { Layout } from "./Layout";
import { ReceiptHeader } from "./ReceiptHeader";
import { Copyright } from "./Copyright";

interface Screen2Props {}

const Screen2: React.FC<Screen2Props> = () => {
  return (
    <Layout>
      <ReceiptHeader />
      <ReceiptBox />
      <Copyright />
    </Layout>
  );
};

export default Screen2;
