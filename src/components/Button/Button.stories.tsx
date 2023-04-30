import React from "react";
import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Button Secondary",
    size: "large",
  },
};
