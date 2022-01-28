export default [
  {
    name: 'Formatters',
    options: [
      {
        name: 'JSON Formatter',
        route: '/jsonFormatter',
      },
      // {
      //   name: 'HTML Formatter',
      //   route: '/htmlFormatter',
      // },
      // {
      //   name: 'CSS Formatter',
      //   route: '/cssFormatter',
      // },
      // {
      //   name: 'Javascript Formatter',
      //   route: '/javascriptFormatter',
      // },
      // {
      //   name: 'XML Formatter',
      //   route: '/xmlFormatter',
      // },
    ],
  },
  // {
  //   name: 'Compression',
  //   options: [
  //     {
  //       name: 'Image Compression',
  //       route: '/imageCompressor',
  //     },
  //     {
  //       name: 'Image Decompression',
  //       route: '/imageDecompressor',
  //     },
  //   ],
  // },
  {
    name: 'Generators',
    options: [
      // {
      //   name: 'Secret key Generator',
      //   route: '/secretKeyGenerator',
      // },
      {
        name: 'Password Generator',
        route: '/passwordGenerator',
      },
    ],
  },
];
