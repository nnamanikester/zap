import * as React from "react";
import { ReceiptBox } from "./ReceiptBox";
import { Copyright, ReceiptHeader } from "../../components";
import { Layout } from "./Layout";

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
