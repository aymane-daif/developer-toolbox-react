import React, { useRef, useState, useEffect } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

function AppEditor({ language }) {
  return <Editor theme='vs-dark' defaultLanguage={language} />;
}

export default AppEditor;
