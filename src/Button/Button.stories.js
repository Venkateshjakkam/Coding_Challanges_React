import React from "react";
import Button from "./Button";

const buttonStoryMeta = {
  title: "Components/Button",
  component: Button,
};

export default buttonStoryMeta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Submit",
  type: "secondary",
};
