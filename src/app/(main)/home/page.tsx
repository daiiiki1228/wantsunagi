export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">飼い主一覧</h1>
        <p className="text-gray-600">糸島エリアの犬飼い仲間を見つけよう</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <div>
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary">
            <option value="">犬種で絞り込み</option>
            <option value="柴犬">柴犬</option>
            <option value="トイプードル">トイプードル</option>
            <option value="ゴールデンレトリバー">ゴールデンレトリバー</option>
          </select>
        </div>
        <div>
          <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary focus:border-primary">
            <option value="">サイズで絞り込み</option>
            <option value="小型犬">小型犬</option>
            <option value="中型犬">中型犬</option>
            <option value="大型犬">大型犬</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h3 className="font-semibold text-gray-900">田中 太郎</h3>
                <p className="text-sm text-gray-500">糸島市前原</p>
              </div>
            </div>
            <div className="mb-3">
              <span className="inline-block bg-primary-light text-primary text-xs px-2 py-1 rounded-full mr-2">
                柴犬
              </span>
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                中型犬
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              愛犬のポチと一緒に糸島の海岸を散歩するのが好きです。
            </p>
            <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover transition-colors">
              プロフィールを見る
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}