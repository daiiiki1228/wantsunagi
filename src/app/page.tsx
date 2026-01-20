export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              🐾 わんつなぎ
            </h1>
            <div className="flex gap-4">
              
                href="/login"
                className="px-6 py-3 text-gray-700 hover:text-primary font-medium transition-colors rounded-lg hover:bg-blue-50"
              >
                ログイン
              </a>
              
                href="/register"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg font-semibold"
              >
                新規登録
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左側：テキストコンテンツ */}
              <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  糸島で<br />
                  犬友達を<br />
                  見つけよう
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  わんつなぎは糸島エリアの犬飼い同士をつなぐコミュニティサービスです。愛犬と一緒に楽しめるイベントに参加したり、新しい犬友達を見つけましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  
                    href="/register"
                    className="px-10 py-4 bg-primary text-white rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    今すぐ始める
                  </a>
                  
                    href="/login"
                    className="px-10 py-4 border-2 border-primary text-primary rounded-xl text-lg font-bold hover:bg-blue-50 transition-all"
                  >
                    ログイン
                  </a>
                </div>
              </div>

              {/* 右側：犬の画像 */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="text-9xl">🐕</div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <p className="text-sm text-gray-600 mb-1">糸島エリア限定</p>
                  <p className="text-2xl font-bold text-primary">🏖️ 糸島</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 機能セクション */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                わんつなぎでできること
              </h3>
              <p className="text-xl text-gray-600">
                愛犬との生活がもっと楽しくなる
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* カード1 */}
              <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-5xl">👥</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  飼い主同士のつながり
                </h4>
                <p className="text-gray-600 leading-relaxed text-center">
                  糸島エリアの犬飼い同士でプロフィールを共有。犬種やエリアで気の合う仲間を見つけられます。
                </p>
              </div>

              {/* カード2 */}
              <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-5xl">🎉</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  楽しいイベント
                </h4>
                <p className="text-gray-600 leading-relaxed text-center">
                  ドッグランでの集まりや散歩会など、愛犬と一緒に楽しめるイベントに参加できます。
                </p>
              </div>

              {/* カード3 */}
              <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-5xl">📍</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  地域密着
                </h4>
                <p className="text-gray-600 leading-relaxed text-center">
                  糸島エリアに特化しているので、実際に会いやすい近所の犬友達が見つかります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              さあ、始めましょう！
            </h3>
            <p className="text-xl text-blue-100 mb-10">
              今すぐ登録して、糸島の犬友達コミュニティに参加しよう
            </p>
            
              href="/register"
              className="inline-block px-12 py-5 bg-white text-primary rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              無料で始める 🐾
            </a>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">🐾 わんつなぎ</h3>
            <p className="text-gray-400 mb-4">
              糸島エリアの犬飼いコミュニティ
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 わんつなぎ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}