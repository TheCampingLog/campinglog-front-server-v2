import type { Meta, StoryObj } from '@storybook/react';
import NavDropdown from '@/feature/common/components/header/NavDropdown';

const meta = {
  title: 'feature/common/components/header/NavDropdown',
  component: NavDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: '드롭다운 메인 링크 경로',
    },
    children: {
      control: 'text',
      description: '드롭다운 버튼 텍스트',
    },
  },
} satisfies Meta<typeof NavDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const communityItems = [
  { href: '/boards/캠핑장정보', children: '캠핑장 정보' },
  { href: '/boards/캠팡장비리뷰', children: '캠핑장비 리뷰' },
];

export const Default: Story = {
  args: {
    href: '/boards',
    children: '커뮤니티',
    items: communityItems,
  },
};
