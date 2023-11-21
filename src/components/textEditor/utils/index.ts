import {
  AtomicBlockUtils,
  ContentBlock,
  ContentState,
  EditorState,
  RichUtils,
} from "draft-js";

const getInlineColor = (state: EditorState) => {
  const selection = state.getSelection();
  const currentContent = state.getCurrentContent();
  const startKey = selection.getStartKey();

  const firstCharInlineStyles = currentContent
    .getBlockForKey(startKey)
    .getInlineStyleAt(0);

  let hexColor = "#FFFFFF";

  firstCharInlineStyles.forEach((style: any) => {
    if (style.includes("color-")) {
      hexColor = style.split("-")[1].toLowerCase();
    }
  });

  return hexColor;
};

const getTypoType = (type: string) => {
  switch (type) {
    case "header-one":
      return "H1";
    case "header-two":
      return "H2";
    case "header-three":
      return "H3";
    case "header-four":
      return "H4";
    case "header-five":
      return "H5";
    case "header-six":
      return "H6";
    default:
      return "Normal text";
  }
};

const toggleBlock = (state: EditorState, type: string) => {
  return RichUtils.toggleBlockType(state, type);
};

const getHighlightColor = (is: boolean) => {
  return is ? "text-mid-neutral-100" : "text-primary-light";
};

const getBlockType = (state: EditorState) => {
  return state
    .getCurrentContent()
    .getBlockForKey(state.getSelection().getStartKey())
    .getType();
};

const hasInlineType = (state: EditorState, type: string) => {
  return state.getCurrentInlineStyle().has(type);
};

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

function findImageEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "IMAGE"
    );
  }, callback);
}

const getLinkURL = (state: EditorState) => {
  const selection = state.getSelection();
  const contentState = state.getCurrentContent();
  const currentBlock = contentState.getBlockForKey(selection.getStartKey());
  const entityKey = currentBlock.getEntityAt(selection.getStartOffset());
  const url = currentBlock.getEntityAt(selection.getStartOffset())
    ? contentState.getEntity(entityKey).getData().url
    : "";
  return url;
};

const isSelectionLink = (state: EditorState) => {
  const selection = state.getSelection();
  const contentState = state.getCurrentContent();
  const currentBlock = contentState.getBlockForKey(selection.getStartKey());
  const entityKey = currentBlock.getEntityAt(selection.getStartOffset());
  return entityKey && contentState.getEntity(entityKey).getType() === "LINK"
    ? true
    : false;
};

const isSelectionImage = (state: EditorState) => {
  const selection = state.getSelection();
  const contentState = state.getCurrentContent();
  const currentBlock = contentState.getBlockForKey(selection.getStartKey());
  const entityKey = currentBlock.getEntityAt(selection.getStartOffset());
  return entityKey && contentState.getEntity(entityKey).getType() === "IMAGE"
    ? true
    : false;
};

const insertImage = (
  state: EditorState,
  setState: React.Dispatch<React.SetStateAction<EditorState>>,
  base64: string
) => {
  const contentState = state.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    "IMAGE",
    "IMMUTABLE",
    { src: base64 }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(state, {
    currentContent: contentStateWithEntity,
  });
  setState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " "));
};

export {
  getInlineColor,
  getTypoType,
  toggleBlock,
  getHighlightColor,
  getBlockType,
  hasInlineType,
  findLinkEntities,
  findImageEntities,
  getLinkURL,
  isSelectionImage,
  isSelectionLink,
  insertImage,
};
