export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-primary">わんつなぎ</h1>
            <div className="space-x-4">
              
                href="/login"
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                ログイン
              </a>
              
                href="/register"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
              >
                新規登録
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 md:py-24">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              糸島で犬友達を<br />
              見つけよう
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              わんつなぎは糸島エリアの犬飼い同士をつなぐコミュニティサービスです。<br />
              愛犬と一緒に楽しめるイベントに参加したり、新しい犬友達を見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                href="/register"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                今すぐ始める
              </a>
              
                href="/login"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
              >
                ログイン
              </a>
            </div>
          </div>

          {/* 機能カード */}
          <div className="py-16 md:py-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              わんつなぎでできること
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👥</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">飼い主同士のつながり</h4>
                <p className="text-gray-600 leading-relaxed">
                  糸島エリアの犬飼い同士でプロフィールを共有し、犬種やエリアで仲間を見つけられます。
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🎉</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">イベント参加</h4>
                <p className="text-gray-600 leading-relaxed">
                  ドッグランでの集まりや散歩会など、愛犬と一緒に楽しめるイベントに参加できます。
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">📍</span>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">地域密着</h4>
                <p className="text-gray-600 leading-relaxed">
                  糸島エリアに特化しているので、実際に会いやすい近所の犬友達が見つかります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">わんつなぎ</h3>
            <p className="text-gray-600 text-sm">
              © 2024 わんつなぎ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}