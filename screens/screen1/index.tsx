import * as React from "react";
import { ReceiptBox } from "./ReceiptBox";
import { Copyright, ReceiptHeader } from "../../components";
import { Layout } from "./Layout";

interface Screen1Props {}

const Screen1: React.FC<Screen1Props> = () => {
  return (
    <Layout>
      <ReceiptHeader />
      <ReceiptBox />
      <Copyright />
    </Layout>
  );
};

export default Screen1;
