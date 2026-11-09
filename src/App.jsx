import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const products = [
    { name: 'Auraa Glow Serum', price: '₹899', tag: 'BESTSELLER', emoji: '✨' },
    { name: 'Auraa Matte Lipstick', price: '₹499', tag: 'NEW', emoji: '💄' },
    { name: 'Auraa Hydra Cream', price: '₹699', tag: 'TRENDING', emoji: '🧴' },
    { name: 'Auraa Vitamin C Face Wash', price: '₹349', tag: 'NEW', emoji: '🧼' },
    { name: 'Auraa SPF 50 Sunscreen', price: '₹599', tag: 'MUST HAVE', emoji: '☀️' },
    { name: 'Auraa Kajal - Jet Black', price: '₹299', tag: 'BESTSELLER', emoji: '👁️' },
  ]

  const orderOnWhatsApp = (productName, price) => {
    const phone = "919391326457";
    const msg = `Hi AURAA! I want to order ${productName} - ${price}. Is it available?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, background: 'linear-gradient(180deg, #fff0f5 0%, #ffe4ec 30%, #f3e8ff 60%, #ffffff 100%)', color: '#222', minHeight: '100vh', width: '100%' }}>
      
      {/* HEADER - GLASS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, boxShadow: '0 2px 20px rgba(233,30,99,0.1)', width: '100%', boxSizing: 'border-box', zIndex: 100 }}>
        <h2 style={{ margin: 0, letterSpacing: '4px', fontSize: '26px' }}>AURAA<span style={{ color: '#e91e63' }}>.</span></h2>
        <div style={{ display: 'flex', gap: '18px', fontSize: '14px', fontWeight: '600' }}>
          <span>Shop</span><span>About</span><span>Reviews</span>
        </div>
        <button onClick={() => orderOnWhatsApp('AURAA Products', '')} style={{ background: '#111', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>Shop Now</button>
      </div>

      {/* HERO */}
      <div style={{ textAlign: 'center', padding: '70px 20px 40px', width: '100%', boxSizing: 'border-box' }}>
        <span style={{ background: 'white', color: '#e91e63', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(233,30,99,0.15)' }}>✨ NEW COLLECTION • 2026 ✨</span>
        <h1 style={{ fontSize: '62px', lineHeight: '1.1', margin: '20px 0 10px', background: 'linear-gradient(90deg, #e91e63, #9c27b0, #ff6b00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '900' }}>Glow Like You<br />Mean It.</h1>
        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto 25px', lineHeight: '1.6', fontSize: '17px' }}>Clean, cruelty-free beauty made for Indian skin. No filters needed, just AURAA.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={() => orderOnWhatsApp('Bestsellers', '')} style={{ background: 'linear-gradient(90deg, #e91e63, #9c27b0)', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 8px 20px rgba(233,30,99,0.3)' }}>Shop Bestsellers →</button>
          <button onClick={() => orderOnWhatsApp('AURAA Story', '')} style={{ background: 'white', border: '1px solid #ddd', padding: '14px 28px', borderRadius: '30px', fontSize: '16px', cursor: 'pointer', fontWeight: '600' }}>Chat on WhatsApp</button>
        </div>
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>⭐ 4.9 | 12,000+ Happy Customers | Free Delivery over ₹999</p>
      </div>

      {/* PRODUCTS */}
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 40px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>Bestsellers 🔥</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid white', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '24px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(233,30,99,0.15)' }}>
              <div style={{ fontSize: '50px' }}>{p.emoji}</div>
              <span style={{ fontSize: '11px', background: '#111', color: 'white', padding: '4px 10px', borderRadius: '10px' }}>{p.tag}</span>
              <h3 style={{ margin: '12px 0 5px' }}>{p.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#e91e63', margin: '5px 0' }}>{p.price}</p>
              <button onClick={() => orderOnWhatsApp(p.name, p.price)} style={{ width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold', fontSize: '15px' }}>Order on WhatsApp 📲</button>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div style={{ width: '100%', maxWidth: '1400px', margin: '40px auto', padding: '20px 40px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>What Our Customers Say ❤️</h2>
        <p style={{ textAlign: 'center', color: '#888' }}>Real reviews from real glow-getters</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.95)', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '24px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(156,39,176,0.12)' }}>
            <p style={{ color: '#ff9900', fontSize: '18px', margin: '0' }}>⭐⭐⭐⭐⭐</p>
            <p style={{ lineHeight: '1.6', margin: '12px 0' }}>"Glow Serum is magic! 1 week lo ne naa face chaala bright ayindhi. Ippudu makeup kuda veyatledu."</p>
            <p style={{ fontWeight: 'bold', margin: '0' }}>Priya Sharma</p>
            <p style={{ color: '#888', fontSize: '13px', margin: '2px 0 0' }}>Hyderabad • Verified Buyer</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.95)', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '24px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(156,39,176,0.12)' }}>
            <p style={{ color: '#ff9900', fontSize: '18px', margin: '0' }}>⭐⭐⭐⭐⭐</p>
            <p style={{ lineHeight: '1.6', margin: '12px 0' }}>"Lipstick color super undhi, full day untadhi. WhatsApp lo order petta, next day ne vachesindhi!"</p>
            <p style={{ fontWeight: 'bold', margin: '0' }}>Sneha Reddy</p>
            <p style={{ color: '#888', fontSize: '13px', margin: '2px 0 0' }}>Warangal • Verified Buyer</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.95)', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '24px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(156,39,176,0.12)' }}>
            <p style={{ color: '#ff9900', fontSize: '18px', margin: '0' }}>⭐⭐⭐⭐⭐</p>
            <p style={{ lineHeight: '1.6', margin: '12px 0' }}>"Hydra Cream naa dry skin ki best. Naa friends andariki AURAA ne suggest chesthunna."</p>
            <p style={{ fontWeight: 'bold', margin: '0' }}>Anitha K.</p>
            <p style={{ color: '#888', fontSize: '13px', margin: '2px 0 0' }}>Karimnagar • Verified Buyer</p>
          </div>
        </div>
      </div>

      {/* OFFER */}
      <div style={{ width: '100%', maxWidth: '1200px', margin: '50px auto', background: 'linear-gradient(135deg, #111 0%, #4a004e 100%)', color: 'white', padding: '40px 30px', borderRadius: '20px', textAlign: 'center', boxSizing: 'border-box', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
        <h2>Get 20% Off Your First Order</h2>
        <p style={{ color: '#bbb' }}>Join 10,000+ glow getters. No spam, only glow.</p>
        {!done ? (
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" style={{ flex: 1, padding: '13px', borderRadius: '10px', border: 'none', outline: 'none' }} />
            <button onClick={() => { if(email) setDone(true) }} style={{ background: '#e91e63', color: 'white', border: 'none', padding: '13px 20px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Join</button>
          </div>
        ) : (
          <p style={{ background: '#1e7d32', padding: '12px', borderRadius: '10px', marginTop: '20px' }}>🎉 Welcome to AURAA! Check your email for 20% code.</p>
        )}
      </div>

      <p style={{ textAlign: 'center', padding: '20px', color: '#999', fontSize: '13px' }}>© 2026 AURAA Beauty • Made with ❤️ in Hyderabad</p>
    </div>
  )
}

export default App