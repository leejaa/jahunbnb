import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from '../../components/Header/Header';

export default {
  title: 'Common/Header',
  component: Header,
  argTypes: {
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
