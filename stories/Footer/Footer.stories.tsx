import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '../../components/Footer/Footer';

export default {
  title: 'Common/Footer',
  component: Footer,
  argTypes: {
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
