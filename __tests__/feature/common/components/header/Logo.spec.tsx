import Logo from '@/feature/common/components/header/Logo';
import { render, screen } from '@testing-library/react';

describe('Logo 컴포넌트', () => {
  it('logo 컴포넌트가 렌더링된다다', () => {
    render(<Logo isScrolled={false} />);

    const logoImage = screen.getByRole('img', { name: /Camping Log/i });
    expect(logoImage).toBeInTheDocument();
  });
});
