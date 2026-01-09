import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">わんつなぎ</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/home" className="text-gray-600 hover:text-primary font-medium">ホーム</a>
              <a href="/events" className="text-gray-600 hover:text-primary font-medium">イベント</a>
              <a href="/profile" className="text-gray-600 hover:text-primary font-medium">マイページ</a>
              <button className="text-gray-600 hover:text-primary font-medium">ログアウト</button>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}