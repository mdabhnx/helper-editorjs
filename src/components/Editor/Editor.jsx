import EditorJS from "@editorjs/editorjs";
import EditorJSHtml from "editorjs-html";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect } from "react";

const Editor = () => {
  const html = EditorJSHtml();
  const editor = new EditorJS({
    holder: "editorjs",
    placeholder: "Let`s write something awsome!",
    tools: {
      header: Header,
      list: List,
    },
    logLevel: "ERROR",
    onReady: () => {
      console.log("Editor.js is ready to work!");
    },
  });

  useEffect(() => {
    return () => editor.destroy();
  });

  const saveToDB = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", html.parse(outputData));
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <div>
      <div
        id="editorjs"
        style={{ border: "1px solid gray", borderRadius: "5px" }}
      ></div>
      <div className="">
        <button onClick={saveToDB}>Save</button>
      </div>
    </div>
  );
};

export default Editor;
