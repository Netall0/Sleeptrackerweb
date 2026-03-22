import { Play, Moon, Zap, BarChart3, BookOpen, Lightbulb, Accessibility, Github, Video, Server, Database, Container } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1B35] text-white overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Floating Moon */}
        <div className="absolute top-20 right-10 md:right-32 animate-float">
          <div className="relative">
            <Moon className="w-32 h-32 md:w-48 md:h-48 text-[#38BDF8] opacity-20" fill="currentColor" />
            <div className="absolute inset-0 bg-[#38BDF8] blur-3xl opacity-30 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#38BDF8]/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-pulse"></div>
            <span className="text-sm text-[#2DD4BF]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>v1.0 • Open Source</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-[#38BDF8] to-[#2DD4BF] bg-clip-text text-transparent">
            SleepTrack
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Отслеживайте качество сна, синхронизируйтесь с устройствами и получайте персональные рекомендации для лучшего отдыха.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] rounded-xl overflow-hidden transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-2 justify-center">
                <Video className="w-5 h-5" />
                Смотреть демо
              </div>
            </button>
            
            <button className="px-8 py-4 bg-white/5 border border-[#38BDF8]/30 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-[#38BDF8]/50 transition-all flex items-center gap-2 justify-center">
              <Github className="w-5 h-5" />
              Открыть на GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-[#38BDF8]/10 to-[#2DD4BF]/10 rounded-2xl border border-[#38BDF8]/20 overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#38BDF8] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B35] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">Возможности</h2>
          <p className="text-gray-400 text-center mb-12">Всё необходимое для качественного сна</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Moon className="w-6 h-6" />}
              title="Отслеживание сна"
              description="Мониторинг циклов и качества сна в течение ночи"
              color="#38BDF8"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Синхронизация"
              description="Бесшовная интеграция с носимыми устройствами"
              color="#2DD4BF"
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Аналитика"
              description="Детальная статистика и тренды с течением времени"
              color="#38BDF8"
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Дневник сна"
              description="Отслеживание привычек и факторов влияющих на сон"
              color="#2DD4BF"
            />
            <FeatureCard
              icon={<Lightbulb className="w-6 h-6" />}
              title="Рекомендации"
              description="Персональные советы для улучшения качества сна"
              color="#38BDF8"
            />
            <FeatureCard
              icon={<Accessibility className="w-6 h-6" />}
              title="Доступность"
              description="Разработано для всех с инклюзивными функциями"
              color="#2DD4BF"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">Технологии</h2>
          <p className="text-gray-400 text-center mb-12">Построено на современном стеке</p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <TechPill text="Flutter" />
            <TechPill text="Go Backend" />
            <TechPill text="Docker" />
            <TechPill text="SQLite" />
            <TechPill text="Firebase" />
            <TechPill text="Health Connect" />
            <TechPill text="REST API" />
            <TechPill text="Nginx" />
            <TechPill text="VPS" />
          </div>
        </div>
      </section>

      {/* Backend Highlight */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#38BDF8]/5 to-[#2DD4BF]/5 border border-[#38BDF8]/20 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8] blur-[100px] opacity-10"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 rounded-xl">
                  <Server className="w-6 h-6 text-[#2DD4BF]" />
                </div>
                <h2 className="text-2xl md:text-3xl">Серверная инфраструктура</h2>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">
                Высокопроизводительный бэкенд на Go с контейнеризованным развертыванием
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <Database className="w-5 h-5 text-[#38BDF8] mb-2" />
                  <h4 className="mb-1">RESTful API</h4>
                  <p className="text-sm text-gray-400">Чистые эндпоинты для всех операций</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <Container className="w-5 h-5 text-[#2DD4BF] mb-2" />
                  <h4 className="mb-1">Docker Deploy</h4>
                  <p className="text-sm text-gray-400">Контейнеризация для масштабирования</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <Server className="w-5 h-5 text-[#38BDF8] mb-2" />
                  <h4 className="mb-1">Nginx + VPS</h4>
                  <p className="text-sm text-gray-400">Оптимизированная конфигурация</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Row */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <LinkCard
              icon={<Github className="w-8 h-8" />}
              title="Исходный код"
              description="Посмотреть на GitHub"
              href="#"
              color="#38BDF8"
            />
            <LinkCard
              icon={<Video className="w-8 h-8" />}
              title="Демо видео"
              description="Полный обзор приложения"
              href="#"
              color="#2DD4BF"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Moon className="w-6 h-6 text-[#38BDF8]" />
              <span className="text-xl">SleepTrack</span>
            </div>
            
            <p className="text-gray-400 text-sm">
              Создано с ❤️ на Flutter & Go • Open Source
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#38BDF8] transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#38BDF8]/30 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#38BDF8]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
      <div className="relative">
        <div className="inline-flex p-3 bg-gradient-to-br from-[#38BDF8]/10 to-[#2DD4BF]/10 border border-white/10 rounded-xl mb-4" style={{ boxShadow: `0 0 20px ${color}20` }}>
          {icon}
        </div>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function TechPill({ text }: { text: string }) {
  return (
    <div className="px-4 py-2 bg-white/5 border border-[#38BDF8]/20 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-[#2DD4BF]/40 transition-all" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
      <span className="text-sm text-gray-200">{text}</span>
    </div>
  );
}

function LinkCard({ icon, title, description, href, color }: { icon: React.ReactNode; title: string; description: string; href: string; color: string }) {
  return (
    <a href={href} className="group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#38BDF8]/40 transition-all overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at center, ${color}10, transparent)` }}></div>
      
      <div className="relative flex flex-col items-center text-center gap-4">
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl" style={{ color }}>
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
}