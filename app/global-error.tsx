'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log critical error to error reporting service
    console.error('Critical application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{
          minHeight: '100vh',
          background: '#f5f0e9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            maxWidth: '600px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '96px',
              height: '96px',
              background: '#ff8359',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fcf6ed"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#073742',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}>
              Critical Error
            </h1>

            <p style={{
              fontSize: '1.125rem',
              color: '#073742',
              opacity: 0.8,
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Something went seriously wrong. We've been notified and are working to fix it.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={reset}
                style={{
                  background: '#073742',
                  color: '#fcf6ed',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#0a4f5f'}
                onMouseOut={(e) => e.currentTarget.style.background = '#073742'}
              >
                Try Again
              </button>

              <a
                href="/"
                style={{
                  background: '#ff8359',
                  color: '#fcf6ed',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#e6754f'}
                onMouseOut={(e) => e.currentTarget.style.background = '#ff8359'}
              >
                Go Home
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(7, 55, 66, 0.05)',
                borderRadius: '0.5rem',
                textAlign: 'left',
                fontSize: '0.875rem',
                fontFamily: 'monospace'
              }}>
                <strong>Error:</strong> {error.message}
                {error.digest && (
                  <div style={{ marginTop: '0.5rem', opacity: 0.6 }}>
                    <strong>Digest:</strong> {error.digest}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
