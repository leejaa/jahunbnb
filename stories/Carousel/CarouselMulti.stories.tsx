import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { CarouselMulti, CarouselMultiProps } from '../../components/Carousel/CarouselMulti';

export default {
  title: 'Carousel/CarouselMulti',
  component: CarouselMulti,
  argTypes: {
  },
} as Meta;

const Template: Story<CarouselMultiProps> = (args) => <CarouselMulti {...args} />;

export const Default = Template.bind({});
Default.args = {
};
