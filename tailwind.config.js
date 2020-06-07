module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    content: [
      './public/index.html',
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
    options: {
      whitelist: [
        'border-blue-400',
        'border-red-400',
        'border-orange-400',
        'border-yellow-400',
        'border-green-400',
        'border-teal-400',
        'border-indigo-400',
        'border-purple-400',
        'border-pink-400',
        'border-gray-400',
        'placeholder-blue-500',
        'placeholder-red-500',
        'placeholder-orange-500',
        'placeholder-yellow-500',
        'placeholder-green-500',
        'placeholder-teal-500',
        'placeholder-indigo-500',
        'placeholder-purple-500',
        'placeholder-pink-500',
        'placeholder-gray-500',
      ],
    },
  },
  // purge: [
  //   './public/index.html',
  //   './src/**/*.html',
  //   './src/**/*.jsx',
  //   './src/**/*.js',
  // ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
