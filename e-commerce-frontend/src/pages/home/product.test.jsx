import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Product } from './Product';

describe('Product Component', () => {
  it('renders product details correctly', () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"]
    };

    const loadCart = vi.fn();   //  create a fake function for that doesn't do anything (mock)
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs') // ckeck the fake web page
    ).toBeInTheDocument();

    expect(
      screen.getByText('$10.90') // ckeck the fake web page
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('product-image') // ckeck the fake web page
    ).toHaveAttribute('src', 'images/products/athletic-cotton-socks-6-pairs.jpg')

    expect(
      screen.getByTestId('product-rating-stars-image') // ckeck the fake web page
    ).toHaveAttribute('src', 'images/ratings/rating-45.png')

    expect(
      screen.getByText('87') // ckeck the fake web page
    ).toBeInTheDocument();
    
});
})