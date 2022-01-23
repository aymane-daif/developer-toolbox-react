import React from 'react';
import Tool from './Tool';

function Tools() {
  const tools = [
    {
      name: 'Formatters',
      options: ['JSON Formatter', 'HTML Formatter', 'CSS Formatter'],
    },
    {
      name: 'Compression',
      options: ['Image Compression', 'Image Decompression'],
    },
    {
      name: 'Generators',
      options: ['Secret key Generator', 'Password Generator'],
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
