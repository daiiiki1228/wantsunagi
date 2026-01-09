export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">イベント一覧</h1>
          <p className="text-gray-600">糸島エリアの犬関連イベント</p>
        </div>
        <a
          href="/events/create"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors"
        >
          イベント作成
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900">糸島海岸ドッグラン集合</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                参加可能
              </span>
            </div>
            
            <div className="space-y-2 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">日時:</span>
                <span>2024年12月15日 10:00-12:00</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">場所:</span>
                <span>糸島市志摩桜井海岸</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">定員:</span>
                <span>8名 (残り5名)</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">主催:</span>
                <span>山田 花子</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">
              糸島の美しい海岸で愛犬と一緒に遊びませんか？小型犬から大型犬まで大歓迎です。
            </p>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover transition-colors">
                参加申込
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                詳細を見る
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}