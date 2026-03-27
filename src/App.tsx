import { Instagram, TrendingUp, Users, MessageSquare, Mail, ExternalLink, MapPin, AtSign, Globe, Target, Languages } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from './lib/utils'
import { useState } from 'react'

const translations = {
  pt: {
    mediaKit: "Media Kit",
    presenter: "Apresentadora, Tecnologia & PC Gaming",
    location: "São Paulo, Brasil",
    contact: "Entre em Contato",
    followers: "Seguidores",
    followersDesc: "Público engajado e qualificado",
    reach: "Alcance Mensal",
    reachDesc: "Impacto real em toda a rede",
    engagement: "Engajamento",
    engagementDesc: "Acima da média do mercado",
    totalFollowers: "Total Seguidores",
    aboutTitle: "A Apresentadora",
    aboutText: "Carol Weizenmann, conhecida como <0>Caroline</0>, é apresentadora e influenciadora digital com foco em tecnologia e hardware. Com mais de uma década de experiência no ecossistema tech, ela traduz complexidade técnica em conteúdo dinâmico e acessível.",
    differential: "Diferencial",
    differentialDesc: "Equilíbrio entre informação técnica profunda e entretenimento de alta qualidade.",
    experience: "Experiência",
    experienceDesc: "Anos de atuação em coberturas de eventos globais e reviews de hardware premium.",
    hardware: "Hardware",
    hardwareItems: "CPUs, GPUs, Placas-mãe",
    peripherals: "Periféricos",
    peripheralsItems: "Mouses, Teclados, Headsets",
    gaming: "Gaming",
    gamingItems: "Consoles e PC Gaming",
    events: "Eventos",
    eventsItems: "Cobertura BGS, Gamescom",
    audienceTitle: "Perfil da Audiência",
    gender: "Gênero",
    age: "Faixa Etária",
    locationTitle: "Localização",
    nationalFocus: "Brasil (Foco Nacional)",
    topCities: "Principais Cidades",
    nicheTitle: "Nicho Qualificado",
    nicheDesc: "Audiência altamente engajada em:",
    communityDesc: "Comunidade com baixa toxicidade e alto índice de perguntas técnicas/dúvidas de compra.",
    portfolioTitle: "Portfolio",
    portfolioDesc: "Momentos e produções recentes",
    videoHighlights: "Destaques de conteúdo",
    videoStats: "Performances e métricas de vídeo",
    brandsTitle: "Marcas que Confiam",
  },
  en: {
    mediaKit: "Media Kit",
    presenter: "Presenter, Technology & PC Gaming",
    location: "São Paulo, Brazil",
    contact: "Get in Touch",
    followers: "Followers",
    followersDesc: "Engaged and qualified audience",
    reach: "Monthly Reach",
    reachDesc: "Real impact across the network",
    engagement: "Engagement",
    engagementDesc: "Above market average",
    totalFollowers: "Total Followers",
    aboutTitle: "The Presenter",
    aboutText: "Carol Weizenmann, known as <0>Caroline</0>, is a presenter and digital influencer focused on technology and hardware. With over a decade of experience in the tech ecosystem, she translates technical complexity into dynamic and accessible content.",
    differential: "Differential",
    differentialDesc: "Balance between deep technical information and high-quality entertainment.",
    experience: "Experience",
    experienceDesc: "Years of experience in global event coverage and premium hardware reviews.",
    hardware: "Hardware",
    hardwareItems: "CPUs, GPUs, Motherboards",
    peripherals: "Peripherals",
    peripheralsItems: "Mice, Keyboards, Headsets",
    gaming: "Gaming",
    gamingItems: "Consoles and PC Gaming",
    events: "Events",
    eventsItems: "BGS, Gamescom Coverage",
    audienceTitle: "Audience Profile",
    gender: "Gender",
    age: "Age Range",
    locationTitle: "Location",
    nationalFocus: "Brazil (National Focus)",
    topCities: "Top Cities",
    nicheTitle: "Qualified Niche",
    nicheDesc: "Highly engaged audience in:",
    communityDesc: "Low toxicity community with a high rate of technical questions/purchase inquiries.",
    portfolioTitle: "Portfolio",
    portfolioDesc: "Recent moments and productions",
    videoHighlights: "Content Highlights",
    videoStats: "Video performance and metrics",
    brandsTitle: "Trusted Brands",
  }
}

function StatCard({ label, value, icon: Icon, description }: { label: string, value: string, icon: any, description?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl relative overflow-hidden group"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
          <Icon size={24} />
        </div>
        <h3 className="text-slate-400 font-medium">{label}</h3>
      </div>
      <div className="text-4xl font-bold mb-1 relative z-10">{value}</div>
      {description && <div className="text-sm text-slate-500 relative z-10">{description}</div>}
    </motion.div>
  )
}

function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')
  const t = translations[language]

  const images = [
    '/img/007.png',
    '/img/009.png',
    '/img/imgk.png',
    '/img/02.png',
    '/img/10.png',
    '/img/024.png',
  ]

  const videos = [
    {
      url: '/videos/01.mp4',
      poster: '/img/14.png',
      stats: { views: '566k', likes: '27.4k', comments: '4.6k', shares: '7.6k' }
    },
    {
      url: '/videos/02.mp4',
      poster: '/img/15.png',
      stats: { views: '454k', likes: '30.5k', comments: '1.3k', shares: '10k' }
    },
    {
      url: '/videos/03.mp4',
      poster: '/img/16.png',
      stats: { views: '291k', likes: '9k', comments: '385', shares: '8.8k' }
    }
  ]

  const logos = [
    '/img/amd-logo.png',
    '/img/kabum-logo.png',
    '/img/tplink.png',
    '/img/repuplic.png',
    '/img/recoverti.png',
    '/img/tudosobresites.png',
    '/img/balis.png',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30 relative overflow-hidden">
      {/* Language Switcher - Now scrolls with the content */}
      <div className="absolute top-8 right-8 z-50 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage('pt')}
          className="relative w-10 h-7 transition-all"
        >
          <img 
            src={language === 'pt' ? "/img/br.png" : "/img/brn.png"} 
            alt="Português" 
            className={cn(
              "w-full h-full object-contain transition-all duration-300",
              language === 'pt' ? "opacity-100 scale-110 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "opacity-50 grayscale hover:grayscale-0 hover:opacity-80"
            )}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage('en')}
          className="relative w-10 h-7 transition-all"
        >
          <img 
            src={language === 'en' ? "/img/eu.png" : "/img/eun.png"} 
            alt="English" 
            className={cn(
              "w-full h-full object-contain transition-all duration-300",
              language === 'en' ? "opacity-100 scale-110 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" : "opacity-50 grayscale hover:grayscale-0 hover:opacity-80"
            )}
          />
        </motion.button>
      </div>

      {/* Background Global Effects */}
      <div className="fixed inset-0 tech-grid z-0 opacity-40" />
      <div className="fixed top-0 -left-1/4 w-1/2 h-1/2 glow-primary z-0 opacity-30" />
      <div className="fixed bottom-0 -right-1/4 w-1/2 h-1/2 glow-secondary z-0 opacity-30" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{t.mediaKit}</span>
                      </div>

                      <div className="space-y-2">
                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none">
                          <span className="block text-white">CAROLINE</span>
                          <span className="block bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                            WEIZENMANN
                          </span>
                        </h1>
                        <p className="text-2xl lg:text-3xl font-medium text-slate-300">
                          {t.presenter}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={20} className="text-[#8b5cf6]" />
                          <span className="text-lg font-medium">{t.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AtSign size={20} className="text-[#06b6d4]" />
                          <span className="text-lg font-medium flex items-center gap-2">
                            @carol.weizenmann
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 font-bold uppercase tracking-tighter text-[#06b6d4]">instagram</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <a 
                          href="https://wa.link/zzf0w8" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all active:scale-95 group"
                        >
                          <Mail size={22} className="group-hover:scale-110 transition-transform" />
                          {t.contact}
                        </a>
                      </div>
            </motion.div>

            {/* Right Content - Photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Profile Photo with Circle Border */}
              <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
                {/* Dotted Border Circle */}
                <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-slate-700/50 animate-[spin_60s_linear_infinite]" />
                
                {/* Main Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-slate-900 shadow-2xl relative z-10">
                  <img 
                    src="/img/capa.png" 
                    alt="Dyuky" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Followers Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-10 right-0 lg:right-[-20px] z-20 glass-card px-8 py-4 rounded-2xl shadow-2xl border border-white/10"
                >
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{t.totalFollowers}</p>
                  <p className="text-3xl font-black text-white">+16.5K</p>
                </motion.div>

                {/* Decorative Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8b5cf6]/20 blur-[100px] rounded-full -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              label={t.followers} 
              value="16.5k" 
              icon={Users} 
              description={t.followersDesc}
            />
            <StatCard 
              label={t.reach} 
              value="738.9k" 
              icon={TrendingUp} 
              description={t.reachDesc}
            />
            <StatCard 
              label={t.engagement} 
              value="2.1%" 
              icon={MessageSquare} 
              description={t.engagementDesc}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-y border-slate-900/50 relative z-10 bg-slate-950/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 italic tracking-tighter uppercase text-[#8b5cf6]">{t.aboutTitle}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {language === 'pt' ? (
                  <>
                    Carol Weizenmann, conhecida como <span className="text-white font-bold">Caroline</span>, é apresentadora e influenciadora digital com foco em tecnologia e hardware. Com mais de uma década de experiência no ecossistema tech, ela traduz complexidade técnica em conteúdo dinâmico e acessível.
                  </>
                ) : (
                  <>
                    Carol Weizenmann, known as <span className="text-white font-bold">Caroline</span>, is a presenter and digital influencer focused on technology and hardware. With over a decade of experience in the tech ecosystem, she translates technical complexity into dynamic and accessible content.
                  </>
                )}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary rounded-full" />
                    {t.differential}
                  </h4>
                  <p className="text-slate-500 text-sm">{t.differentialDesc}</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary rounded-full" />
                    {t.experience}
                  </h4>
                  <p className="text-slate-500 text-sm">{t.experienceDesc}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800/50 relative">
                  <img src="/img/01.png" alt="Caroline Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              <div className="absolute -bottom-6 -right-6 bg-[#8b5cf6] text-white p-8 rounded-2xl font-black text-2xl rotate-3 shadow-2xl group-hover:rotate-0 transition-transform duration-500">
                TECH <br /> LOVER
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: t.hardware, items: t.hardwareItems },
              { title: t.peripherals, items: t.peripheralsItems },
              { title: t.gaming, items: t.gamingItems },
              { title: t.events, items: t.eventsItems }
            ].map((cat, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl group hover:border-[#8b5cf6]/30 transition-colors">
                <h4 className="text-white font-bold mb-2 group-hover:text-[#8b5cf6] transition-colors">{cat.title}</h4>
                <p className="text-slate-500 text-sm">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 relative z-10 bg-slate-950/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Perfil da Audiência */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Users className="text-[#8b5cf6]" size={28} />
                <h2 className="text-3xl font-bold text-white">{t.audienceTitle}</h2>
              </div>

              <div className="glass-card p-8 rounded-3xl space-y-8">
                {/* Gênero */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">{t.gender}</h3>
                  <div className="relative h-8 w-full bg-slate-900 rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-[#06b6d4] flex items-center justify-center text-[10px] font-black text-white" 
                      style={{ width: '94.3%' }}
                    >
                      94.3% H
                    </div>
                    <div 
                      className="h-full bg-[#ec4899] flex items-center justify-center text-[10px] font-black text-white" 
                      style={{ width: '5.7%' }}
                    >
                      5.7% M
                    </div>
                  </div>
                </div>

                {/* Faixa Etária */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">{t.age}</h3>
                  <div className="space-y-4">
                    {[
                      { range: '25-34', percentage: 48.7 },
                      { range: '35-44', percentage: 24.5 },
                      { range: '18-24', percentage: 17.2 },
                      { range: '45-54', percentage: 5.9 }
                    ].map((item) => (
                      <div key={item.range} className="space-y-2">
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-slate-300">{item.range}</span>
                          <span className="text-[#8b5cf6]">{item.percentage}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Localização e Nicho */}
            <div className="space-y-12">
              {/* Localização */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="text-[#06b6d4]" size={28} />
                  <h2 className="text-3xl font-bold text-white">{t.locationTitle}</h2>
                </div>
                <div className="glass-card p-8 rounded-3xl space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#8b5cf6]/10 flex items-center justify-center border border-[#8b5cf6]/20">
                      <Globe size={32} className="text-[#8b5cf6]" />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-white">94.1%</p>
                      <p className="text-slate-400 font-medium">{t.nationalFocus}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-800">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">{t.topCities}</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        { city: 'São Paulo', val: '9.2%' },
                        { city: 'Rio de Janeiro', val: '2.5%' },
                        { city: 'Curitiba', val: '2.4%' },
                        { city: 'Belo Horizonte', val: '1.8%' }
                      ].map((c) => (
                        <div key={c.city} className="flex justify-between items-center">
                          <span className="text-sm text-slate-300">{c.city}</span>
                          <span className="text-sm font-bold text-[#06b6d4]">{c.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Nicho Qualificado */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="text-[#8b5cf6]" size={28} />
                  <h2 className="text-3xl font-bold text-white">{t.nicheTitle}</h2>
                </div>
                <div className="glass-card p-8 rounded-3xl space-y-6">
                  <p className="text-slate-300 font-medium">{t.nicheDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Hardware', 'PC Gaming', 'Periféricos', 'Setup', 'Reviews', 'Unboxing'].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-xs font-bold text-[#8b5cf6]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-6">
                    {t.communityDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2 uppercase tracking-tighter">{t.portfolioTitle}</h2>
              <p className="text-slate-500">{t.portfolioDesc}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-900 group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-[#8b5cf6]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Section */}
      <section className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2 uppercase tracking-tighter">{t.videoHighlights}</h2>
            <p className="text-slate-500">{t.videoStats}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden group border border-slate-800/50"
              >
                <div className="aspect-[9/16] relative bg-slate-900">
                  <video 
                    src={video.url} 
                    className="w-full h-full object-cover"
                    controls
                    poster={video.poster}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-slate-400">
                      <TrendingUp size={16} className="text-[#06b6d4]" />
                      <span className="text-sm font-bold text-white">{video.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users size={16} className="text-[#8b5cf6]" />
                      <span className="text-sm font-bold text-white">{video.stats.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MessageSquare size={16} className="text-[#06b6d4]" />
                      <span className="text-sm font-bold text-white">{video.stats.comments}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <ExternalLink size={16} className="text-[#8b5cf6]" />
                      <span className="text-sm font-bold text-white">{video.stats.shares}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-slate-900/20 relative z-10 backdrop-blur-sm border-y border-slate-900/50 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">{t.brandsTitle}</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-scroll flex whitespace-nowrap gap-20 items-center py-4">
            {[...logos, ...logos].map((logo, i) => (
              <img 
                key={i} 
                src={logo} 
                alt="Partner Logo" 
                className="h-8 md:h-12 object-contain opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">
            {language === 'pt' ? 'VAMOS CRIAR ALGO JUNTO?' : "LET'S CREATE SOMETHING TOGETHER?"}
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
            {language === 'pt' 
              ? 'Disponível para parcerias, reviews, eventos e produções de conteúdo personalizadas.'
              : 'Available for partnerships, reviews, events and custom content productions.'}
          </p>
          <a 
            href="https://wa.link/zzf0w8" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#8b5cf6] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-[#06b6d4] transition-all active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            {t.contact}
            <ExternalLink size={24} />
          </a>
          <div className="mt-24 flex flex-col md:flex-row justify-between items-center border-t border-slate-900 pt-8 text-slate-600 text-sm gap-4">
            <p>© 2026 Dyuky. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/carol.weizenmann/" className="hover:text-[#8b5cf6] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#8b5cf6] transition-colors">YouTube</a>
              <a href="#" className="hover:text-[#8b5cf6] transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
