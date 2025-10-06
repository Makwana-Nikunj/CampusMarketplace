import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const featuredProducts = [
  {
    id: 1,
    name: 'Calculus Textbook',
    price: 45,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
    condition: 'Like New',
    category: 'Books'
  },
  {
    id: 2,
    name: 'Gaming Laptop',
    price: 650,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
    condition: 'Good',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Mini Fridge',
    price: 80,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400',
    condition: 'Excellent',
    category: 'Furniture'
  },
  {
    id: 4,
    name: 'Bike',
    price: 120,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400',
    condition: 'Good',
    category: 'Transportation'
  }
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="flex items-start gap-3">
          <Sparkles className="w-8 h-8 flex-shrink-0 mt-1" />
          <div>
            <h1 className="text-white mb-2">Welcome to Campus Marketplace!</h1>
            <p className="text-white/90">
              Discover great deals from fellow students. Buy, sell, and connect with your campus community.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2>Featured Products</h2>
          <Button variant="outline" onClick={() => onNavigate('listing')}>
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onNavigate('detail')}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-white text-foreground">
                    {product.condition}
                  </Badge>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="mb-2">{product.name}</h3>
                  <p className="text-primary">${product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-2">Active Listings</p>
            <p className="text-primary">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-2">Total Students</p>
            <p className="text-primary">3,567</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-2">Items Sold This Month</p>
            <p className="text-primary">892</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}