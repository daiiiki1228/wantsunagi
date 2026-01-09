export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-primary">わんつなぎ</h1>
            <div className="space-x-4">
              <a
                href="/login"
                className="text-gray-600 hover:text-primary font-medium"
              >
                ログイン
              </a>
              <a
                href="/register"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
              >
                新規登録
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              糸島で犬友達を<br />
              見つけよう
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              わんつなぎは糸島エリアの犬飼い同士をつなぐコミュニティサービスです。
              愛犬と一緒に楽しめるイベントに参加したり、新しい犬友達を見つけましょう。
            </p>
            <div className="space-x-4">
              <a
                href="/register"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-hover transition-colors inline-block"
              >
                今すぐ始める
              </a>
              <a
                href="/login"
                className="border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-light transition-colors inline-block"
              >
                ログイン
              </a>
            </div>
          </div>

          <div className="py-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              わんつなぎでできること
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">飼い主同士のつながり</h4>
                <p className="text-gray-600">
                  糸島エリアの犬飼い同士でプロフィールを共有し、犬種やエリアで仲間を見つけられます。
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">イベント参加</h4>
                <p className="text-gray-600">
                  ドッグランでの集まりや散歩会など、愛犬と一緒に楽しめるイベントに参加できます。
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">地域密着</h4>
                <p className="text-gray-600">
                  糸島エリアに特化しているので、実際に会いやすい近所の犬友達が見つかります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">わんつなぎ</h3>
            <p className="text-gray-600 text-sm">
              © 2024 わんつなぎ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
