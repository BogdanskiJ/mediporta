import React from "react";
import { SearchBoxContainer } from "../components/requestOptions/searchBox/searchBoxContainer";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

export default {
  title: "SearchBox",
  component: SearchBoxContainer,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <SearchBoxContainer {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  $handleClick: action("clicked"),
};
