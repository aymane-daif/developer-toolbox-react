import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Button, Stack } from '@chakra-ui/react';
import { MdClear, MdOutlineBrush } from 'react-icons/md';
import { RiFolderZipFill } from 'react-icons/ri';

function AppEditor({ language }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  const beautify = () => {
    let value = JSON.stringify(
      JSON.parse(editorRef.current.getValue()),
      null,
      4
    );
    console.log(value);
    editorRef.current.setValue(value);
  };
  const minify = () => {
    let value = JSON.stringify(
      JSON.parse(editorRef.current.getValue()),
      null,
      null
    );
    console.log(value);
    editorRef.current.setValue(value);
  };
  const clear = () => {
    editorRef.current.setValue('');
  };
  return (
    <section>
      <Stack direction='row' spacing={4} mb={6}>
        <Button
          onClick={minify}
          leftIcon={<RiFolderZipFill />}
          colorScheme='teal'
          variant='solid'>
          Minify
        </Button>
        <Button
          onClick={beautify}
          leftIcon={<MdOutlineBrush />}
          colorScheme='teal'
          variant='solid'>
          Beautify
        </Button>
        <Button
          onClick={clear}
          leftIcon={<MdClear />}
          colorScheme='red'
          variant='solid'>
          Clear
        </Button>
      </Stack>
      <Editor
        theme='vs-dark'
        defaultLanguage={language}
        onMount={handleEditorDidMount}
      />
    </section>
  );
}

export default AppEditor;
