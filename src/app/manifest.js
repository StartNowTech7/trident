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
        src: '/icon.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  }
}
