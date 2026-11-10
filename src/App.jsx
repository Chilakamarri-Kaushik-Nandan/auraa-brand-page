import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const products = [
    { name: 'Auraa Glow Serum', price: '₹899', tag: 'BESTSELLER', emoji: '✨', desc: '24K Gold + Vitamin C', size: '30ml', skin: 'All Skin Types', ing: 'Vitamin C • 24K Gold • Hyaluronic Acid' },
    { name: 'Auraa Matte Lipstick', price: '₹499', tag: 'NEW', emoji: '💄', desc: 'Velvet Matte • 12H Stay', size: '4.2g', skin: 'All Skin Types', ing: 'Shea Butter • Vitamin E • Matte Pigments' },
    { name: 'Auraa Hydra Cream', price: '₹699', tag: 'TRENDING', emoji: '🧴', desc: 'Hyaluronic + Shea Butter', size: '50g', skin: 'Dry to Normal Skin', ing: 'Hyaluronic Acid • Shea Butter • Aloe Vera' },
    { name: 'Auraa Vitamin C Face Wash', price: '₹349', tag: 'NEW', emoji: '🧼', desc: 'Brightening • Daily Glow', size: '100ml', skin: 'Oily to Normal Skin', ing: 'Vitamin C • Aloe • Niacinamide' },
    { name: 'Auraa SPF 50 Sunscreen', price: '₹599', tag: 'MUST HAVE', emoji: '☀️', desc: 'No White Cast • Matte', size: '50ml', skin: 'All Skin Types', ing: 'SPF 50 PA+++ • Zinc • Vitamin E' },
    { name: 'Auraa Kajal - Jet Black', price: '₹299', tag: 'BESTSELLER', emoji: '👁️', desc: 'Smudge Proof • 24H', size: '0.35g', skin: 'Sensitive Eyes Safe', ing: 'Castor Oil • Almond Oil • Black Pigment' },
  ]

  const orderOnWhatsApp = (productName, price) => {
    const phone = "919391326457";
    const msg = `Hi AURAA! I want to order ${productName} - ${price}. Is it available?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const joinCircle = () => {
    if(!email) return;
    setDone(true);
    const msg = `Hi AURAA! I joined Golden Circle with email ${email}. Please send my 20% welcome code.`;
    window.open(`https://wa.me/919391326457?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", margin: 0, background: '#0a0a0a', color: '#f5f5f5', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600&display=swap');
        @keyframes floatOrb { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px, -40px) scale(1.2); } }
        @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .luxury-text { background: linear-gradient(90deg, #d4af37, #fff8dc, #d4af37, #b8860b, #d4af37); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s linear infinite; }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; animation: floatOrb 8s ease-in-out infinite; }
        .product-card { animation: floatCard 4s ease-in-out infinite; transition: all 0.4s ease; }
        .product-card:hover { transform: scale(1.05) translateY(-10px) !important; box-shadow: 0 20px 50px rgba(212,175,55,0.4) !important; border-color: #d4af37 !important; }
        .gold-btn { transition: all 0.3s; }
        .gold-btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(212,175,55,0.5); }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        html { scroll-behavior: smooth; }
      `}</style>

      <div className="orb" style={{ width: '500px', height: '500px', background: '#d4af37', top: '-100px', left: '-100px' }}></div>
      <div className="orb" style={{ width: '400px', height: '400px', background: '#8b008b', top: '400px', right: '-100px', animationDelay: '2s' }}></div>
      <div className="orb" style={{ width: '300px', height: '300px', background: '#ff6b00', bottom: '200px', left: '30%', animationDelay: '4s' }}></div>

      {/* HEADER - NAV NOW WORKS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)', position: 'sticky', top: 0, borderBottom: '1px solid rgba(212,175,55,0.3)', width: '100%', boxSizing: 'border-box', zIndex: 100 }}>
        <h2 className="luxury-text" style={{ margin: 0, letterSpacing: '8px', fontSize: '28px', fontWeight: '900' }}>AURAA</h2>
        <div style={{ display: 'flex', gap: '25px', fontSize: '13px', letterSpacing: '2px', fontFamily: 'Inter, sans-serif' }}>
          <a href="#shop" style={{ color: '#ccc', textDecoration: 'none' }}>SHOP</a>
          <a href="#collection" style={{ color: '#ccc', textDecoration: 'none' }}>COLLECTION</a>
          <a href="#reviews" style={{ color: '#ccc', textDecoration: 'none' }}>REVIEWS</a>
        </div>
        <button onClick={() => orderOnWhatsApp('AURAA Products', '')} className="gold-btn" style={{ background: 'linear-gradient(90deg, #d4af37, #f5d76e)', color: '#000', border: 'none', padding: '11px 22px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>Shop Now →</button>
      </div>

      {/* MARQUEE - FIXED ₹799 */}
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(212,175,55,0.2)', padding: '10px 0', background: 'rgba(212,175,55,0.05)' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite', fontFamily: 'Inter, sans-serif', fontSize: '12px', letterSpacing: '3px', color: '#d4af37' }}>
          <span>✦ FREE DELIVERY OVER ₹799 &nbsp;&nbsp;&nbsp; ✦ NO PARABENS • NO SULPHATES &nbsp;&nbsp;&nbsp; ✦ MADE FOR INDIAN SKIN &nbsp;&nbsp;&nbsp; ✦ CASH ON DELIVERY AVAILABLE &nbsp;&nbsp;&nbsp; ✦ FREE DELIVERY OVER ₹799 &nbsp;&nbsp;&nbsp; ✦ NO PARABENS • NO SULPHATES &nbsp;&nbsp;&nbsp; ✦ MADE FOR INDIAN SKIN &nbsp;&nbsp;&nbsp; ✦ CASH ON DELIVERY AVAILABLE &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* HERO */}
      <div className="fade-up" style={{ textAlign: 'center', padding: '80px 20px 50px', position: 'relative', zIndex: 1 }}>
        <span style={{ border: '1px solid #d4af37', color: '#d4af37', padding: '8px 20px', borderRadius: '30px', fontSize: '11px', letterSpacing: '3px', fontFamily: 'Inter, sans-serif' }}>✦ LUXURY BEAUTY • EST. 2026 ✦</span>
        <h1 className="luxury-text" style={{ fontSize: '78px', lineHeight: '1.05', margin: '25px 0 15px', fontWeight: '900' }}>Glow Like You<br />Mean It.</h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.7', fontSize: '17px', fontFamily: 'Inter, sans-serif' }}>Where luxury meets Indian skin. 24K gold-infused, dermatologist approved, cruelty-free beauty. No filters needed, just AURAA.</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => orderOnWhatsApp('Bestsellers', '')} className="gold-btn" style={{ background: 'linear-gradient(90deg, #d4af37, #f5d76e)', color: '#000', border: 'none', padding: '16px 32px', borderRadius: '30px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Shop Bestsellers →</button>
          <button onClick={() => orderOnWhatsApp('AURAA Story', '')} style={{ background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '16px 32px', borderRadius: '30px', fontSize: '15px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Chat on WhatsApp</button>
        </div>
        <p style={{ marginTop: '25px', fontSize: '14px', color: '#ccc', fontFamily: 'Inter, sans-serif' }}>⭐⭐⭐⭐⭐ Loved by our early customers | Small-batch • Made in Hyderabad</p>
      </div>

      {/* PRODUCTS */}
      <div id="shop" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 40px 60px', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>
        <h2 id="collection" style={{ textAlign: 'center', fontSize: '38px', marginBottom: '5px' }}>The <span className="luxury-text">Collection</span></h2>
        <p style={{ textAlign: 'center', color: '#ccc', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Handcrafted luxury for every skin type • Free delivery over ₹799</p>
        <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
          {products.map((p, i) => (
            <div key={p.name} className="product-card" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(212,175,55,0.25)', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '28px', borderRadius: '24px', textAlign: 'center', animationDelay: `${i * 0.3}s` }}>
              <div style={{ fontSize: '55px' }}>{p.emoji}</div>
              <span style={{ fontSize: '10px', background: '#d4af37', color: '#000', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', letterSpacing: '1px', fontFamily: 'Inter, sans-serif' }}>{p.tag}</span>
              <h3 style={{ margin: '14px 0 5px', fontSize: '22px' }}>{p.name}</h3>
              <p style={{ color: '#ccc', fontSize: '13px', margin: '0 0 10px', fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
              <p style={{ color: '#d4af37', fontSize: '12px', margin: '8px 0', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                Size: {p.size} • {p.skin}<br/>
                {p.ing}
              </p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37', margin: '8px 0', fontFamily: 'Inter, sans-serif' }}>{p.price}</p>
              <button onClick={() => orderOnWhatsApp(p.name, p.price)} className="gold-btn" style={{ width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '13px', borderRadius: '12px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>Order on WhatsApp 📲</button>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#ccc', fontFamily: 'Inter, sans-serif', fontSize: '13px', marginTop: '30px' }}>
          💡 <b>Bundle Offer:</b> Glow Serum (₹899) + Kajal (₹299) = ₹1,198 • You get FREE delivery + save on shipping!
        </p>
      </div>

      {/* REVIEWS - HONEST LABEL */}
      <div id="reviews" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 40px', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>
        <h2 style={{ textAlign: 'center', fontSize: '34px' }}>Loved By <span className="luxury-text">Our Early Customers</span></h2>
        <p style={{ textAlign: 'center', color: '#ccc', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>Real feedback from our first orders in Hyderabad & Telangana</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '25px' }}>
          {[
            { name: 'Priya Sharma', city: 'Hyderabad', text: '"Glow Serum is pure luxury! My skin has never looked this radiant. Worth every rupee."' },
            { name: 'Sneha Reddy', city: 'Warangal', text: '"Packaging itself feels like a gift. Lipstick stays all day, ordered on WhatsApp in 2 mins!"' },
            { name: 'Anitha K.', city: 'Karimnagar', text: '"Finally a brand that understands Indian skin. My whole routine is AURAA now."' },
          ].map((r) => (
            <div key={r.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,175,55,0.2)', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '26px', borderRadius: '20px' }}>
              <p style={{ color: '#d4af37', fontSize: '16px', margin: '0', letterSpacing: '2px' }}>★★★★★</p>
              <p style={{ lineHeight: '1.7', margin: '14px 0', fontFamily: 'Inter, sans-serif', color: '#ddd', fontSize: '15px' }}>{r.text}</p>
              <p style={{ fontWeight: 'bold', margin: '0' }}>{r.name}</p>
              <p style={{ color: '#ccc', fontSize: '12px', margin: '3px 0 0', fontFamily: 'Inter, sans-serif' }}>{r.city} • Early Customer</p>
            </div>
          ))}
        </div>
      </div>

      {/* OFFER - NOW ACTUALLY WORKS VIA WHATSAPP */}
      <div style={{ width: '100%', maxWidth: '1100px', margin: '60px auto', background: 'linear-gradient(135deg, #1a1a1a, #2a1a00)', border: '1px solid rgba(212,175,55,0.4)', color: 'white', padding: '45px 30px', borderRadius: '24px', textAlign: 'center', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>
        <h2 className="luxury-text" style={{ fontSize: '32px', margin: '0' }}>Join The Golden Circle</h2>
        <p style={{ color: '#ccc', fontFamily: 'Inter, sans-serif' }}>Get 20% Off + Early Access to New Launches</p>
        {!done ? (
          <div style={{ display: 'flex', gap: '10px', marginTop: '22px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" style={{ flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(255,255,255,0.08)', color: 'white', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
            <button onClick={joinCircle} className="gold-btn" style={{ background: 'linear-gradient(90deg, #d4af37, #f5d76e)', color: '#000', border: 'none', padding: '14px 24px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Join →</button>
          </div>
        ) : (
          <p style={{ background: '#1e7d32', padding: '12px', borderRadius: '10px', marginTop: '20px', fontFamily: 'Inter, sans-serif' }}>🎉 Welcome! We opened WhatsApp - send that message to get your 20% code.</p>
        )}
      </div>

      {/* FOOTER - TRUST */}
      <div style={{ textAlign: 'center', padding: '30px 20px 25px', fontFamily: 'Inter, sans-serif', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <p style={{ color: '#ccc', fontSize: '13px', lineHeight: '1.8', margin: '0' }}>
          <b>Shipping:</b> Dispatched in 24-48 hrs • Delivery in 3-5 days • Free over ₹799 | <b>Returns:</b> 7-day return on unopened products<br/>
          <b>Contact:</b> Hyderabad, Telangana • WhatsApp us for support • No parabens, no sulphates. Not tested on animals.<br/>
          <a href="https://wa.me/919391326457?text=Hi%20AURAA!%20I%20want%20to%20know%20your%20Privacy%20Policy" style={{ color: '#d4af37', textDecoration: 'none' }}>Privacy Policy</a> • <a href="https://wa.me/919391326457?text=Hi%20AURAA!%20I%20want%20to%20know%20your%20Returns%20Policy" style={{ color: '#d4af37', textDecoration: 'none' }}>Returns & Refund</a> • <a href="https://wa.me/919391326457?text=Hi%20AURAA!%20Shipping%20Details" style={{ color: '#d4af37', textDecoration: 'none' }}>Shipping</a>
        </p>
        <p style={{ color: '#aaa', fontSize: '12px', letterSpacing: '2px', marginTop: '15px' }}>© 2026 AURAA BEAUTY • LUXURY MADE IN HYDERABAD</p>
      </div>

      <button onClick={() => orderOnWhatsApp('Hi AURAA! I want to shop', '')} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '50%', background: '#25D366', border: 'none', fontSize: '30px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(37,211,102,0.5)', zIndex: 999 }}>
        💬
      </button>
    </div>
  )
}

export default App