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
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-center md:text-left space-y-8">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  糸島で<br />
                  犬友達を<br />
                  見つけよう
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  わんつなぎは糸島エリアの犬飼い同士をつなぐコミュニティサービスです。<br />
                  愛犬と一緒に楽しめるイベントに参加したり、<br />
                  新しい犬友達を見つけましょう。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="/register"
                    className="px-10 py-5 bg-primary text-white rounded-xl text-lg font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    今すぐ始める
                  </a>
                  <a
                    href="#features"
                    className="px-10 py-5 border-2 border-primary text-primary rounded-xl text-lg font-bold hover:bg-blue-50 transition-all text-center"
                  >
                    詳しく見る
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="w-full max-w-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop" 
                    alt="幸せそうな犬と飼い主"
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                    <p className="text-sm text-gray-600 mb-1">糸島エリア限定</p>
                    <p className="text-2xl font-bold text-primary">🏖️ 糸島</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* わんつなぎとは */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              わんつなぎとは
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              わんつなぎは、糸島エリアに特化した犬飼い専用のコミュニティプラットフォームです。<br />
              近所に住む犬友達を見つけたり、楽しいイベントに参加したり、<br />
              愛犬の預かり・預け合いもできる、地域密着型のサービスです。<br />
              糸島という素敵な街で、愛犬との生活をもっと充実させませんか？
            </p>
          </div>
        </section>

        {/* 機能セクション */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                わんつなぎでできること
              </h3>
              <p className="text-xl text-gray-600">
                愛犬との生活がもっと楽しくなる4つの特徴
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* カード1 */}
              <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop" 
                    alt="犬を連れた飼い主同士の交流"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  犬友達を見つける
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-lg">
                  糸島エリア特化だから、近所の犬友達が簡単に見つかります。犬種や年齢、性格から相性の良い仲間と出会えます。
                </p>
              </div>

              {/* カード2 */}
              <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop" 
                    alt="ドッグランで遊ぶ犬たち"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  イベント参加
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-lg">
                  散歩会やドッグランでの交流会など楽しいイベント盛りだくさん。愛犬と一緒に新しい体験ができます。
                </p>
              </div>

              {/* カード3 */}
              <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=600&h=400&fit=crop" 
                    alt="犬の世話をする様子"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  預かり・預け合い
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-lg">
                  信頼できる地域の仲間と愛犬の預かり・預け合いができます。急な用事でも安心です。
                </p>
              </div>

              {/* カード4 */}
              <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=400&fit=crop" 
                    alt="糸島の美しい景色"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  安心・安全
                </h4>
                <p className="text-gray-600 leading-relaxed text-center text-lg">
                  地域密着だから顔が見えるコミュニティで安心して交流できます。糸島の素敵な環境で楽しめます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービスの流れ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                サービスの流れ
              </h3>
              <p className="text-xl text-gray-600">
                簡単4ステップで始められます
              </p>
            </div>

            <div className="space-y-12">
              {/* ステップ1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-10 shadow-lg">
                <div className="flex-shrink-0 w-28 h-28 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  1
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">会員登録（無料）</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    メールアドレスとパスワードで簡単に登録できます。完全無料でご利用いただけます。
                  </p>
                </div>
              </div>

              {/* ステップ2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-10 shadow-lg">
                <div className="flex-shrink-0 w-28 h-28 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  2
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">プロフィール作成</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    あなたと愛犬の情報を登録しましょう。犬種、年齢、性格などを入力して、相性の良い仲間を見つけやすくします。
                  </p>
                </div>
              </div>

              {/* ステップ3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-10 shadow-lg">
                <div className="flex-shrink-0 w-28 h-28 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  3
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">イベント参加 or 飼い主を探す</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    開催中のイベントに参加したり、近くの犬友達を検索したり、預かり依頼を出したりできます。
                  </p>
                </div>
              </div>

              {/* ステップ4 */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-10 shadow-lg">
                <div className="flex-shrink-0 w-28 h-28 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  4
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">つながる・交流する</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    気になる飼い主さんにメッセージを送ったり、実際に会って交流を深めましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                こんな方におすすめ
              </h3>
              <p className="text-xl text-gray-600">
                わんつなぎはこんな飼い主さんにぴったりです
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">✅</span>
                  <p className="text-gray-700 text-lg leading-relaxed">糸島エリアで犬友達が欲しい方</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">✅</span>
                  <p className="text-gray-700 text-lg leading-relaxed">愛犬と一緒に楽しめるイベントを探している方</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">✅</span>
                  <p className="text-gray-700 text-lg leading-relaxed">旅行や用事で愛犬を預けたい方</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">✅</span>
                  <p className="text-gray-700 text-lg leading-relaxed">同じ犬種の飼い主さんと情報交換したい方</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">✅</span>
                  <p className="text-gray-700 text-lg leading-relaxed">近所の散歩仲間が欲しい方</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">✅</span>
                  <p className="text-gray-700 text-lg leading-relaxed">地域に根ざした安心できるコミュニティを求めている方</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                よくある質問
              </h3>
              <p className="text-xl text-gray-600">
                ご不明な点はこちらをご確認ください
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Q. 利用料金はかかりますか？</h4>
                <p className="text-gray-600 text-lg leading-relaxed">A. いいえ、わんつなぎは完全無料でご利用いただけます。会員登録から全ての機能まで、費用は一切かかりません。</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Q. 糸島エリア外に住んでいても利用できますか？</h4>
                <p className="text-gray-600 text-lg leading-relaxed">A. わんつなぎは糸島エリアに特化したサービスです。糸島エリアでの交流や活動を前提としていますので、糸島エリアにお住まいの方、または頻繁に訪れる方にご利用をおすすめします。</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Q. どんな犬種でも登録できますか？</h4>
                <p className="text-gray-600 text-lg leading-relaxed">A. はい、全ての犬種の飼い主さんに登録いただけます。小型犬から大型犬まで、様々な犬種の飼い主さんが集まるコミュニティです。</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Q. プライバシーは守られますか？</h4>
                <p className="text-gray-600 text-lg leading-relaxed">A. はい、個人情報は厳重に管理しています。プロフィールに掲載する情報も、ご自身で公開範囲を選択できます。安心してご利用ください。</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Q. イベントはどのくらいの頻度で開催されますか？</h4>
                <p className="text-gray-600 text-lg leading-relaxed">A. 月に数回、様々なイベントを開催予定です。ドッグランでの交流会、季節のイベント、散歩会など、多彩なイベントをご用意します。</p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Q. 預かり機能はどのように使うのですか？</h4>
                <p className="text-gray-600 text-lg leading-relaxed">A. 預かり依頼を投稿すると、対応可能な飼い主さんから連絡が来ます。事前にメッセージでやり取りし、お互いに納得した上でご利用ください。地域の信頼できる仲間同士での助け合いを推奨しています。</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="py-24 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              さあ、始めましょう！
            </h3>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              今すぐ登録して、糸島の犬友達コミュニティに参加しよう
            </p>
            <a
              href="/register"
              className="inline-block px-16 py-6 bg-white text-primary rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              無料で始める 🐾
            </a>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">🐾 わんつなぎ</h3>
            <p className="text-gray-400 text-lg">
              糸島エリアの犬飼いコミュニティ
            </p>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500">
                © 2024 わんつなぎ. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}