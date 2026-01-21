export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
              🐾 わんつなぎ
            </h1>
            <div className="flex gap-4">
              <a
                href="/login"
                className="px-6 py-3 text-gray-700 hover:text-primary font-medium transition-colors rounded-lg hover:bg-blue-50"
              >
                ログイン
              </a>
              <a
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
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  糸島で<br />
                  犬友達を<br />
                  見つけよう
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  わんつなぎは糸島エリアの犬飼い同士をつなぐコミュニティサービスです。<br />
                  愛犬と一緒に楽しめるイベントに参加したり、<br />
                  新しい犬友達を見つけましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="/register"
                    className="px-10 py-4 bg-primary text-white rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    今すぐ始める
                  </a>
                  <a
                    href="#features"
                    className="px-10 py-4 border-2 border-primary text-primary rounded-xl text-lg font-bold hover:bg-blue-50 transition-all"
                  >
                    詳しく見る
                  </a>
                </div>
              </div>

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

        {/* わんつなぎとは */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              わんつなぎとは
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              わんつなぎは、糸島エリアに特化した犬飼い専用のコミュニティプラットフォームです。<br />
              近所に住む犬友達を見つけたり、楽しいイベントに参加したり、<br />
              愛犬の預かり・預け合いもできる、地域密着型のサービスです。<br />
              糸島という素敵な街で、愛犬との生活をもっと充実させませんか？
            </p>
          </div>
        </section>

        {/* 機能セクション */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                わんつなぎでできること
              </h3>
              <p className="text-xl text-gray-600">
                愛犬との生活がもっと楽しくなる4つの特徴
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* カード1 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-4xl">👥</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  犬友達を見つける
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  糸島エリア特化だから、近所の犬友達が簡単に見つかります
                </p>
              </div>

              {/* カード2 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-4xl">🎉</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  イベント参加
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  散歩会やドッグランでの交流会など楽しいイベント盛りだくさん
                </p>
              </div>

              {/* カード3 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-4xl">🏠</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  預かり・預け合い
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  信頼できる地域の仲間と愛犬の預かり・預け合いができます
                </p>
              </div>

              {/* カード4 */}
              <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 text-center">
                  安心・安全
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  地域密着だから顔が見えるコミュニティで安心して交流できます
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービスの流れ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                サービスの流れ
              </h3>
              <p className="text-xl text-gray-600">
                簡単4ステップで始められます
              </p>
            </div>

            <div className="space-y-8">
              {/* ステップ1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  1
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">会員登録（無料）</h4>
                  <p className="text-gray-600">
                    メールアドレスとパスワードで簡単に登録できます。完全無料でご利用いただけます。
                  </p>
                </div>
              </div>

              {/* ステップ2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  2
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">プロフィール作成</h4>
                  <p className="text-gray-600">
                    あなたと愛犬の情報を登録しましょう。犬種、年齢、性格などを入力して、相性の良い仲間を見つけやすくします。
                  </p>
                </div>
              </div>

              {/* ステップ3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  3
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">イベント参加 or 飼い主を探す</h4>
                  <p className="text-gray-600">
                    開催中のイベントに参加したり、近くの犬友達を検索したり、預かり依頼を出したりできます。
                  </p>
                </div>
              </div>

              {/* ステップ4 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 rounded-2xl p-8">
                <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  4
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">つながる・交流する</h4>
                  <p className="text-gray-600">
                    気になる飼い主さんにメッセージを送ったり、実際に会って交流を深めましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                こんな方におすすめ
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700 text-lg">糸島エリアで犬友達が欲しい方</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700 text-lg">愛犬と一緒に楽しめるイベントを探している方</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700 text-lg">旅行や用事で愛犬を預けたい方</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700 text-lg">同じ犬種の飼い主さんと情報交換したい方</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700 text-lg">近所の散歩仲間が欲しい方</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <p className="text-gray-700 text-lg">地域に根ざした安心できるコミュニティを求めている方</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                よくある質問
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Q. 利用料金はかかりますか？</h4>
                <p className="text-gray-600">A. いいえ、わんつなぎは完全無料でご利用いただけます。会員登録から全ての機能まで、費用は一切かかりません。</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Q. 糸島エリア外に住んでいても利用できますか？</h4>
                <p className="text-gray-600">A. わんつなぎは糸島エリアに特化したサービスです。糸島エリアでの交流や活動を前提としていますので、糸島エリアにお住まいの方、または頻繁に訪れる方にご利用をおすすめします。</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Q. どんな犬種でも登録できますか？</h4>
                <p className="text-gray-600">A. はい、全ての犬種の飼い主さんに登録いただけます。小型犬から大型犬まで、様々な犬種の飼い主さんが集まるコミュニティです。</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Q. プライバシーは守られますか？</h4>
                <p className="text-gray-600">A. はい、個人情報は厳重に管理しています。プロフィールに掲載する情報も、ご自身で公開範囲を選択できます。安心してご利用ください。</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Q. イベントはどのくらいの頻度で開催されますか？</h4>
                <p className="text-gray-600">A. 月に数回、様々なイベントを開催予定です。ドッグランでの交流会、季節のイベント、散歩会など、多彩なイベントをご用意します。</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Q. 預かり機能はどのように使うのですか？</h4>
                <p className="text-gray-600">A. 預かり依頼を投稿すると、対応可能な飼い主さんから連絡が来ます。事前にメッセージでやり取りし、お互いに納得した上でご利用ください。地域の信頼できる仲間同士での助け合いを推奨しています。</p>
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
            <a
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