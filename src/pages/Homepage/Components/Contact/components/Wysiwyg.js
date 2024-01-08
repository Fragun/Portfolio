import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import styles from "./Wysiwyg.module.scss";

export default function Wysiwyg({ setEditorContent }) {
  const [editorState, setEditorState] =  useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);

    // Mettez à jour le contenu de l'éditeur dans le composant parent
    setEditorContent(newEditorState.getCurrentContent().getPlainText());
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName={styles.toolbarClass}
        wrapperClassName={styles.wrapperClass}
        editorClassName={styles.editorClass}
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
}
