import { EditorState, RichUtils } from "draft-js";
import { insertImage } from "../utils";

const onTab = (
  e: React.KeyboardEvent<{}>,
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.onTab(e, state, 4));
  e.preventDefault();
};

const handleKeyCommand = (
  command: string,
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  const newState = RichUtils.handleKeyCommand(state, command);
  if (newState) {
    setState(newState);
    return "handled";
  }
  return "not-handled";
};

const onBoldClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleInlineStyle(state, "BOLD"));
};

const onItalicClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleInlineStyle(state, "ITALIC"));
};

const onUndo = (
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState((prevState) => EditorState.undo(prevState));
};

const onRedo = (
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState((prevState) => EditorState.redo(prevState));
};

const onULClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleBlockType(state, "unordered-list-item"));
};

const onOLClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleBlockType(state, "ordered-list-item"));
};

const onAlignLeftClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleInlineStyle(state, "text-left"));
};

const onAlignCenterClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleInlineStyle(state, "text-center"));
};

const onAlignRightClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  setState(RichUtils.toggleInlineStyle(state, "text-right"));
};

const onAddLinkClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>,
  setOpenLink: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const contentState = state.getCurrentContent();
  const contentWithEntity = contentState.createEntity("LINK", "MUTABLE", {
    url: URL,
  });
  const entityKey = contentWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(state, {
    currentContent: contentWithEntity,
  });
  setState(
    RichUtils.toggleLink(
      newEditorState,
      newEditorState.getSelection(),
      entityKey
    )
  );
  setOpenLink(false);
};

const onRemoveLinkClick = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>,
  setOpenLink: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const selection = state.getSelection();
  if (!selection.isCollapsed()) {
    setState(RichUtils.toggleLink(state, selection, null));
  }
  setOpenLink(false);
};

const onFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>
) => {
  const file = e.target.files![0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      insertImage(state, setState, reader.result as string);
    };
  }
};

export {
  onTab,
  handleKeyCommand,
  onBoldClick,
  onItalicClick,
  onUndo,
  onRedo,
  onULClick,
  onOLClick,
  onAlignLeftClick,
  onAlignCenterClick,
  onAlignRightClick,
  onAddLinkClick,
  onRemoveLinkClick,
  onFileChange,
};
