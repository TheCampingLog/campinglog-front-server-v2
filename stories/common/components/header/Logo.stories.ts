// components/layout/header/Logo.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Logo from '@/feature/common/components/header/Logo';

const meta = {
  title: 'feature/common/components/header/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isScrolled: {
      control: 'boolean',
      description: '스크롤 여부에 따른 로고 크기 변화',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 상태 (스크롤 전)
export const Default: Story = {
  args: {
    isScrolled: false,
  },
};

// 스크롤된 상태
export const Scrolled: Story = {
  args: {
    isScrolled: true,
  },
};
