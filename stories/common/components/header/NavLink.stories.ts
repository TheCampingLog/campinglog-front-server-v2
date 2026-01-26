// components/layout/header/NavLink.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import NavLink from '@/feature/common/components/header/NavLink';

const meta = {
  title: 'feature/common/components/header/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: '링크 경로',
    },
    children: {
      control: 'text',
      description: '링크 텍스트',
    },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '/camps/list',
    children: '캠핑장',
  },
};
