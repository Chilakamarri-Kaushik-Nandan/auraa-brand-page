import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const products = [
    { name: 'Auraa Glow Serum', price: '₹899', tag: 'BESTSELLER', emoji: '✨' },
    { name: 'Auraa Matte Lipstick', price: '₹499', tag: 'NEW', emoji: '💄' },
    { name: 'Auraa Hydra Cream', price: '₹699', tag: 'TRENDING', emoji: '🧴' },
  ]

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, background: '#fff7f0', color: '#222', minHeight: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 40px', background: 'white', position: 'sticky', top: 0, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', width: '100%', boxSizing: 'border-box' }}>
        <h2 style={{ margin: 0, letterSpacing: '4px' }}>AURAA<span style={{ color: '#e91e63' }}>.</span></h2>
        <div style={{ display: 'flex', gap: '18px', fontSize: '14px' }}>
          <span>Shop</span><span>About</span><span>Reviews</span>
        </div>
        <button style={{ background: '#111', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '20px', cursor: 'pointer' }}>Shop Now</button>
      </div>

      <div style={{ textAlign: 'center', padding: '60px 20px 40px', width: '100%', boxSizing: 'border-box' }}>
        <span style={{ background: '#ffe3ec', color: '#e91e63', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>NEW COLLECTION • 2026</span>
        <h1 style={{ fontSize: '52px', lineHeight: '1.1', margin: '20px 0 10px' }}>Glow Like You<br />Mean It.</h1>
        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto 25px', lineHeight: '1.6' }}>Clean, cruelty-free beauty made for Indian skin. No filters needed, just AURAA.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button style={{ background: '#e91e63', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Shop Bestsellers →</button>
          <button style={{ background: 'white', border: '1px solid #ddd', padding: '14px 28px', borderRadius: '30px', fontSize: '16px', cursor: 'pointer' }}>Watch Story</button>
        </div>
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>⭐ 4.9 | 12,000+ Happy Customers | Free Delivery over ₹999</p>
      </div>

      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '20px 40px', boxSizing: 'border-box' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px' }}>Bestsellers</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: 'white', width: '320px', flex: '1 1 300px', maxWidth: '380px', padding: '24px', borderRadius: '20px', textAlign: 'center', boxShadow: '0 5px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '50px' }}>{p.emoji}</div>
              <span style={{ fontSize: '11px', background: '#111', color: 'white', padding: '4px 10px', borderRadius: '10px' }}>{p.tag}</span>
              <h3 style={{ margin: '12px 0 5px' }}>{p.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#e91e63', margin: '5px 0' }}>{p.price}</p>
              <button style={{ width: '100%', background: '#111', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', marginTop: '10px' }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '1200px', margin: '50px auto', background: '#111', color: 'white', padding: '40px 30px', borderRadius: '20px', textAlign: 'center', boxSizing: 'border-box' }}>
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