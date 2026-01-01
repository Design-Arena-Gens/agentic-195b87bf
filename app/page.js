'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2f4a 50%, #0f1f35 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        width: '800px',
        height: '1100px',
        position: 'relative',
        background: 'linear-gradient(165deg, #0d2847 0%, #1a3a5f 50%, #0a1f3d 100%)',
        boxShadow: '0 30px 90px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        borderRadius: '4px'
      }}>
        {/* Background Pattern Overlay */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15
        }}>
          {/* DNA Helix Pattern */}
          <path d="M 0,200 Q 100,150 200,200 T 400,200 T 600,200 T 800,200"
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
          <path d="M 0,250 Q 100,300 200,250 T 400,250 T 600,250 T 800,250"
                stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>

          {/* Connecting lines */}
          {[0, 100, 200, 300, 400, 500, 600, 700].map((x, i) => (
            <line key={i} x1={x} y1="200" x2={x} y2="250"
                  stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          ))}

          {/* Molecular Network */}
          <circle cx="150" cy="400" r="4" fill="rgba(200,220,255,0.4)"/>
          <circle cx="250" cy="350" r="4" fill="rgba(200,220,255,0.4)"/>
          <circle cx="350" cy="420" r="4" fill="rgba(200,220,255,0.4)"/>
          <circle cx="450" cy="380" r="4" fill="rgba(200,220,255,0.4)"/>
          <circle cx="550" cy="430" r="4" fill="rgba(200,220,255,0.4)"/>
          <circle cx="650" cy="370" r="4" fill="rgba(200,220,255,0.4)"/>

          <line x1="150" y1="400" x2="250" y2="350" stroke="rgba(200,220,255,0.3)" strokeWidth="1"/>
          <line x1="250" y1="350" x2="350" y2="420" stroke="rgba(200,220,255,0.3)" strokeWidth="1"/>
          <line x1="350" y1="420" x2="450" y2="380" stroke="rgba(200,220,255,0.3)" strokeWidth="1"/>
          <line x1="450" y1="380" x2="550" y2="430" stroke="rgba(200,220,255,0.3)" strokeWidth="1"/>
          <line x1="550" y1="430" x2="650" y2="370" stroke="rgba(200,220,255,0.3)" strokeWidth="1"/>

          {/* Hexagonal molecular structures */}
          <polygon points="100,800 130,815 130,845 100,860 70,845 70,815"
                   stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none"/>
          <polygon points="680,150 710,165 710,195 680,210 650,195 650,165"
                   stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none"/>
          <polygon points="720,900 750,915 750,945 720,960 690,945 690,915"
                   stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Gradient Overlays */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '400px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(100, 150, 255, 0.12), transparent 70%)'
        }}/>

        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '400px',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(50, 100, 200, 0.1), transparent 70%)'
        }}/>

        {/* Medical Icons/Symbols */}
        <div style={{
          position: 'absolute',
          top: '120px',
          right: '60px',
          opacity: 0.25
        }}>
          <svg width="180" height="180" viewBox="0 0 100 100">
            {/* Pill/Capsule */}
            <ellipse cx="50" cy="50" rx="15" ry="35"
                     fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
            <line x1="35" y1="50" x2="65" y2="50"
                  stroke="rgba(255,255,255,0.6)" strokeWidth="2"/>
          </svg>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: '50px',
          opacity: 0.2
        }}>
          <svg width="150" height="150" viewBox="0 0 100 100">
            {/* Stethoscope silhouette */}
            <circle cx="50" cy="80" r="12"
                    fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
            <path d="M 50,68 L 50,30 M 50,30 Q 30,30 25,40 M 50,30 Q 70,30 75,40"
                  stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none"/>
            <circle cx="25" cy="45" r="8"
                    fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
            <circle cx="75" cy="45" r="8"
                    fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
          </svg>
        </div>

        {/* Neuron pattern */}
        <div style={{
          position: 'absolute',
          top: '650px',
          right: '80px',
          opacity: 0.18
        }}>
          <svg width="200" height="200" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="12" fill="rgba(200,220,255,0.3)"/>
            <line x1="50" y1="38" x2="50" y2="10" stroke="rgba(200,220,255,0.4)" strokeWidth="1.5"/>
            <line x1="62" y1="50" x2="90" y2="50" stroke="rgba(200,220,255,0.4)" strokeWidth="1.5"/>
            <line x1="38" y1="50" x2="10" y2="50" stroke="rgba(200,220,255,0.4)" strokeWidth="1.5"/>
            <line x1="50" y1="62" x2="50" y2="90" stroke="rgba(200,220,255,0.4)" strokeWidth="1.5"/>
            <circle cx="50" cy="10" r="4" fill="rgba(200,220,255,0.3)"/>
            <circle cx="90" cy="50" r="4" fill="rgba(200,220,255,0.3)"/>
            <circle cx="10" cy="50" r="4" fill="rgba(200,220,255,0.3)"/>
            <circle cx="50" cy="90" r="4" fill="rgba(200,220,255,0.3)"/>
          </svg>
        </div>

        {/* Gold accent line */}
        <div style={{
          position: 'absolute',
          top: '340px',
          left: '0',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6) 50%, transparent)',
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)'
        }}/>

        {/* Main Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 60px'
        }}>
          {/* Top Section - Chemical Formula Accent */}
          <div style={{
            textAlign: 'center',
            opacity: 0.5
          }}>
            <div style={{
              fontSize: '14px',
              fontFamily: 'Georgia, serif',
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '3px',
              fontStyle: 'italic'
            }}>
              C₁₇H₁₉NO₃ • C₂₁H₂₃NO₅ • C₄₃H₅₈N₄O₁₂
            </div>
          </div>

          {/* Middle Section - Title */}
          <div style={{
            textAlign: 'center',
            marginTop: '-100px'
          }}>
            {/* Main Title */}
            <h1 style={{
              margin: '0',
              fontSize: '82px',
              fontWeight: '700',
              letterSpacing: '3px',
              background: 'linear-gradient(180deg, #ffffff 0%, #c8d8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)',
              lineHeight: '1.1',
              fontFamily: 'Georgia, serif'
            }}>
              PHARMACOLOGY
            </h1>

            <div style={{
              margin: '25px 0 35px 0',
              fontSize: '68px',
              fontWeight: '300',
              letterSpacing: '8px',
              color: '#e8f0ff',
              textShadow: '0 2px 15px rgba(200, 220, 255, 0.4)',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic'
            }}>
              CHRONICLES
            </div>

            {/* Decorative element */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              margin: '30px 0'
            }}>
              <div style={{
                width: '100px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8))'
              }}/>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3" fill="rgba(212, 175, 55, 0.8)"/>
              </svg>
              <div style={{
                width: '100px',
                height: '1px',
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.8), transparent)'
              }}/>
            </div>

            {/* Subtitle */}
            <div style={{
              fontSize: '18px',
              fontWeight: '400',
              letterSpacing: '2px',
              color: 'rgba(200, 220, 255, 0.9)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'Georgia, serif'
            }}>
              MBBS CLINICAL & MOLECULAR REFERENCE
              <br/>
              <span style={{
                fontSize: '16px',
                letterSpacing: '1.5px',
                color: 'rgba(180, 200, 235, 0.8)'
              }}>
                with In-Depth Knowledge
              </span>
            </div>
          </div>

          {/* Bottom Section - Author/Edition Info */}
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '2px',
              color: 'rgba(200, 220, 255, 0.7)',
              marginBottom: '15px',
              fontFamily: 'system-ui, sans-serif'
            }}>
              COMPREHENSIVE MEDICAL REFERENCE
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '20px'
            }}>
              <div style={{
                fontSize: '12px',
                letterSpacing: '1.5px',
                color: 'rgba(180, 200, 235, 0.6)',
                borderLeft: '2px solid rgba(212, 175, 55, 0.5)',
                paddingLeft: '12px'
              }}>
                HARDCOVER EDITION
              </div>
              <div style={{
                fontSize: '12px',
                letterSpacing: '1.5px',
                color: 'rgba(180, 200, 235, 0.6)',
                borderLeft: '2px solid rgba(212, 175, 55, 0.5)',
                paddingLeft: '12px'
              }}>
                CLINICAL EXCELLENCE
              </div>
            </div>
          </div>
        </div>

        {/* Spine shadow effect */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '20px',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent)',
          pointerEvents: 'none'
        }}/>
      </div>
    </div>
  );
}
