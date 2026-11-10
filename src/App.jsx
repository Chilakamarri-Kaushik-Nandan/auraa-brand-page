import { useEffect, useState } from 'react'

const products = [
  { id: 1, name: 'Auraa Glow Serum', price: 899, tag: 'BESTSELLER', image: '/images/auraa-glow-serum.webp', desc: '24K Gold + Vitamin C', size: '30ml', skin: 'All Skin Types', ing: 'Vitamin C • 24K Gold • Hyaluronic Acid' },
  { id: 2, name: 'Auraa Matte Lipstick', price: 499, tag: 'NEW', image: '/images/auraa-matte-lipstick.webp', desc: 'Velvet Matte • 12H Stay', size: '4.2g', skin: 'All Skin Types', ing: 'Shea Butter • Vitamin E • Matte Pigments' },
  { id: 3, name: 'Auraa Hydra Cream', price: 699, tag: 'TRENDING', image: '/images/auraa-hydra-cream.webp', desc: 'Hyaluronic + Shea Butter', size: '50g', skin: 'Dry to Normal Skin', ing: 'Hyaluronic Acid • Shea Butter • Aloe Vera' },
  { id: 4, name: 'Auraa Vitamin C Face Wash', price: 349, tag: 'NEW', image: '/images/auraa-vitamin-c-face-wash.webp', desc: 'Brightening • Daily Glow', size: '100ml', skin: 'Oily to Normal Skin', ing: 'Vitamin C • Aloe • Niacinamide' },
  { id: 5, name: 'Auraa SPF 50 Sunscreen', price: 599, tag: 'MUST HAVE', image: '/images/auraa-spf50-sunscreen.webp', desc: 'No White Cast • Matte', size: '50ml', skin: 'All Skin Types', ing: 'SPF 50 PA+++ • Zinc • Vitamin E' },
  { id: 6, name: 'Auraa Kajal - Jet Black', price: 299, tag: 'BESTSELLER', image: '/images/auraa-kajal.webp', desc: 'Smudge Proof • 24H', size: '0.35g', skin: 'Sensitive Eyes Safe', ing: 'Castor Oil • Almond Oil • Black Pigment' }
]

const WHATSAPP_NUMBER = '919391326457'

function App() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('auraa-cart')
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    localStorage.setItem('auraa-cart', JSON.stringify(cart))
  }, [cart])

  // --- FIXED FUNCTIONS - THESE WERE MISSING ---
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id)
      if (found) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, change) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: item.qty + change } : item).filter((item) => item.qty > 0))
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  const joinCircle = () => {
    if (!email.includes('@')) { alert('Please enter a valid email'); return }
    setDone(true)
    const msg = `Hi AURAA! I joined Auraa Circle with email ${email}. Please send my 20% code.`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const checkoutOnWhatsApp = () => {
    if (!name || !phone || !address) { alert('Please fill Name, Phone and Address'); return }
    const itemsText = cart.map((i) => `${i.name} x ${i.qty} = ₹${i.price * i.qty}`).join('\n')
    const msg = `Hi AURAA! New Order:\n\n${itemsText}\n\nSubtotal: ₹${subtotal}\nDelivery: ${delivery === 0 ? 'FREE' : '₹' + delivery}\nTotal: ₹${total}\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  // --- CALCULATIONS - THESE WERE MISSING ---
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const delivery = subtotal === 0 || subtotal >= 799 ? 0 : 49
  const total = subtotal + delivery
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* HEADER */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 25px', position: 'sticky', top: 0, background: 'rgba(10,10,10,.9)', zIndex: 100, borderBottom: '1px solid rgba(212,175,55,.2)' }}>
        <h1 style={{ margin: 0, fontFamily: "'Playfair Display',serif", letterSpacing: 3, fontSize: 26 }}>AURAA <span style={{ color: '#d4af37', fontSize: 12 }}>✦</span></h1>
        <button onClick={() => setIsCartOpen(true)} style={{ background: '#d4af37', border: 0, padding: '10px 18px', borderRadius: 20, fontWeight: 'bold', cursor: 'pointer' }}>Cart 🛒 ({totalItems})</button>
      </header>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <p style={{ color: '#d4af37', letterSpacing: 3, fontSize: 12 }}>LUXURY MADE IN HYDERABAD</p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, margin: '10px 0' }}>Glow Like Gold.<br />Feel Like Auraa.</h2>
        <p style={{ color: '#ccc' }}>Skincare + Makeup • Clean • Vegan • For Indian Skin</p>
        <button onClick={scrollToShop} className="gold-btn" style={{ background: 'linear-gradient(90deg,#d4af37,#f5d76e)', color: '#000', border: 0, padding: '14px 30px', borderRadius: 25, fontWeight: 'bold', cursor: 'pointer', marginTop: 20 }}>Shop Now →</button>
      </section>

      {/* SHOP GRID - FIXED */}
      <section id="shop" style={{ padding: '20px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, textAlign: 'center' }}>Shop Bestsellers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20, marginTop: 25 }}>
          {products.map((p) => (
            <div key={p.id} style={{ background: 'rgba(255,255,255,.06)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(212,175,55,.2)' }}>
              <div style={{ position: 'relative' }}>
                <img src={p.image} alt={p.name} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x600/f2eee6/806b3d?text=AURAA' }} style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }} />
                <span style={{ position: 'absolute', top: 10, left: 10, background: '#d4af37', color: '#000', fontSize: 11, fontWeight: 'bold', padding: '4px 10px', borderRadius: 20 }}>{p.tag}</span>
              </div>
              <div style={{ padding: 16 }}>
                <h3 style={{ margin: '0 0 5px', fontSize: 18 }}>{p.name}</h3>
                <p style={{ margin: '0 0 5px', color: '#ccc', fontSize: 13 }}>{p.desc} • {p.size}</p>
                <p style={{ margin: '0 0 8px', color: '#aaa', fontSize: 12 }}>{p.ing}</p>
                <p style={{ margin: '0 0 10px', color: '#aaa', fontSize: 12 }}>Skin: {p.skin}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <b style={{ color: '#d4af37', fontSize: 18 }}>₹{p.price}</b>
                  <button onClick={() => addToCart(p)} style={{ background: '#d4af37', border: 0, padding: '10px 16px', borderRadius: 20, fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN CIRCLE */}
      <section style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28 }}>Join Auraa Circle - Get 20% OFF</h2>
        {!done ? (
          <div style={{ display: 'flex', gap: 10, marginTop: 22, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', flexWrap: 'wrap' }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" style={{ flex: 1, minWidth: 180, padding: 14, borderRadius: 12, border: '1px solid rgba(212,175,55,.3)', background: 'rgba(255,255,255,.08)', color: '#fff', outline: 'none' }} />
            <button onClick={joinCircle} style={{ background: 'linear-gradient(90deg,#d4af37,#f5d76e)', color: '#000', border: 0, padding: '14px 24px', borderRadius: 12, fontWeight: 'bold', cursor: 'pointer' }}>Join →</button>
          </div>
        ) : (
          <p style={{ background: '#1e7d32', padding: 12, borderRadius: 10, marginTop: 20 }}>🎉 Welcome! We opened WhatsApp - send that message to get your 20% code.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '30px 20px 25px', borderTop: '1px solid rgba(212,175,55,.2)' }}>
        <p style={{ color: '#ccc', fontSize: 13, lineHeight: 1.8, margin: 0 }}><b>Shipping:</b> Dispatched in 24-48 hrs • Delivery in 3-5 days • Free over ₹799 | <b>Returns:</b> 7-day return on unopened products<br /><b>Contact:</b> Hyderabad, Telangana • WhatsApp us for support</p>
        <p style={{ color: '#aaa', fontSize: 12, letterSpacing: 2, marginTop: 15 }}>© 2026 AURAA BEAUTY • LUXURY MADE IN HYDERABAD</p>
      </footer>

      {/* CART DRAWER */}
      {isCartOpen && (
        <>
          <button aria-label="Close cart overlay" onClick={() => setIsCartOpen(false)} style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,.6)', border: 0, zIndex: 1000, cursor: 'pointer' }} />
          <aside style={{ position: 'fixed', top: 0, right: 0, width: 380, maxWidth: '90vw', height: '100vh', background: '#111', borderLeft: '1px solid #d4af37', zIndex: 1001, padding: 25, overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontFamily: "'Playfair Display',serif", fontSize: 22 }}>Your Cart 🛒</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'transparent', border: '1px solid #555', color: '#fff', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer' }}>✕</button>
            </div>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', marginTop: 60, color: '#ccc' }}>
                <p style={{ fontSize: 50 }}>🛒</p><p>Your cart is empty</p>
                <button onClick={() => { setIsCartOpen(false); scrollToShop() }} style={{ background: '#d4af37', border: 0, padding: '12px 24px', borderRadius: 20, fontWeight: 'bold', cursor: 'pointer', marginTop: 10 }}>Shop Now</button>
              </div>
            ) : (
              <>
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 15 }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: 12, background: 'rgba(255,255,255,.06)', padding: 12, borderRadius: 12, alignItems: 'center' }}>
                      <img src={item.image} alt={item.name} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/120x120/f2eee6/806b3d?text=AURAA' }} style={{ width: 55, height: 55, objectFit: 'cover', borderRadius: 10, background: '#eee' }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: 14 }}>{item.name}</p>
                        <p style={{ margin: '4px 0', color: '#d4af37', fontSize: 14 }}>₹{item.price} x {item.qty} = ₹{item.price * item.qty}</p>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ background: '#333', color: '#fff', border: 0, width: 28, height: 28, borderRadius: 6, cursor: 'pointer' }}>-</button><span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ background: '#333', color: '#fff', border: 0, width: 28, height: 28, borderRadius: 6, cursor: 'pointer' }}>+</button>
                          <button onClick={() => removeItem(item.id)} style={{ background: 'transparent', border: 0, color: '#ff6b6b', cursor: 'pointer', marginLeft: 10, fontSize: 12 }}>Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 25, borderTop: '1px solid #333', paddingTop: 15, fontSize: 14, lineHeight: 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Subtotal</span><span>₹{subtotal}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Delivery</span><span>{delivery === 0 ? 'FREE 🎉' : `₹${delivery}`}</span></div>
                  {subtotal > 0 && subtotal < 799 && <p style={{ color: '#d4af37', fontSize: 12, margin: '5px 0' }}>Add ₹{799 - subtotal} more for FREE delivery!</p>}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: 16, marginTop: 8 }}><span>Total</span><span>₹{total}</span></div>
                </div>
                <div style={{ marginTop: 20, borderTop: '1px solid #333', paddingTop: 15 }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: 15 }}>Delivery Details - No Login Needed</p>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Full Name *" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #444', background: '#1e1e1e', color: '#fff', marginBottom: 10, outline: 'none' }} />
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number *" inputMode="tel" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #444', background: '#1e1e1e', color: '#fff', marginBottom: 10, outline: 'none' }} />
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Full Address with Pincode *" rows={3} style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #444', background: '#1e1e1e', color: '#fff', outline: 'none', resize: 'none' }} />
                </div>
                <button onClick={checkoutOnWhatsApp} style={{ width: '100%', background: '#25D366', color: '#fff', border: 0, padding: 16, borderRadius: 12, fontWeight: 'bold', fontSize: 16, cursor: 'pointer', marginTop: 20 }}>Checkout on WhatsApp 📲</button>
                <p style={{ textAlign: 'center', color: '#aaa', fontSize: 12, marginTop: 10 }}>COD Available • Pay on delivery • No account needed</p>
              </>
            )}
          </aside>
        </>
      )}

      {/* FLOATING CART BUTTON */}
      <button onClick={() => setIsCartOpen(true)} style={{ position: 'fixed', bottom: 20, right: 20, width: 60, height: 60, borderRadius: '50%', background: '#25D366', border: 0, fontSize: 28, cursor: 'pointer', boxShadow: '0 10px 25px rgba(37,211,102,.5)', zIndex: 999 }}>
        🛒
        {totalItems > 0 && (<span style={{ position: 'absolute', top: -5, right: -5, background: '#d4af37', color: '#000', fontSize: 12, fontWeight: 'bold', width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{totalItems}</span>)}
      </button>
    </div>
  )
}
export default App