import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, Grid3x3, List, SlidersHorizontal } from 'lucide-react';

interface ProductListingPageProps {
  onNavigate: (page: string) => void;
}

const allProducts = [
  { id: 1, name: 'Calculus Textbook', price: 45, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400', category: 'Books', seller: 'John D.' },
  { id: 2, name: 'Gaming Laptop', price: 650, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400', category: 'Electronics', seller: 'Sarah M.' },
  { id: 3, name: 'Mini Fridge', price: 80, image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400', category: 'Furniture', seller: 'Mike R.' },
  { id: 4, name: 'Bike', price: 120, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400', category: 'Transportation', seller: 'Emma L.' },
  { id: 5, name: 'Chemistry Lab Manual', price: 25, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400', category: 'Books', seller: 'Alex K.' },
  { id: 6, name: 'Desk Lamp', price: 15, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', category: 'Furniture', seller: 'Lisa W.' },
  { id: 7, name: 'Headphones', price: 85, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', category: 'Electronics', seller: 'Tom H.' },
  { id: 8, name: 'Backpack', price: 35, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', category: 'Accessories', seller: 'Nina P.' },
  { id: 9, name: 'Study Desk', price: 95, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400', category: 'Furniture', seller: 'Chris B.' },
];

export function ProductListingPage({ onNavigate }: ProductListingPageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2">Browse Products</h1>
        <p className="text-muted-foreground">Discover items from your campus community</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Books">Books</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Furniture">Furniture</SelectItem>
              <SelectItem value="Transportation">Transportation</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden sm:flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={viewMode === 'grid' 
        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        : 'flex flex-col gap-4'
      }>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigate('detail')}
          >
            <CardContent className={viewMode === 'grid' ? 'p-0' : 'p-4 flex gap-4'}>
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className={viewMode === 'grid' 
                  ? 'w-full h-48 object-cover rounded-t-lg'
                  : 'w-32 h-32 object-cover rounded-lg flex-shrink-0'
                }
              />
              <div className={viewMode === 'grid' ? 'p-4' : 'flex-1'}>
                <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                <h3 className="mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">Seller: {product.seller}</p>
                <p className="text-primary">${product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}