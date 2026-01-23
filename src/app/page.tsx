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
                無料登録
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
                愛犬を安心して<br />預けられる場所を
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                急な出張や旅行、用事がある時も安心。<br />
                信頼できる近所の犬好きさんに預けられる<br />
                福岡エリアの預かりマッチングサービス
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="/register" className="inline-block px-12 py-5 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  預ける・預かるを始める →
                </a>
                <a href="#how-it-works" className="inline-block px-12 py-5 border-2 border-primary text-primary text-xl font-bold rounded-2xl hover:bg-blue-50 transition-all">
                  サービスの流れ
                </a>
              </div>
              <div className="pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop" 
                  alt="飼い主と犬の温かい交流"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* わんつなぎの特徴 */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                わんつなぎの3つの特徴
              </h2>
              <p className="text-xl text-gray-600">
                安心して愛犬を預けられる理由
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl">🏠</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">近所で預けられる</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  福岡エリアの近所の犬好きさんに預けられるから、遠くまで送迎する必要なし。気軽に預けられます。
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl">💰</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">お手頃価格</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  プロのペットホテルより低価格。預かる側も副収入を得られる、お互いにメリットのある仕組みです。
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-5xl">🤝</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">顔が見える安心</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  プロフィールで相手のことがわかるから安心。事前にメッセージでやり取りして信頼関係を築けます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* サービスの流れ */}
        <section id="how-it-works" className="py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                サービスの流れ
              </h2>
              <p className="text-xl text-gray-600">
                簡単4ステップで預ける・預かるができる
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* 預ける側 */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">預ける側</h3>
                  <p className="text-gray-600">愛犬を預けたい方</p>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">無料登録</h4>
                    <p className="text-gray-600 leading-relaxed">メールアドレスで簡単登録。愛犬の情報（犬種、年齢、性格など）を入力します。</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">預かり手を探す</h4>
                    <p className="text-gray-600 leading-relaxed">近くの預かり可能な方を検索。プロフィールや口コミを確認して選べます。</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">依頼する</h4>
                    <p className="text-gray-600 leading-relaxed">メッセージで日時や条件を相談。お互いに納得したら予約確定です。</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">預ける</h4>
                    <p className="text-gray-600 leading-relaxed">当日、愛犬を預けて安心して外出。定期的に様子の報告も受け取れます。</p>
                  </div>
                </div>
              </div>

              {/* 預かる側 */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-2">預かる側</h3>
                  <p className="text-gray-600">愛犬を預かりたい方</p>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">無料登録</h4>
                    <p className="text-gray-600 leading-relaxed">メールアドレスで簡単登録。預かり可能な条件（犬種、サイズなど）を設定します。</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">依頼を受ける</h4>
                    <p className="text-gray-600 leading-relaxed">近くの飼い主さんから預かり依頼が届きます。プロフィールを確認して返信。</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">日時を調整</h4>
                    <p className="text-gray-600 leading-relaxed">メッセージで日時や預かり条件を相談。お互いに納得したら予約確定。</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">預かる</h4>
                    <p className="text-gray-600 leading-relaxed">当日、愛犬を預かってお世話。飼い主さんに様子を報告して安心してもらいます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* こんな時に便利 */}
        <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-12">
              こんな時に便利
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold mb-3">旅行に行く時</h3>
                <p className="text-blue-100">家族旅行や出張の際、信頼できる方に預けて安心して出かけられます</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-3">急な用事</h3>
                <p className="text-blue-100">入院や法事など、急に預ける必要がある時もすぐに対応してもらえます</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-3">仕事の都合</h3>
                <p className="text-blue-100">残業や出張が多い時期、定期的に預かってもらえる方を見つけられます</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-3">イベント参加</h3>
                <p className="text-blue-100">結婚式や同窓会など、ペット同伴できないイベントでも安心</p>
              </div>
            </div>
          </div>
        </section>

        {/* 利用者の声 */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                利用者の声
              </h2>
              <p className="text-xl text-gray-600">
                実際に利用された方の体験談
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👩
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">30代女性・トイプードルの飼い主</div>
                    <div className="text-gray-500 text-sm">福岡市中央区</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  「急な出張が入った時、近所で預かってくださる方が見つかって本当に助かりました。毎日写真を送ってくださって安心できました。」
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👨
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">40代男性・柴犬の飼い主</div>
                    <div className="text-gray-500 text-sm">福岡市西区</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  「ペットホテルより安く、しかも家庭的な環境で預かってもらえるのが嬉しいです。今では定期的にお願いしています。」
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👩
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">50代女性・預かる側</div>
                    <div className="text-gray-500 text-sm">福岡市早良区</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  「自分の愛犬が亡くなってから寂しかったのですが、預かりで犬と触れ合えるようになり、生活に張りが出ました。副収入にもなって一石二鳥です。」
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  ★★★★★
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                    👨
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">60代男性・預かる側</div>
                    <div className="text-gray-500 text-sm">福岡市南区</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  「退職後、犬好きを活かせる活動を探していました。飼い主さんに喜んでもらえるのが嬉しくて、やりがいを感じています。」
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  ★★★★★
                </div>
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
                  A. 会員登録は無料です。預かり料金は、預ける側と預かる側で直接相談して決めていただきます。プラットフォーム利用料として、成立した取引から手数料をいただく予定です。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. 対象エリアはどこですか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 現在は福岡市を中心とした福岡エリアでサービスを提供しています。順次、九州全域へエリアを拡大していく予定です。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. どんな犬でも預けられますか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 基本的には全ての犬種に対応していますが、預かる側が対応できる犬種やサイズを設定しています。大型犬や特殊な犬種の場合は、対応可能な預かり手を探すことをお勧めします。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. 安全性は大丈夫ですか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 全ての会員には本人確認を実施しています。また、預ける前に必ずメッセージでやり取りをして、信頼関係を築いてから預けることをお勧めします。万が一のトラブルに備えて、ペット保険の加入も推奨しています。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. 預かる側になりたいのですが、条件はありますか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 犬の飼育経験があり、愛情を持ってお世話できる方であれば誰でも登録できます。自宅で預かれる環境があることが望ましいですが、散歩や日中のみの預かりも可能です。
                </p>
              </details>

              <details className="bg-white rounded-2xl p-8 shadow-md cursor-pointer">
                <summary className="text-2xl font-bold text-gray-900 cursor-pointer">
                  Q. 料金の相場はどのくらいですか？
                </summary>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  A. 1日あたり2,000円〜5,000円程度が一般的です。犬のサイズ、預かる時間、お世話の内容によって変動します。ペットホテルよりもお手頃な価格設定が多いです。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 最終CTA */}
        <section className="py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-6xl font-bold leading-tight">
              愛犬を安心して<br />
              預けられる場所を<br />
              今すぐ見つけよう
            </h2>
            <p className="text-2xl text-blue-100">
              登録は1分で完了。福岡エリアで順次拡大中。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register" className="inline-block px-16 py-6 bg-white text-primary text-2xl font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-2xl transform hover:-translate-y-2">
                無料登録する →
              </a>
            </div>
            <p className="text-sm text-blue-200">
              ※現在、福岡市を中心にサービス提供中。順次エリア拡大予定。
            </p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">🐾 わんつなぎ</div>
          <p className="text-gray-400 mb-2">愛犬の預かり・預けるマッチングサービス</p>
          <p className="text-gray-500 text-sm mb-4">福岡エリアから順次拡大中</p>
          <p className="text-gray-500 text-sm">© 2024 わんつなぎ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}