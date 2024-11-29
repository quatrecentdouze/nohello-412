import React from 'react';

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900">
      {/* Grid pattern */}
      <div className="absolute h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOUI3REY5OyBzdG9wLW9wYWNpdHk6MC4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOUI3REY5OyBzdG9wLW9wYWNpdHk6MC4xIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2dyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Gradient blobs */}
      <div className="absolute left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[400px] opacity-20 blur-[100px]" style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0.1) 100%)'
        }}></div>
      </div>
      <div className="absolute right-1/3 bottom-1/4 translate-x-1/2 translate-y-1/2">
        <div className="h-[400px] w-[400px] opacity-20 blur-[100px]" style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(91,33,182,0.1) 100%)'
        }}></div>
      </div>

      {/* Light effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: 'rgba(255, 255, 255, 0.3)',
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}