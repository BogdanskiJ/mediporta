import { LoadingPage } from "../components/loading";

export default {
  title: "LoadingPage",
  component: LoadingPage,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <LoadingPage {...args} />;
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};
