import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '@/feature/common/components/header/Navigation';

const meta = {
  title: 'feature/common/components/header/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
