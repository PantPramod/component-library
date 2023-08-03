// import dynamic from "next/dynamic";
// const Paragraph = dynamic(() => import("@editorjs/paragraph"))
// const Header = dynamic(() => import("@editorjs/header"))
// const List = dynamic(() => import("@editorjs/list"))
// const Link = dynamic(() => import("@editorjs/link"))
// const Delimiter = dynamic(() => import("@editorjs/delimiter"))
// const CheckList = dynamic(()=>import("@editorjs/checklist"))
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";



export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checkList: CheckList,
  list: List,
  header: Header,
  delimiter: Delimiter,
  link: Link,
};