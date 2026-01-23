export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">🐾 わんつなぎ</div>
            <div className="flex gap-3">
              <a href="/login" className="px-5 py-2.5 text-gray-700 font-medium hover:text-primary transition-colors">
                ログイン
              </a>
              <a href="/register" className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-sm">
                無料で始める
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* ヒーローセクション */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                糸島で犬友達を<br />簡単マッチング
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                近所に住む犬飼い同士がつながる<br />
                糸島エリア特化型マッチングサービス
              </p>
              <div className="pt-4">
                <a href="/register" className="inline-block px-12 py-5 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  無料で始める →
                </a>
              </div>
              <div className="pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop" 
                  alt="ドッグランで遊ぶ犬たち"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* マッチングの特徴 */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                マッチングの仕組み
              </h2>
              <p className="text-xl text-gray-600">
                3ステップで理想の犬友達が見つかる
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">プロフィール登録</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  あなたと愛犬の情報を登録。犬種、年齢、性格、住んでいるエリアなどを入力するだけ。
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">相手を探す</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  近所の犬飼いさんを検索。犬種や年齢、エリアなどの条件で絞り込めます。
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">マッチング成立</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  気になる飼い主さんに「いいね」を送信。相手も「いいね」を返したらマッチング成立！
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* なぜ糸島特化なのか */}
        <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-8">
              なぜ糸島エリア特化？
            </h2>
            <div className="space-y-8 text-xl leading-relaxed">
              <p className="text-blue-100">
                一般的なマッチングアプリだと、実際に会うまでの距離が遠く、<br />
                なかなか交流が続かないことも...
              </p>
              <p className="text-2xl font-bold">
                わんつなぎは糸島エリアだけに絞ることで、<br />
                近所の犬友達と簡単につながれます！
              </p>
              <div className="grid md:grid-cols-3 gap-8 pt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-5xl mb-4">🏠</div>
                  <h3 className="text-2xl font-bold mb-3">近所だから会いやすい</h3>
                  <p className="text-blue-100">徒歩圏内で会えるから、気軽に散歩デートができます</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold mb-3">地域コミュニティ</h3>
                  <p className="text-blue-100">同じ地域だから話題も合いやすく、長く付き合える仲間に</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-5xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold mb-3">糸島の魅力を満喫</h3>
                  <p className="text-blue-100">海や自然豊かな糸島で、愛犬と一緒に素敵な時間を</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 利用者の声 */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                利用者の声
              </h2>
              <p className="text-xl text-gray-600">
                実際にマッチングした飼い主さんたちの体験談
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👩
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">30代女性・柴犬の飼い主</div>
                    <div className="text-gray-500">前原エリア</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  「近所で同じ柴犬を飼っている方とマッチングできました！今では毎週一緒に散歩しています。糸島エリア限定だから、気軽に会えるのが本当に助かります。」
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👨
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">40代男性・ゴールデンレトリバーの飼い主</div>
                    <div className="text-gray-500">二丈エリア</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  「大型犬同士で遊ばせたくて登録しました。近くに大型犬を飼っている方が意外と多くて驚き！今では定期的にドッグランで集まっています。」
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👩
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">20代女性・トイプードルの飼い主</div>
                    <div className="text-gray-500">志摩エリア</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  「引っ越してきたばかりで知り合いがいなかったのですが、わんつなぎで素敵な犬友達ができました！地域の情報も教えてもらえて感謝しています。」
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👴
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">60代男性・雑種の飼い主</div>
                    <div className="text-gray-500">波多江エリア</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  「退職後の趣味として犬の散歩を楽しんでいます。同世代で犬を飼っている方と出会えて、毎日の散歩が楽しみになりました。」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* こんな方におすすめ */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-16">
              こんな方におすすめ
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-8">
                <span className="text-4xl">✓</span>
                <p className="text-xl text-gray-800">糸島エリアで犬友達が欲しい</p>
              </div>
              <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-8">
                <span className="text-4xl">✓</span>
                <p className="text-xl text-gray-800">近所で一緒に散歩できる仲間を探している</p>
              </div>
              <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-8">
                <span className="text-4xl">✓</span>
                <p className="text-xl text-gray-800">同じ犬種の飼い主さんと情報交換したい</p>
              </div>
              <div className="flex items-start gap-4 bg-blue-50 rounded-2xl p-8">
                <span className="text-4xl">✓</span>
                <p className="text-xl text-gray-800">地域密着型のコミュニティに参加したい</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                よくある質問
              </h2>
            </div>

            <div className="space-y-6">
              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. 利用料金はかかりますか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 完全無料です。会員登録から全ての機能まで、費用は一切かかりません。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. どのエリアが対象ですか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 糸島市全域が対象です。前原、二丈、志摩など、糸島市内にお住まいの方であればどなたでもご利用いただけます。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. マッチングの仕組みは？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 気になる飼い主さんに「いいね」を送り、相手も「いいね」を返したらマッチング成立です。その後、メッセージでやり取りができます。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. 安全性は大丈夫？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 糸島エリア限定の地域密着型サービスなので、顔が見えるコミュニティです。プロフィールの公開範囲も自分で設定できます。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 最終CTA */}
        <section className="py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-6xl font-bold leading-tight">
              今すぐ始めて、<br />
              素敵な出会いを！
            </h2>
            <p className="text-2xl text-blue-100">
              登録は1分で完了。完全無料で使えます。
            </p>
            <a href="/register" className="inline-block px-16 py-6 bg-white text-primary text-2xl font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-2">
              無料で始める →
            </a>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">🐾 わんつなぎ</div>
          <p className="text-gray-400 mb-2">糸島エリア特化型 犬飼いマッチングサービス</p>
          <p className="text-gray-500 text-sm">© 2024 わんつなぎ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}