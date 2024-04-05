import React from "react";
import { ErrorPage } from "../components/error";

export default {
  title: "ErrorPage",
  component: ErrorPage,
};

const Template = (args) => <ErrorPage {...args} />;
export const Default = Template.bind({});
