'use client'
import { useState, useEffect, useRef } from 'react'

const API_KEY = '6e7b4b8b0deeae662fc71f87903237a1a4e1d35a09e05491f56714c214c383fd'
const API_URL = 'https://ordersosmed.id/api/v2'

// Root SVG Background - Animated vines/roots
function RootBackground() {
  return (
    <div className="root-bg">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {/* Main root paths - organic curves traversing the screen */}
        <path d="M-50,450 C100,420 180,500 280,440 C380,380 420,300 520,320 C620,340 660,420 760,400 C860,380 900,300 1000,280 C1100,260 1180,340 1300,320 C1380,308 1420,290 1490,280" 
          fill="none" stroke="rgba(45,212,160,0.4)" strokeWidth="1.5"
          style={{strokeDasharray:3000, strokeDashoffset:3000, animation:'rootGrow 4s ease forwards'}}/>
        
        <path d="M-50,600 C80,580 140,640 220,620 C300,600 340,540 440,520 C540,500 580,560 680,540 C780,520 820,460 920,450 C1020,440 1100,500 1200,490 C1320,478 1390,460 1490,450"
          fill="none" stroke="rgba(45,212,160,0.25)" strokeWidth="1"
          style={{strokeDasharray:3000, strokeDashoffset:3000, animation:'rootGrow 4.5s 0.3s ease forwards'}}/>

        {/* Branch roots - smaller offshoots */}
        <path d="M280,440 C290,400 310,370 340,350" fill="none" stroke="rgba(45,212,160,0.3)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 2s ease forwards'}}/>
        <path d="M280,440 C270,480 260,510 240,530" fill="none" stroke="rgba(45,212,160,0.3)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 2.2s ease forwards'}}/>
        
        <path d="M520,320 C530,280 550,250 570,230" fill="none" stroke="rgba(45,212,160,0.25)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 1.8s ease forwards'}}/>
        <path d="M520,320 C510,360 500,390 490,410" fill="none" stroke="rgba(45,212,160,0.25)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 2.4s ease forwards'}}/>
        
        <path d="M760,400 C770,360 790,330 810,310" fill="none" stroke="rgba(45,212,160,0.3)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 2.6s ease forwards'}}/>
        <path d="M760,400 C750,440 740,470 720,490" fill="none" stroke="rgba(45,212,160,0.3)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 2.8s ease forwards'}}/>

        <path d="M1000,280 C1010,240 1030,210 1050,190" fill="none" stroke="rgba(45,212,160,0.25)" strokeWidth="0.8"
          style={{strokeDasharray:200, strokeDashoffset:200, animation:'rootGrow 1s 3s ease forwards'}}/>
        
        {/* Tiny root tendrils */}
        <path d="M340,350 C350,330 365,320 375,315" fill="none" stroke="rgba(45,212,160,0.2)" strokeWidth="0.5"
          style={{strokeDasharray:100, strokeDashoffset:100, animation:'rootGrow 0.6s 3s ease forwards'}}/>
        <path d="M570,230 C580,210 595,200 608,196" fill="none" stroke="rgba(45,212,160,0.2)" strokeWidth="0.5"
          style={{strokeDasharray:100, strokeDashoffset:100, animation:'rootGrow 0.6s 3.2s ease forwards'}}/>
        <path d="M810,310 C820,290 835,278 848,272" fill="none" stroke="rgba(45,212,160,0.2)" strokeWidth="0.5"
          style={{strokeDasharray:100, strokeDashoffset:100, animation:'rootGrow 0.6s 3.4s ease forwards'}}/>
        
        {/* Node dots at junctions */}
        {[
          [280,440],[520,320],[760,400],[1000,280],
          [340,350],[570,230],[810,310],[240,530],[490,410],[720,490]
        ].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(45,212,160,0.5)" filter="url(#glow)"
            style={{opacity:0, animation:`fadeIn 0.4s ${3 + i*0.15}s ease forwards`}}/>
        ))}

        {/* Second root network - upper area */}
        <path d="M-50,150 C100,130 200,180 320,160 C440,140 500,80 620,70 C740,60 800,120 920,110 C1040,100 1120,60 1240,50 C1360,40 1420,60 1490,55"
          fill="none" stroke="rgba(45,212,160,0.15)" strokeWidth="1"
          style={{strokeDasharray:3000, strokeDashoffset:3000, animation:'rootGrow 5s 0.5s ease forwards'}}/>
        
        <path d="M620,70 C630,30 650,10 670,-10" fill="none" stroke="rgba(45,212,160,0.15)" strokeWidth="0.7"
          style={{strokeDasharray:100, strokeDashoffset:100, animation:'rootGrow 0.8s 3s ease forwards'}}/>
        <path d="M920,110 C930,70 950,50 970,35" fill="none" stroke="rgba(45,212,160,0.15)" strokeWidth="0.7"
          style={{strokeDasharray:100, strokeDashoffset:100, animation:'rootGrow 0.8s 3.5s ease forwards'}}/>
      </svg>
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
      `}</style>
    </div>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span className="chevron">▾</span>
      </button>
      <div className="faq-a">
        <div className="faq-a-inner">{a}</div>
      </div>
    </div>
  )
}

export default function Home() {
  const [stats, setStats] = useState({ users: '73.229', orders: '769.463', services: '10.633' })

  const features = [
    { icon: '🏷️', title: 'Harga Reseller Terbaik', desc: 'Dapatkan harga grosir terbaik untuk semua layanan social media boosting di Indonesia.' },
    { icon: '⚡', title: 'Proses Otomatis', desc: 'Pesanan diproses secara instan dan otomatis. Tidak lebih dari 1 menit untuk mulai berjalan.' },
    { icon: '🔒', title: 'Tanpa Password', desc: 'Seluruh layanan kami bekerja tanpa memerlukan password akun social media Anda.' },
    { icon: '💬', title: 'Dukungan 24/7', desc: 'Tim support kami siap membantu Anda kapanpun mengalami kendala atau pertanyaan.' },
    { icon: '💳', title: 'Banyak Metode Bayar', desc: 'Transfer bank, e-wallet, QRIS, Alfamart, Indomaret—semua tersedia untuk kenyamanan Anda.' },
    { icon: '📊', title: 'Pantau Real-Time', desc: 'Lacak status pesanan secara real-time melalui dashboard yang bersih dan intuitif.' },
  ]

  const steps = [
    { num: '01', title: 'Buat Akun Gratis', desc: 'Daftar di situs kami secara gratis dalam hitungan detik. Simpan data login Anda dengan aman.' },
    { num: '02', title: 'Top Up Saldo', desc: 'Isi saldo menggunakan metode pembayaran yang paling nyaman untuk Anda.' },
    { num: '03', title: 'Pilih Layanan', desc: 'Pilih platform dan jenis layanan yang ingin Anda boost—followers, likes, views, dan lainnya.' },
    { num: '04', title: 'Pesanan Berjalan', desc: 'Sistem kami memproses pesanan secara otomatis. Pantau progress di Riwayat Pesanan.' },
  ]

  const services = [
    { emoji: '📸', name: 'Instagram' },
    { emoji: '▶️', name: 'YouTube' },
    { emoji: '🎵', name: 'TikTok' },
    { emoji: '📘', name: 'Facebook' },
    { emoji: '🐦', name: 'Twitter/X' },
    { emoji: '💼', name: 'LinkedIn' },
    { emoji: '📌', name: 'Pinterest' },
    { emoji: '🎮', name: 'Games' },
    { emoji: '💬', name: 'Telegram' },
    { emoji: '🎙️', name: 'Spotify' },
    { emoji: '💳', name: 'Prabayar' },
    { emoji: '📺', name: 'Streaming' },
  ]

  const faqs = [
    { q: 'Apa itu Booster Sosmed?', a: 'Booster Sosmed adalah platform SMM Panel terbaik dan termurah di Indonesia yang membantu Anda melakukan boosting pada semua akun social media secara instant dan aman.' },
    { q: 'Apa saja layanan yang tersedia?', a: 'Kami menyediakan peningkatan followers, likes, komentar, views, ulasan positif di Instagram, TikTok, YouTube, Facebook, Twitter, dan platform lainnya.' },
    { q: 'Apakah aman digunakan?', a: 'Sangat aman. Proses order tidak membutuhkan password akun social media Anda sama sekali. Data Anda terlindungi penuh.' },
    { q: 'Berapa lama pesanan diproses?', a: 'Sebagian besar pesanan mulai diproses dalam hitungan detik hingga beberapa menit setelah pembayaran dikonfirmasi.' },
    { q: 'Apa metode pembayaran yang diterima?', a: 'Kami menerima Transfer Bank (BCA, BNI, BRI, Mandiri), E-Wallet (OVO, GoPay, Dana, ShopeePay), QRIS, Alfamart, dan Indomaret.' },
  ]

  return (
    <>
      <RootBackground />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* NAVBAR */}
      <nav>
        <a href="#" className="nav-logo">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2 C8,2 5,5 5,9 C5,13 8,15 11,15 C14,15 17,13 17,9 C17,5 14,2 11,2Z" stroke="#2dd4a0" strokeWidth="1.5" fill="none"/>
            <path d="M11,15 L9,20 M11,15 L13,20 M11,15 L7,19 M11,15 L15,19" stroke="#2dd4a0" strokeWidth="1" strokeLinecap="round"/>
            <path d="M5,9 C3,8 1,9 2,11" stroke="#2dd4a0" strokeWidth="1" strokeLinecap="round" fill="none"/>
            <path d="M17,9 C19,8 21,9 20,11" stroke="#2dd4a0" strokeWidth="1" strokeLinecap="round" fill="none"/>
          </svg>
          Booster <span>Sosmed</span>
        </a>
        <ul className="nav-links">
          <li><a href="#layanan">Layanan</a></li>
          <li><a href="#cara-pakai">Cara Pakai</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="/auth/login" className="btn btn-ghost">Masuk</a></li>
          <li><a href="/auth/register" className="btn btn-primary">Daftar Gratis</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-badge">
          <span style={{width:6,height:6,background:'var(--accent)',borderRadius:'50%',display:'inline-block'}}/>
          SMM Panel #1 Indonesia
        </div>
        <h1>
          Boost Social Media<br/>
          Lebih <em>Cepat & Murah</em><br/>
          Dari Sebelumnya
        </h1>
        <p>
          Platform reseller SMM terpercaya dengan ribuan layanan untuk semua platform. 
          Proses otomatis, harga terbaik, tanpa ribet.
        </p>
        <div className="hero-btns">
          <a href="/auth/register" className="btn btn-primary" style={{padding:'14px 32px', fontSize:'1rem'}}>
            Mulai Sekarang — Gratis
          </a>
          <a href="#layanan" className="btn btn-ghost" style={{padding:'14px 28px', fontSize:'1rem'}}>
            Lihat Layanan
          </a>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-num">{stats.users}</span>
            <div className="stat-label">Pengguna Aktif</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">{stats.orders}</span>
            <div className="stat-label">Pesanan Dikerjakan</div>
          </div>
          <div className="stat-item">
            <span className="stat-num">{stats.services}</span>
            <div className="stat-label">Layanan Tersedia</div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section>
        <div className="section-label">Keunggulan Kami</div>
        <h2 className="section-title">Kenapa Pilih<br/>Booster Sosmed?</h2>
        <p className="section-sub">Kami hadir dengan komitmen memberikan yang terbaik untuk bisnis dan pertumbuhan social media Anda.</p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="layanan">
        <div className="section-label">Platform</div>
        <h2 className="section-title">Semua Platform<br/>Tersedia</h2>
        <p className="section-sub">Dari social media hingga game top-up, semua tersedia dalam satu panel.</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-pill" key={i}>
              <span className="emoji">{s.emoji}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO USE */}
      <section id="cara-pakai" style={{background:'linear-gradient(180deg, transparent, rgba(45,212,160,0.03), transparent)', borderRadius:24}}>
        <div className="section-label">Panduan</div>
        <h2 className="section-title">Cara Mulai<br/>Menggunakan</h2>
        <p className="section-sub">4 langkah mudah dan Anda siap meluncurkan bisnis SMM Anda.</p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Pertanyaan<br/>Umum</h2>
        <p className="section-sub">Jawaban untuk pertanyaan yang sering ditanyakan pengguna kami.</p>
        <div className="faq-list">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-box">
          <h2>Siap Mulai<br/>Boosting?</h2>
          <p>Bergabunglah dengan lebih dari 73.000 pengguna aktif yang sudah mempercayai Booster Sosmed untuk pertumbuhan social media mereka.</p>
          <a href="/auth/register" className="btn btn-primary" style={{padding:'16px 40px', fontSize:'1rem'}}>
            Daftar Sekarang — Gratis
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div>
          <strong style={{fontFamily:'var(--font-display)', color:'var(--text)'}}>Booster Sosmed</strong>
          <span style={{marginLeft:8}}>© 2025 PT Booster Sosmed Digital Solutions</span>
        </div>
        <div style={{display:'flex', gap:24}}>
          <a href="/sitemap/ketentuan">Ketentuan</a>
          <a href="/sitemap/privasi">Privasi</a>
          <a href="/sitemap/faq">FAQ</a>
          <a href="/sitemap/kontak">Kontak</a>
        </div>
      </footer>
    </>
  )
}
