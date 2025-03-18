import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';
export const dynamic = 'force-static';

// Image metadata
export const alt = 'Belu & Amadeo - Invitación de Boda';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '20px',
          position: 'relative',
        }}
      >
        {/* Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 30,
              color: '#463e3b',
              fontFamily: 'sans-serif',
              fontWeight: 300,
              marginBottom: 20,
            }}
          >
            ¡NOS CASAMOS!
          </div>
          <div
            style={{
              fontSize: 60,
              color: '#463e3b',
              fontFamily: 'sans-serif',
              fontWeight: 600,
              letterSpacing: '0.1em',
              marginBottom: 30,
            }}
          >
            BELU & AMADEO
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#463e3b',
              fontFamily: 'sans-serif',
              marginBottom: 10,
            }}
          >
            23 de Noviembre de 2025
          </div>
          <div
            style={{
              color: '#a3b993',
              fontSize: 24,
              fontFamily: 'sans-serif',
              padding: '8px 30px',
              borderRadius: 4,
              border: '2px solid #a3b993',
              marginTop: 30,
            }}
          >
            ¡AGENDALAFECHA!
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
