import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { UserProfilePage } from './components/UserProfilePage';
import { ChatPage } from './components/ChatPage';
import { Navigation } from './components/Navigation';
import { MindMap } from './components/MindMap';
import { Toaster } from './components/ui/sonner';

type Page = 'login' | 'home' | 'listing' | 'detail' | 'profile' | 'chat' | 'mindmap';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('mindmap');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  // if (currentPage === 'mindmap') {
  //   return (
  //     <>
  //       <MindMap />
  //       <div className="fixed bottom-8 right-8">
  //         <button
  //           onClick={() => setCurrentPage('login')}
  //           className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all"
  //         >
  //           View Prototype →
  //         </button>
  //       </div>
  //       <Toaster />
  //     </>
  //   );
  // }

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
        unreadMessages={3}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'listing' && <ProductListingPage onNavigate={handleNavigate} />}
        {currentPage === 'detail' && <ProductDetailPage onNavigate={handleNavigate} />}
        {currentPage === 'profile' && <UserProfilePage onNavigate={handleNavigate} />}
        {currentPage === 'chat' && <ChatPage onNavigate={handleNavigate} />}
      </main>

      {/* Mindmap Button */}
      <button
        onClick={() => setCurrentPage('mindmap')}
        className="fixed bottom-8 right-8 bg-violet-600 text-white px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:bg-violet-700"
      >
        📊 View Mindmap
      </button>

      <Toaster />
    </div>
  );
}