import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare, MapPin, Calendar, Package, ChevronLeft } from 'lucide-react';

interface ProductDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ProductDetailPage({ onNavigate }: ProductDetailPageProps) {
  const product = {
    name: 'Gaming Laptop',
    price: 650,
    description: 'Dell Gaming Laptop in excellent condition. Perfect for both gaming and coursework. Specs include Intel i7 processor, 16GB RAM, NVIDIA GTX 1660 Ti graphics card, and 512GB SSD. Battery life is still great, around 4-5 hours. Comes with original charger.',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
    category: 'Electronics',
    condition: 'Good',
    location: 'North Campus Dorms',
    postedDate: 'Posted 2 days ago',
    seller: {
      name: 'Sarah Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rating: 4.8,
      totalSales: 12
    }
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        onClick={() => onNavigate('listing')}
        className="mb-4"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to Listings
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-3">{product.category}</Badge>
            <h1 className="mb-2">{product.name}</h1>
            <p className="text-primary mb-4">${product.price}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span>Condition: {product.condition}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{product.postedDate}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Seller Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4">Seller Information</h3>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                  <AvatarFallback>{product.seller.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4>{product.seller.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    ⭐ {product.seller.rating} • {product.seller.totalSales} items sold
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  className="flex-1"
                  onClick={() => onNavigate('chat')}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Seller
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('profile')}
                >
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Save for Later
            </Button>
            <Button variant="outline" className="flex-1">
              Report
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-12">
        <h2 className="mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 1, name: 'HP Laptop', price: 500, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400' },
            { id: 2, name: 'Lenovo ThinkPad', price: 580, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400' },
            { id: 3, name: 'MacBook Air', price: 750, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400' },
          ].map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => window.scrollTo(0, 0)}
            >
              <CardContent className="p-0">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h4>{item.name}</h4>
                  <p className="text-primary">${item.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}