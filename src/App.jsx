import { useState, useEffect } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('auraa-cart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    localStorage.setItem('auraa-cart', JSON.stringify(cart))
  }, [cart])


const products = [
  {
    id: 1,
    name: 'Auraa Glow Serum',
    price: 899,
    tag: 'BESTSELLER',
    image: '/images/auraa-glow-serum.webp',
    desc: '24K Gold + Vitamin C',
    size: '30ml',
    skin: 'All Skin Types',
    ing: 'Vitamin C • 24K Gold • Hyaluronic Acid'
  },
  {
    id: 2,
    name: 'Auraa Matte Lipstick',
    price: 499,
    tag: 'NEW',
    image: '/images/auraa-matte-lipstick.webp',
    desc: 'Velvet Matte • 12H Stay',
    size: '4.2g',
    skin: 'All Skin Types',
    ing: 'Shea Butter • Vitamin E • Matte Pigments'
  },
  {
    id: 3,
    name: 'Auraa Hydra Cream',
    price: 699,
    tag: 'TRENDING',
    image: '/images/auraa-hydra-cream.webp',
    desc: 'Hyaluronic + Shea Butter',
    size: '50g',
    skin: 'Dry to Normal Skin',
    ing: 'Hyaluronic Acid • Shea Butter • Aloe Vera'
  },
  {
    id: 4,
    name: 'Auraa Vitamin C Face Wash',
    price: 349,
    tag: 'NEW',
    image: '/images/auraa-vitamin-c-face-wash.webp',
    desc: 'Brightening • Daily Glow',
    size: '100ml',
    skin: 'Oily to Normal Skin',
    ing: 'Vitamin C • Aloe • Niacinamide'
  },
  {
    id: 5,
    name: 'Auraa SPF 50 Sunscreen',
    price: 599,
    tag: 'MUST HAVE',
    image: '/images/auraa-spf50-sunscreen.webp',
    desc: 'No White Cast • Matte',
    size: '50ml',
    skin: 'All Skin Types',
    ing: 'SPF 50 PA+++ • Zinc • Vitamin E'
  },
  {
    id: 6,
    name: 'Auraa Kajal - Jet Black',
    price: 299,
    tag: 'BESTSELLER',
    image: '/images/auraa-kajal.webp',
    desc: 'Smudge Proof • 24H',
    size: '0.35g',
    skin: 'Sensitive Eyes Safe',
    ing: 'Castor Oil • Almond Oil • Black Pigment'
  }
];

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id)
      if (found) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      return [...prev, { ...product, qty: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQty = (id, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + change
        if (newQty <= 0) return null
        return { ...item, qty: newQty }
      }
      return item
    }).filter(Boolean))
  }

  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id))

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const delivery = subtotal >= 799 || subtotal === 0 ? 0 : 49
  const total = subtotal + delivery

  const checkoutOnWhatsApp = () => {
    if (!name || !phone || !address) {
      alert('Please fill Name, Phone and Address to checkout')
      return
    }
    const phoneNum = "919391326457"
    let msg = `Hi AURAA! New Order:\n\n`
    cart.forEach(item => { msg += `• ${item.name} x ${item.qty} - ₹${item.price * item.qty}\n` })
    msg += `\nSubtotal: ₹${subtotal}\nDelivery: ${delivery === 0 ? 'FREE' : '₹' + delivery}\nTotal: ₹${total}\nPayment: COD\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nPlease confirm my order.`
    window.open(`https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const orderSingleOnWhatsApp = (product) => {
    const msg = `Hi AURAA! I want to order ${product.name} - ₹${product.price}. Is it available?`
    window.open(`https://wa.me/919391326457?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const joinCircle = () => {
    if(!email) return
    setDone(true)
    const msg = `Hi AURAA! I joined Golden Circle with email ${email}. Please send my 20% welcome code.`
    window.open(`https://wa.me/919391326457?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", margin: 0, background: '#0a0a0a', color: '#f5f5f5', minHeight: '100vh', width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600&display=swap');
        @keyframes floatOrb { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px, -40px) scale(1.2); } }
        @keyframes floatCard { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .luxury-text { background: linear-gradient(90deg, #d4af37, #fff8dc, #d4af37, #b8860b, #d4af37); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 4s linear infinite; }
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; animation: floatOrb 8s ease-in-out infinite; }
        .product-card { animation: floatCard 4s ease-in-out infinite; transition: all 0.4s ease; }
        .product-card:hover { transform: scale(1.05) translateY(-10px) !important; box-shadow: 0 20px 50px rgba(212,175,55,0.4) !important; border-color: #d4af37 !important; }
        .product-card img { transition: transform 0.4s; }
        .product-card:hover img { transform: scale(1.08); }
        .gold-btn { transition: all 0.3s; }
        .gold-btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(212,175,55,0.5); }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        html { scroll-behavior: smooth; }
        .cart-drawer { animation: slideIn 0.3s ease; }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px !important; line-height: 1.1 !important; }
          .header-links { display: none !important; }
        }
      `}</style>

      <div className="orb" style={{ width: '500px', height: '500px', background: '#d4af37', top: '-100px', left: '-100px' }}></div>
      <div className="orb" style={{ width: '400px', height: '400px', background: '#8b008b', top: '400px', right: '-100px', animationDelay: '2s' }}></div>
      <div className="orb" style={{ width: '300px', height: '300px', background: '#ff6b00', bottom: '200px', left: '30%', animationDelay: '4s' }}></div>

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)', position: 'sticky', top: 0, borderBottom: '1px solid rgba(212,175,55,0.3)', width: '100%', boxSizing: 'border-box', zIndex: 100 }}>
        <h2 className="luxury-text" style={{ margin: 0, letterSpacing: '8px', fontSize: '28px', fontWeight: '900' }}>AURAA</h2>
        <div className="header-links" style={{ display: 'flex', gap: '25px', fontSize: '13px', letterSpacing: '2px', fontFamily: 'Inter, sans-serif' }}>
          <a href="#shop" style={{ color: '#ccc', textDecoration: 'none' }}>SHOP</a>
          <a href="#collection" style={{ color: '#ccc', textDecoration: 'none' }}>COLLECTION</a>
          <a href="#reviews" style={{ color: '#ccc', textDecoration: 'none' }}>REVIEWS</a>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button onClick={() => setIsCartOpen(true)} style={{ background: '#fff', color: '#000', border: 'none', padding: '11px 18px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>
            🛒 Cart ({totalItems}) {totalItems > 0 && `• ₹${subtotal}`}
          </button>
          <button onClick={() => orderSingleOnWhatsApp({ name: 'AURAA Products', price: '' })} className="gold-btn" style={{ background: 'linear-gradient(90deg, #d4af37, #f5d76e)', color: '#000', border: 'none', padding: '11px 22px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>Shop Now →</button>
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(212,175,55,0.2)', padding: '10px 0', background: 'rgba(212,175,55,0.05)' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 20s linear infinite', fontFamily: 'Inter, sans-serif', fontSize: '12px', letterSpacing: '3px', color: '#d4af37' }}>
          <span>✦ FREE DELIVERY OVER ₹799 &nbsp;&nbsp;&nbsp; ✦ NO PARABENS • NO SULPHATES &nbsp;&nbsp;&nbsp; ✦ MADE FOR INDIAN SKIN &nbsp;&nbsp;&nbsp; ✦ CASH ON DELIVERY AVAILABLE &nbsp;&nbsp;&nbsp; ✦ FREE DELIVERY OVER ₹799 &nbsp;&nbsp;&nbsp; ✦ NO PARABENS • NO SULPHATES &nbsp;&nbsp;&nbsp; ✦ MADE FOR INDIAN SKIN &nbsp;&nbsp;&nbsp; ✦ CASH ON DELIVERY AVAILABLE &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* HERO */}
      <div className="fade-up" style={{ textAlign: 'center', padding: '80px 20px 50px', position: 'relative', zIndex: 1 }}>
        <span style={{ border: '1px solid #d4af37', color: '#d4af37', padding: '8px 20px', borderRadius: '30px', fontSize: '11px', letterSpacing: '3px', fontFamily: 'Inter, sans-serif' }}>✦ LUXURY BEAUTY • EST. 2026 ✦</span>
        <h1 className="hero-title luxury-text" style={{ fontSize: '78px', lineHeight: '1.05', margin: '25px 0 15px', fontWeight: '900' }}>Glow Like You<br />Mean It.</h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 30px', lineHeight: '1.7', fontSize: '17px', fontFamily: 'Inter, sans-serif' }}>Where luxury meets Indian skin. 24K gold-infused, dermatologist approved, cruelty-free beauty. No filters needed, just AURAA.</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })} className="gold-btn" style={{ background: 'linear-gradient(90deg, #d4af37, #f5d76e)', color: '#000', border: 'none', padding: '16px 32px', borderRadius: '30px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>Shop Bestsellers →</button>
          <button onClick={() => setIsCartOpen(true)} style={{ background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '16px 32px', borderRadius: '30px', fontSize: '15px', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>View Cart ({totalItems})</button>
        </div>
        <p style={{ marginTop: '25px', fontSize: '14px', color: '#ccc', fontFamily: 'Inter, sans-serif' }}>⭐⭐⭐⭐⭐ Loved by our early customers | Small-batch • Made in Hyderabad</p>
      </div>

      {/* PRODUCTS WITH REAL PHOTOS */}
      <div id="shop" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 40px 60px', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>
        <h2 id="collection" style={{ textAlign: 'center', fontSize: '38px', marginBottom: '5px' }}>The <span className="luxury-text">Collection</span></h2>
        <p style={{ textAlign: 'center', color: '#ccc', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>Handcrafted luxury for every skin type • Free delivery over ₹799</p>
        <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '30px' }}>
          {products.map((p, i) => (
            <div key={p.id} className="product-card" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(212,175,55,0.25)', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '18px 18px 28px', borderRadius: '24px', textAlign: 'center', animationDelay: `${i * 0.3}s`, overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block', background: '#222' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=AURAA'; }} />
                <span style={{ position: 'absolute', top: '12px', left: '12px', fontSize: '10px', background: '#d4af37', color: '#000', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', letterSpacing: '1px', fontFamily: 'Inter, sans-serif' }}>{p.tag}</span>
              </div>
              <h3 style={{ margin: '14px 0 5px', fontSize: '22px' }}>{p.name}</h3>
              <p style={{ color: '#ccc', fontSize: '13px', margin: '0 0 10px', fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
              <p style={{ color: '#d4af37', fontSize: '12px', margin: '8px 0', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>Size: {p.size} • {p.skin}<br/>{p.ing}</p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37', margin: '8px 0', fontFamily: 'Inter, sans-serif' }}>₹{p.price}</p>
              <button onClick={() => addToCart(p)} className="gold-btn" style={{ width: '100%', background: '#fff', color: '#000', border: 'none', padding: '13px', borderRadius: '12px', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>Add to Cart 🛒</button>
              <button onClick={() => orderSingleOnWhatsApp(p)} style={{ width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '13px', borderRadius: '12px', cursor: 'pointer', marginTop: '8px', fontWeight: 'bold', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>Buy Now on WhatsApp</button>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div id="reviews" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 40px', boxSizing: 'border-box', position: 'relative', zIndex: 1 }}>
        <h2 style={{ textAlign: 'center', fontSize: '34px' }}>Loved By <span className="luxury-text">Our Early Customers</span></h2>
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

      {/* OFFER */}
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

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '30px 20px 25px', fontFamily: 'Inter, sans-serif', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <p style={{ color: '#ccc', fontSize: '13px', lineHeight: '1.8', margin: '0' }}>
          <b>Shipping:</b> Dispatched in 24-48 hrs • Delivery in 3-5 days • Free over ₹799 | <b>Returns:</b> 7-day return on unopened products<br/>
          <b>Contact:</b> Hyderabad, Telangana • WhatsApp us for support
        </p>
        <p style={{ color: '#aaa', fontSize: '12px', letterSpacing: '2px', marginTop: '15px' }}>© 2026 AURAA BEAUTY • LUXURY MADE IN HYDERABAD</p>
      </div>

      {/* CART DRAWER WITH PHOTOS + ADDRESS FORM */}
      {isCartOpen && (
        <>
          <div onClick={() => setIsCartOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000 }}></div>
          <div className="cart-drawer" style={{ position: 'fixed', top: 0, right: 0, width: '380px', maxWidth: '90vw', height: '100vh', background: '#111', borderLeft: '1px solid #d4af37', zIndex: 1001, padding: '25px', boxSizing: 'border-box', overflowY: 'auto', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: '22px' }}>Your Cart 🛒</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'transparent', border: '1px solid #555', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer' }}>✕</button>
            </div>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', marginTop: '60px', color: '#ccc' }}>
                <p style={{ fontSize: '50px' }}>🛒</p>
                <p>Your cart is empty</p>
                <button onClick={() => { setIsCartOpen(false); document.getElementById('shop').scrollIntoView({ behavior: 'smooth' }) }} style={{ background: '#d4af37', border: 'none', padding: '12px 24px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Shop Now</button>
              </div>
            ) : (
              <>
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '12px', alignItems: 'center' }}>
                      <img src={item.image} alt={item.name} style={{ width: '55px', height: '55px', objectFit: 'cover', borderRadius: '10px', background: '#222' }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>{item.name}</p>
                        <p style={{ margin: '4px 0', color: '#d4af37', fontSize: '14px' }}>₹{item.price} x {item.qty} = ₹{item.price * item.qty}</p>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '6px' }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ background: '#333', color: '#fff', border: 'none', width: '28px', height: '28px', borderRadius: '6px', cursor: 'pointer' }}>-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ background: '#333', color: '#fff', border: 'none', width: '28px', height: '28px', borderRadius: '6px', cursor: 'pointer' }}>+</button>
                          <button onClick={() => removeItem(item.id)} style={{ background: 'transparent', border: 'none', color: '#ff6b6b', cursor: 'pointer', marginLeft: '10px', fontSize: '12px' }}>Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '25px', borderTop: '1px solid #333', paddingTop: '15px', fontSize: '14px', lineHeight: '2' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Subtotal</span><span>₹{subtotal}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Delivery</span><span>{delivery === 0 ? 'FREE 🎉' : `₹${delivery}`}</span></div>
                  {subtotal > 0 && subtotal < 799 && <p style={{ color: '#d4af37', fontSize: '12px', margin: '5px 0' }}>Add ₹{799 - subtotal} more for FREE delivery!</p>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '16px', marginTop: '8px' }}><span>Total</span><span>₹{total}</span></div>
                </div>
                <div style={{ marginTop: '20px', borderTop: '1px solid #333', paddingTop: '15px' }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '15px' }}>Delivery Details - No Login Needed</p>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Full Name *" style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '10px', border: '1px solid #444', background: '#1e1e1e', color: '#fff', marginBottom: '10px', outline: 'none' }} />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number *" style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '10px', border: '1px solid #444', background: '#1e1e1e', color: '#fff', marginBottom: '10px', outline: 'none' }} />
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Full Address with Pincode *" rows={3} style={{ width: '100%', boxSizing: 'border-box', padding: '12px', borderRadius: '10px', border: '1px solid #444', background: '#1e1e1e', color: '#fff', outline: 'none', resize: 'none' }} />
                </div>
                <button onClick={checkoutOnWhatsApp} style={{ width: '100%', background: '#25D366', color: '#fff', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}>Checkout on WhatsApp 📲</button>
                <p style={{ textAlign: 'center', color: '#aaa', fontSize: '12px', marginTop: '10px' }}>COD Available • Pay on delivery • No account needed</p>
              </>
            )}
          </div>
        </>
      )}

      <button onClick={() => setIsCartOpen(true)} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px', borderRadius: '50%', background: '#25D366', border: 'none', fontSize: '28px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(37,211,102,0.5)', zIndex: 999 }}>
        🛒{totalItems > 0 && <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: '#d4af37', color: '#000', fontSize: '12px', fontWeight: 'bold', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{totalItems}</span>}
      </button>
    </div>
  )
}

export default App