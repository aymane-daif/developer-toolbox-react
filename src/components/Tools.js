import React from 'react';
import Tool from './Tool';
import listTools from '../utils/listTools';

function Tools() {
  const tools = listTools;
  return (
    <>
      {tools.map((t, idx) => {
        return <Tool key={idx} toolName={t.name} tools={t.options} />;
      })}
    </>
  );
}

export default Tools;
