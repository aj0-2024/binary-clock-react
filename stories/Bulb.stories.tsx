import React from "react";
import { Meta, Story } from "@storybook/react";
import ViewBulb, { BulbProps } from "../src/ViewBulb";

const meta: Meta = {
    title: "Components/ViewBulb",
    component: ViewBulb,
    argTypes: {},
    parameters: {},
};

export default meta;

const Template: Story<BulbProps> = args => <ViewBulb {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
