import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  GraduationCap, 
  LogIn, 
  Home, 
  ShoppingBag, 
  FileText, 
  User, 
  MessageSquare,
  Search,
  Filter,
  Image,
  DollarSign,
  Info,
  Mail,
  Edit,
  List,
  Send,
  Bell,
  Settings,
  Plus,
  Eye,
  Star,
  MapPin
} from 'lucide-react';

export function MindMap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12 text-primary" />
            <h1 className="text-primary">Campus Marketplace - Prototype Structure</h1>
          </div>
          <p className="text-muted-foreground">Complete application flow and feature breakdown</p>
        </div>

        {/* Central Node */}
        <div className="flex justify-center mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center text-white">
                <GraduationCap className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-white mb-2">Campus Marketplace</h2>
                <p className="text-white/90">Student Buy & Sell Platform</p>
                <div className="flex gap-2 mt-4 justify-center">
                  <Badge className="bg-white text-primary">6 Pages</Badge>
                  <Badge className="bg-white text-primary">React + Tailwind</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Pages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* 1. Login Page */}
          <Card className="border-2 border-blue-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <LogIn className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-blue-600">1. Login Page</h3>
                  <Badge variant="secondary">Authentication</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Email/College ID Input</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Password Input</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <LogIn className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Login Button</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Register Link</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Forgot Password Link</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">Entry point to application</p>
              </div>
            </CardContent>
          </Card>

          {/* 2. Home Page */}
          <Card className="border-2 border-purple-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500 rounded-full p-3">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-purple-600">2. Home Page</h3>
                  <Badge variant="secondary">Dashboard</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Welcome Banner</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShoppingBag className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Featured Products (4 items)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Image className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Product Cards with Images</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="w-4 h-4 mt-1" />
                  <div>
                    <p className="text-sm">Condition Badges</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Quick Stats Section</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">Main landing after login</p>
              </div>
            </CardContent>
          </Card>

          {/* 3. Product Listing Page */}
          <Card className="border-2 border-green-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 rounded-full p-3">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-green-600">3. Product Listing</h3>
                  <Badge variant="secondary">Browse</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Search className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Search Bar</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Filter className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Category Filter</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Sort Options (Price, Newest)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Eye className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Grid/List View Toggle</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <List className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">9 Product Items</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">
                  Categories: Books, Electronics, Furniture, etc.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Product Detail Page */}
          <Card className="border-2 border-orange-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 rounded-full p-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-orange-600">4. Product Detail</h3>
                  <Badge variant="secondary">Item View</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Image className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Large Product Image</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Full Description</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Price & Condition Info</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Seller Information Card</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Message Seller Button</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Location & Date Posted</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShoppingBag className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Similar Products Section</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">Complete product information</p>
              </div>
            </CardContent>
          </Card>

          {/* 5. User Profile Page */}
          <Card className="border-2 border-pink-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-500 rounded-full p-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-pink-600">5. User Profile</h3>
                  <Badge variant="secondary">Account</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Profile Picture & Info</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Edit className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Edit Profile Mode</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Email & Location</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Bio & Stats</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <List className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Active Listings Tab</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShoppingBag className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Sold Items Tab</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">User's listings and information</p>
              </div>
            </CardContent>
          </Card>

          {/* 6. Chat/Message Page */}
          <Card className="border-2 border-indigo-500 hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-500 rounded-full p-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-indigo-600">6. Chat/Messages</h3>
                  <Badge variant="secondary">Communication</Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <List className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Conversations List</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Search className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Search Conversations</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Chat Interface</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Send className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Message Input & Send</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Bell className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Unread Notifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShoppingBag className="w-4 h-4 mt-1 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Product Context</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-muted-foreground">Real-time messaging interface</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          
          {/* Navigation System */}
          <Card className="border-2 border-cyan-500">
            <CardContent className="p-6">
              <h3 className="text-cyan-600 mb-6">Navigation System</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
                  <Home className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p>Desktop Navigation Bar</p>
                    <p className="text-xs text-muted-foreground">Home, Browse, Profile, Messages</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p>Mobile Bottom Navigation</p>
                    <p className="text-xs text-muted-foreground">Responsive icon-based menu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
                  <Bell className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p>Notification Badges</p>
                    <p className="text-xs text-muted-foreground">Unread message counter</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg">
                  <Plus className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p>Quick Actions</p>
                    <p className="text-xs text-muted-foreground">List Item, Logout buttons</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="border-2 border-amber-500">
            <CardContent className="p-6">
              <h3 className="text-amber-600 mb-6">Key Features</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Search className="w-5 h-5 text-amber-600" />
                  <div>
                    <p>Advanced Search & Filters</p>
                    <p className="text-xs text-muted-foreground">Category, price, and keyword search</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Image className="w-5 h-5 text-amber-600" />
                  <div>
                    <p>Image Integration</p>
                    <p className="text-xs text-muted-foreground">Unsplash placeholder images</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-amber-600" />
                  <div>
                    <p>Messaging System</p>
                    <p className="text-xs text-muted-foreground">Buyer-seller communication</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Eye className="w-5 h-5 text-amber-600" />
                  <div>
                    <p>Multiple View Modes</p>
                    <p className="text-xs text-muted-foreground">Grid and list layouts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Stack */}
        <Card className="mt-8 border-2 border-violet-500">
          <CardContent className="p-6">
            <h3 className="text-violet-600 mb-6 text-center">Technical Implementation</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-violet-50 rounded-lg">
                <p className="text-sm">React</p>
                <p className="text-xs text-muted-foreground">Framework</p>
              </div>
              <div className="text-center p-4 bg-violet-50 rounded-lg">
                <p className="text-sm">TypeScript</p>
                <p className="text-xs text-muted-foreground">Type Safety</p>
              </div>
              <div className="text-center p-4 bg-violet-50 rounded-lg">
                <p className="text-sm">Tailwind CSS</p>
                <p className="text-xs text-muted-foreground">Styling</p>
              </div>
              <div className="text-center p-4 bg-violet-50 rounded-lg">
                <p className="text-sm">Shadcn/UI</p>
                <p className="text-xs text-muted-foreground">Components</p>
              </div>
              <div className="text-center p-4 bg-violet-50 rounded-lg">
                <p className="text-sm">Lucide Icons</p>
                <p className="text-xs text-muted-foreground">Icons</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Flow */}
        <Card className="mt-8 border-2 border-emerald-500">
          <CardContent className="p-6">
            <h3 className="text-emerald-600 mb-6 text-center">User Flow</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>
                <span>Login</span>
              </div>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <div className="flex items-center gap-2">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
                <span>Home</span>
              </div>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
                <span>Browse</span>
              </div>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>
                <span>Details</span>
              </div>
              <span className="hidden sm:inline text-muted-foreground">→</span>
              <div className="flex items-center gap-2">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</div>
                <span>Message</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}