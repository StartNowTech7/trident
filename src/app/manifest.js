export default function manifest() {
  return {
    name: 'Trident Aviation Services',
    short_name: 'Trident',
    description: 'Professional Aviation GSA & CSA Services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a365d',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.png',
        sizes: '192x192 512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Our Services',
        url: '/services',
        icons: [{ src: '/favicon.png', sizes: '192x192', type: 'image/png' }],
      },
      {
        name: 'Useful Tools',
        url: '/useful-tools',
        icons: [{ src: '/favicon.png', sizes: '192x192', type: 'image/png' }],
      },
    ],
  }
}
