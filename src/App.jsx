import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [longUrl, setLongUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [urlHistory, setUrlHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Load URL history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('urlHistory')
    if (savedHistory) {
      setUrlHistory(JSON.parse(savedHistory))
    }
  }, [])

  // Save URL history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('urlHistory', JSON.stringify(urlHistory))
  }, [urlHistory])

  // Generate a random short code
  const generateShortCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // Validate URL format
  const isValidUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  // Handle URL shortening
  const handleShortenUrl = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Validate URL
    if (!longUrl.trim()) {
      setError('Please enter a URL')
      setIsLoading(false)
      return
    }

    // Add protocol if missing
    let urlToShorten = longUrl.trim()
    if (!urlToShorten.startsWith('http://') && !urlToShorten.startsWith('https://')) {
      urlToShorten = 'https://' + urlToShorten
    }

    if (!isValidUrl(urlToShorten)) {
      setError('Please enter a valid URL')
      setIsLoading(false)
      return
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Generate short URL
    const shortCode = generateShortCode()
    const newShortUrl = `${window.location.origin}/r/${shortCode}`

    // Add to history
    const newUrlEntry = {
      id: Date.now(),
      longUrl: urlToShorten,
      shortUrl: newShortUrl,
      shortCode: shortCode,
      createdAt: new Date().toISOString()
    }

    setUrlHistory(prev => [newUrlEntry, ...prev])
    setShortUrl(newShortUrl)
    setLongUrl('')
    setIsLoading(false)
  }

  // Copy short URL to clipboard
  const copyToClipboard = async (url) => {
    try {
      await navigator.clipboard.writeText(url)
      alert('URL copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="app">
      <div className="main-card">
        {/* Header Section */}
        <div className="header-section">
          <div className="brand">
            <div className="link-icon">🔗</div>
            <h1>LinkShort</h1>
          </div>
          <p className="tagline">Shorten your URLs instantly and beautifully</p>
        </div>

        {/* URL Input Section */}
        <div className="input-section">
          <form onSubmit={handleShortenUrl}>
            <input
              type="text"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter your long URL here (e.g., https://example.com/very/long/path)"
              className="url-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="shorten-btn"
              disabled={isLoading}
            >
              <span className="sparkle">✨</span>
              {isLoading ? 'Shortening...' : 'Shorten URL'}
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>

        {/* Result Section */}
        {shortUrl && (
          <div className="result-section">
            <h3>Your shortened URL:</h3>
            <div className="short-url-display">
              <input
                type="text"
                value={shortUrl}
                readOnly
                className="short-url-input"
              />
              <button 
                onClick={() => copyToClipboard(shortUrl)}
                className="copy-btn"
              >
                Copy
              </button>
            </div>
          </div>
        )}

        {/* Feature Highlights */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Instant URL shortening</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure</h3>
            <p>Safe and reliable links</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Ready</h3>
            <p>Works on all devices</p>
          </div>
        </div>

        {/* URL History */}
        {urlHistory.length > 0 && (
          <div className="history-section">
            <h3>Recent URLs</h3>
            <div className="url-list">
              {urlHistory.slice(0, 5).map((url) => (
                <div key={url.id} className="url-item">
                  <div className="url-info">
                    <div className="short-url">
                      <strong>Short:</strong> 
                      <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                        {url.shortUrl}
                      </a>
                    </div>
                    <div className="long-url">
                      <strong>Original:</strong> 
                      <a href={url.longUrl} target="_blank" rel="noopener noreferrer">
                        {url.longUrl}
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(url.shortUrl)}
                    className="action-btn"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
