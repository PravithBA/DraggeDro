import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PannelAllowSpecified } from "./PannelAllowSpecified";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/PannelAllowSpecified",
    component: PannelAllowSpecified,
} as ComponentMeta<typeof PannelAllowSpecified>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PannelAllowSpecified> = (args) => <PannelAllowSpecified {...args} />;

const itemStyle: React.CSSProperties = {
    padding: '1rem',
    backgroundColor: 'black',
    display: 'inline-block',
    borderRadius: '1rem',
    width: "inline",
    color: 'white',
};

export const Test1 = Template.bind({});
Test1.args = {
    children: [
        <div style={itemStyle}>Object</div>,
    ],
    width: "50vw",
    height: "50vh",
    background: "aqua",
};


export const Test2 = Template.bind({});
Test2.args = {
    children: [
        <div style={itemStyle}>Object 1</div>,
        <div style={itemStyle}>Object 2</div>
    ],
    background: "aqua",
};