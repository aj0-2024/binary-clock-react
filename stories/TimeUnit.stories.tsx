import React from "react";
import { Meta, Story } from "@storybook/react";
import ViewTimeUnit, { TimeUnitProps } from "../src/ViewTimeUnit";

const meta: Meta = {
    title: "Components/ViewTimeUnit",
    component: ViewTimeUnit,
};

export default meta;

const Template: Story<TimeUnitProps> = args => <ViewTimeUnit {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
