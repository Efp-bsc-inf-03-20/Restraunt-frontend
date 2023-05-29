<!-- Include the i18next library -->
<script src="https://cdn.jsdelivr.net/npm/i18next/dist/umd/i18next.min.js"></script>
<script>
  // Initialize i18next
  i18next.init({
    lng: navigator.language || navigator.userLanguage, // Default to the user's browser language
    resources: {
      en: {
        translation: {
          greeting: 'Hello',
          welcome: 'Welcome to my website',
          buttonText: 'Click me'
        }
      },
      'zh-CN': {
        translation: {
          greeting: '你好',
          welcome: '欢迎来到我的网站',
          buttonText: '点击我'
        }
      }
    }
  });
</script>
