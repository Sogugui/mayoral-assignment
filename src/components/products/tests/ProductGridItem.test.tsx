import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductGridItem from '../ProductGridItem';
import { Product } from 'interfaces/product';

const mockProduct = {
  id: 'adults_tee_ripped',
  name: 'Test product',
  images: ['/public/products/Polo1.jpg', '/public/products/Polo1-back.jpg'],
  price: '100',
  discountPrice: '80',
  discountPercentage: '20',
  moreColors: false,
};

describe('ProductGridItem', () => {
  it('renders correctly', () => {
    const product: Product = { ...mockProduct };
    render(<ProductGridItem product={product} />);
    expect(screen.getByText('Test product')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('80 (-20%)')).toBeInTheDocument();
  });

  it('displays discount price and percentage correctly', () => {
    const productWithDiscount = { ...mockProduct, discountPrice: '80', discountPercentage: '20' };
    render(<ProductGridItem product={productWithDiscount} />);
    expect(screen.getByText('80 (-20%)')).toBeInTheDocument();
    expect(
      screen.getByText(mockProduct.price, { selector: 'p.text-gray-500.line-through' }),
    ).toBeInTheDocument();
  });

  it('displays add button', () => {
    render(<ProductGridItem product={mockProduct} />);
    expect(screen.getByText('AÑADIR')).toBeInTheDocument();
  });
});
