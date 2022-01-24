import React from 'react';
import Tool from './Tool';

function Tools() {
  const tools = [
    {
      name: 'Formatters',
      options: [
        {
          name: 'JSON Formatter',
          route: '/jsonFormatter',
        },
        {
          name: 'HTML Formatter',
          route: '/htmlFormatter',
        },
        {
          name: 'CSS Formatter',
          route: '/cssFormatter',
        },
      ],
    },
    {
      name: 'Compression',
      options: [
        {
          name: 'Image Compression',
          route: '/imageCompressor',
        },
        {
          name: 'Image Decompression',
          route: '/imageDecompressor',
        },
      ],
    },
    {
      name: 'Generators',
      options: [
        {
          name: 'Secret key Generator',
          route: '/secretKeyGenerator',
        },
        {
          name: 'Password Generator',
          route: '/passwordGenerator',
        },
      ],
    },
  ];
  return (
    <>
      {tools.map((t, idx) => {
        return <Tool key={idx} toolName={t.name} tools={t.options} />;
      })}
    </>
  );
}

export default Tools;
