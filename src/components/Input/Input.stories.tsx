import React from "react";
import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const largeInp: Story = {
  args: {
    size: "large",
    placeholder: "This is Large Input",
  },
};
