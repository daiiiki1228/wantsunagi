export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">マイページ</h1>
        <p className="text-gray-600">プロフィール情報と参加予定イベント</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-900">田中 太郎</h2>
              <p className="text-gray-500">糸島市前原</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">自己紹介</h3>
                <p className="text-gray-700">
                  愛犬のポチと一緒に糸島の海岸を散歩するのが好きです。犬友達を増やしたいと思っています。
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">愛犬</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">ポチ</h4>
                      <p className="text-sm text-gray-500">柴犬 • 3歳</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="font-medium text-gray-500 w-16">サイズ:</span>
                      <span className="text-gray-700">中型犬</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium text-gray-500 w-16">性格:</span>
                      <span className="text-gray-700">人懐っこい、活発</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover transition-colors">
                プロフィール編集
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">参加予定イベント</h3>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-900">糸島海岸ドッグラン集合</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        参加予定
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div>📅 2024年12月15日 10:00-12:00</div>
                      <div>📍 糸島市志摩桜井海岸</div>
                      <div>👥 主催: 山田 花子</div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="text-primary text-sm hover:underline">
                        詳細を見る
                      </button>
                      <button className="text-red-600 text-sm hover:underline">
                        キャンセル
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 参加予定がない場合 */}
              {/* <div className="text-center py-8">
                <p className="text-gray-500 mb-4">参加予定のイベントはありません</p>
                <a
                  href="/events"
                  className="text-primary hover:underline"
                >
                  イベントを探す
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}