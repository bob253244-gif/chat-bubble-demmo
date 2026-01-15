import { useState } from 'react';
import { ChatSidebar } from '@/components/ChatSidebar';
import { ChatArea } from '@/components/ChatArea';

const Index = () => {
  const [selectedContactId, setSelectedContactId] = useState<string | null>('1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <ChatSidebar 
        selectedContactId={selectedContactId}
        onSelectContact={setSelectedContactId}
        isMobileOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <ChatArea 
        selectedContactId={selectedContactId}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />
    </div>
  );
};

export default Index;
