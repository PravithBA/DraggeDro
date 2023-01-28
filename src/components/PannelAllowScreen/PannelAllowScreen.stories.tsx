import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PannelAllowScreen } from "../PannelAllowScreen/PannelAllowScreen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/PannelAllowScreen",
    component: PannelAllowScreen,
} as ComponentMeta<typeof PannelAllowScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PannelAllowScreen> = (args) => <PannelAllowScreen {...args} />;

const itemStyle: React.CSSProperties = {
    padding: '1rem',
    backgroundColor: 'black',
    display: 'inline-block',
    borderRadius: '1rem',
    width: "inline",
    color: 'white',
};

export const Test1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test1.args = {
    children: [
        <div style={itemStyle}>Object 1</div>,
        <div style={itemStyle}>Object 2</div>
    ],
    width: "20vw",
    height: "20vh",
    background: "pink",
};

