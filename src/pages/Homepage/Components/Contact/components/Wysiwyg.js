import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, EditorState } from "draft-js";
import styles from "./Wysiwyg.module.scss";
import { useTranslation } from "react-i18next";

export default function Wysiwyg({ setEditorContent }) {
  const { t } = useTranslation();
  const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText(t("message"))));
  const [handleToolbar, setHandleToolbar] = useState("invisible");
  
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    setEditorContent(newEditorState.getCurrentContent().getPlainText());
  };

  const toogleToolbar = () => {
    setHandleToolbar(handleToolbar === "invisible" ? "visible" : "invisible");
  };

  return (
    <>
      <div className={`${styles.containerWysiwyg}`}>
        {handleToolbar === "invisible" ? (
          <div
            onClick={toogleToolbar}
            className={`${styles.buttonHandleToolbar}`}
          >
            {" "}
            <span>+</span>
          </div>
        ) : (
          <div
            onClick={toogleToolbar}
            className={`${styles.buttonHandleToolbarLess}`}
          >
            {" "}
            <span>-</span>
          </div>
        )}
      </div>
      <Editor
        editorState={editorState}
        toolbarClassName={`${styles.toolbarClass} ${
          handleToolbar === "invisible" ? styles.hiddenToolbar : ""
        }`}
        wrapperClassName={styles.wrapperClass}
        editorClassName={styles.editorClass}
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
}
