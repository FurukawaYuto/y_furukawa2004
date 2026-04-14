import { Hero } from '../components/Hero';
import { VisitorCounter } from '../components/VisitorCounter';
import { 
  profileData, 
  organizations, 
  activities, 
  recommendations, 
  hobbies,
  snsLinks 
} from '../data/profile';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* ヒーローとカウンター */}
        <div>
          <Hero />
          <VisitorCounter />
        </div>

        {/* メインコンテンツ（各セクション） */}
        <div className="space-y-10">
          {[profileData, organizations, activities, recommendations, hobbies].map((section) => (
            <section key={section.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-3 mb-6">
                {section.title}
              </h2>

              {/* カード形式にするセクション（基本情報以外すべて） */}
              {section.title !== "基本情報" ? (
                <div className="grid grid-cols-1 gap-4">
                  {section.items.map((item) => {
                    const CardContent = (
                      <div className={`p-5 rounded-lg border border-slate-200 shadow-sm transition-all h-full
                        ${item.url 
                          ? "bg-white hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5" 
                          : "bg-slate-50"
                        }`}>
                        <h3 className={`font-bold ${item.url ? "text-blue-600" : "text-slate-800"}`}>
                          {item.value}
                          {item.url && <span className="ml-2 text-xs font-normal text-slate-400">↗</span>}
                        </h3>
                        {item.subValue && (
                          <p className="text-slate-500 text-sm mt-2 ml-5 leading-relaxed whitespace-pre-wrap">
                            {item.subValue}
                          </p>
                        )}
                      </div>
                    );

                    return (
                      <div key={item.id}>
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                            {CardContent}
                          </a>
                        ) : (
                          CardContent
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* 基本情報（リスト形式） */
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-baseline border-b border-slate-50 pb-2 last:border-0">
                      <div className="flex gap-4">
                        {item.label && <span className="text-slate-400 text-sm w-16 shrink-0 font-medium">{item.label}</span>}
                        <span className="text-slate-700 whitespace-pre-wrap">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* SNSセクション */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-3 mb-8">各種SNS</h2>
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            {snsLinks.map((sns) => (
              <a key={sns.id} href={sns.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="p-4 bg-slate-50 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                  {sns.icon}
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-blue-600">
                  {sns.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className="bg-blue-600 p-8 rounded-xl text-white text-center shadow-lg shadow-blue-200">
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="mb-6 opacity-90">お仕事のご依頼等はメールにてお願いいたします。</p>
          <a 
            href="mailto:furuyu.2004@icloud.com" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-all transform hover:scale-105 active:scale-95"
          >
            メールを送る
          </a>
        </section>

      </div>
    </main>
  );
}