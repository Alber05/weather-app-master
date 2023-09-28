export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'cloud-pattern': "url('./src/assets/Cloud-background.png')"
      },
      scrollGutter: {
        stable: {
          'scroll-gutter': 'stable'
        }
      }
    }
  },
  plugins: []
}
