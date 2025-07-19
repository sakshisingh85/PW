import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Redirect() {
  const { shortCode } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const redirectToOriginalUrl = () => {
      try {
        // Get URL history from localStorage
        const savedHistory = localStorage.getItem('urlHistory')
        if (!savedHistory) {
          setError('No URLs found')
          setIsLoading(false)
          return
        }

        const urlHistory = JSON.parse(savedHistory)
        const urlEntry = urlHistory.find(url => url.shortCode === shortCode)

        if (!urlEntry) {
          setError('Short URL not found')
          setIsLoading(false)
          return
        }

        // Redirect to the original URL
        window.location.href = urlEntry.longUrl
      } catch (err) {
        setError('An error occurred while redirecting')
        setIsLoading(false)
      }
    }

    redirectToOriginalUrl()
  }, [shortCode])

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderTop: '3px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <h2>Redirecting...</h2>
          <p>Please wait while we redirect you to your destination.</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>❌ Error</h2>
          <p>{error}</p>
          <a 
            href="/" 
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Go Back Home
          </a>
        </div>
      </div>
    )
  }

  return null
}

export default Redirect 