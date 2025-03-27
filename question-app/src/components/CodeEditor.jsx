// CodeEditor.jsx
import React, { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';

export default function CodeEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: 'console.log("Hello CodeMirror!");',
      extensions: [basicSetup, javascript()],
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    return () => {
      view.destroy(); // cleanup on unmount
    };
  }, []);

  return <div ref={editorRef} style={{
    border: '1px solid #ccc',
  }}/>;
}
