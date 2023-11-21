import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import Action from "../Action";
import Input from "../Input";
import Popover from "../Popover";
import Select from "../select";
import SelectOption from "../select/SelectOption";

import {
  CompositeDecorator,
  Editor,
  EditorState,
  Modifier,
  RawDraftContentState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  getDefaultKeyBinding,
} from "draft-js";
import { CirclePicker } from "react-color";

import { BiBold, BiListUl } from "react-icons/bi";
import { BsListOl } from "react-icons/bs";
import { GoItalic } from "react-icons/go";
import { LuUndo2, LuRedo2, LuLink, LuImage } from "react-icons/lu";

import {
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
} from "react-icons/ai";

import { alignment, colors, colorsStyleMap } from "./config";

import {
  handleKeyCommand,
  onAlignCenterClick,
  onAlignLeftClick,
  onAlignRightClick,
  onBoldClick,
  onFileChange,
  onItalicClick,
  onOLClick,
  onRedo,
  onTab,
  onULClick,
  onUndo,
} from "./events";

import {
  findImageEntities,
  findLinkEntities,
  getBlockType,
  getHighlightColor,
  getInlineColor,
  getLinkURL,
  getTypoType,
  hasInlineType,
  isSelectionImage,
  toggleBlock,
} from "./utils";

import "draft-js/dist/Draft.css";
import React from "react";

const Link = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a
      className="cursor-pointer"
      style={{
        textDecoration: "underline",
        textUnderlineOffset: "under",
      }}
      onClick={() => window.open(url)}
    >
      {props.children}
    </a>
  );
};

const Image = (props: any) => {
  const { src } = props.contentState.getEntity(props.entityKey).getData();
  return <img src={src} />;
};

const RichTextEditor = (
  {
    initialState,
  }: {
    initialState?: RawDraftContentState;
  },
  ref: any
) => {
  useImperativeHandle(ref, () => ({
    onSave: () => {
      return convertToRaw(state.getCurrentContent());
    },
  }));

  const decorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
    {
      strategy: findImageEntities,
      component: Image,
    },
  ]);

  const initState = convertFromRaw(
    initialState
      ? initialState
      : {
          blocks: [],
          entityMap: {},
        }
  );

  const [state, setState] = useState(() =>
    EditorState.createWithContent(initState, decorator)
  );

  const [openTypo, setOpenTypo] = useState(false);

  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [URL, setURL] = useState(getLinkURL(state));

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setURL(getLinkURL(state));
    console.clear();
  }, [state]);

  const onAddLinkClick = () => {
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

  const onRemoveLinkClick = () => {
    const selection = state.getSelection();
    if (!selection.isCollapsed()) {
      setState(RichUtils.toggleLink(state, selection, null));
    }
    setOpenLink(false);
  };

  const isSelectionLink = () => {
    const selection = state.getSelection();
    const contentState = state.getCurrentContent();
    const currentBlock = contentState.getBlockForKey(selection.getStartKey());
    const entityKey = currentBlock.getEntityAt(selection.getStartOffset());
    return entityKey && contentState.getEntity(entityKey).getType() === "LINK"
      ? true
      : false;
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center gap-4 my-3 text-xl">
        <LuUndo2
          onClick={() => onUndo(setState)}
          className={`cursor-pointer ${getHighlightColor(
            state.getUndoStack().size === 0
          )}`}
        />
        <LuRedo2
          onClick={() => onRedo(setState)}
          className={`cursor-pointer ${getHighlightColor(
            state.getRedoStack().size === 0
          )}`}
        />
        <div className="w-[0.05rem] h-8 bg-mid-neutral-300" />
        <Select
          variant="darker"
          title={getTypoType(getBlockType(state))}
          open={openTypo}
          onAction={() => {
            setOpenTypo(!openTypo);
          }}
          onClickAway={() => {
            setOpenTypo(false);
          }}
          width="w-[10rem]"
          cxLayout="text-mid-neutral-100"
        >
          <SelectOption
            name="Normal text"
            onSelect={() => {
              setState(toggleBlock(state, "unstyled"));
              setOpenTypo(false);
            }}
          >
            Normal text
          </SelectOption>
          <SelectOption
            name="H1"
            onSelect={() => {
              setState(toggleBlock(state, "header-one"));
              setOpenTypo(false);
            }}
          >
            H1
          </SelectOption>
          <SelectOption
            name="H2"
            onSelect={() => {
              setState(toggleBlock(state, "header-two"));
              setOpenTypo(false);
            }}
          >
            H2
          </SelectOption>
          <SelectOption
            name="H3"
            onSelect={() => {
              setState(toggleBlock(state, "header-three"));
              setOpenTypo(false);
            }}
          >
            H3
          </SelectOption>
          <SelectOption
            name="H4"
            onSelect={() => {
              setState(toggleBlock(state, "header-four"));
              setOpenTypo(false);
            }}
          >
            H4
          </SelectOption>
          <SelectOption
            name="H5"
            onSelect={() => {
              setState(toggleBlock(state, "header-five"));
              setOpenTypo(false);
            }}
          >
            H5
          </SelectOption>
          <SelectOption
            name="H6"
            onSelect={() => {
              setState(toggleBlock(state, "header-six"));
              setOpenTypo(false);
            }}
          >
            H6
          </SelectOption>
        </Select>
        <div className="w-[0.05rem] h-8 bg-mid-neutral-300" />
        <BiBold
          onClick={() => onBoldClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            !hasInlineType(state, "BOLD")
          )}`}
        />
        <GoItalic
          onClick={() => onItalicClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            !hasInlineType(state, "ITALIC")
          )}`}
        />
        <div className="w-[0.05rem] h-8 bg-mid-neutral-300" />
        <Popover
          content={
            <CirclePicker
              color={getInlineColor(state).toLocaleUpperCase()}
              onChange={(c: { hex: string }) => {
                setState(
                  RichUtils.toggleInlineStyle(
                    state,
                    `color-${c.hex.toLocaleUpperCase()}`
                  )
                );
              }}
              colors={colors}
              className="!w-[13.15rem]"
            />
          }
          open={openColor}
          onClickAway={() => setOpenColor(false)}
          variant="darker"
        >
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setOpenColor(!openColor)}
          >
            <div className="text-[1.1rem] text-mid-neutral-100">A</div>
            <div
              className="w-full h-[0.2rem] -mt-1"
              style={{
                backgroundColor: getInlineColor(state).toLocaleUpperCase(),
              }}
            />
          </div>
        </Popover>
        <div className="w-[0.05rem] h-8 bg-mid-neutral-300" />
        <BiListUl
          onClick={() => onULClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            getBlockType(state) !== "unordered-list-item"
          )} text-2xl`}
        />
        <BsListOl
          onClick={() => onOLClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            getBlockType(state) !== "ordered-list-item"
          )} mt-[0.1rem]`}
        />
        <div className="w-[0.05rem] h-8 bg-mid-neutral-300" />
        <AiOutlineAlignLeft
          onClick={() => onAlignLeftClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            !hasInlineType(state, "text-left")
          )} mt-[0.1rem]`}
        />
        <AiOutlineAlignCenter
          onClick={() => onAlignCenterClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            !hasInlineType(state, "text-center")
          )} mt-[0.1rem]`}
        />
        <AiOutlineAlignRight
          onClick={() => onAlignRightClick(state, setState)}
          className={`cursor-pointer ${getHighlightColor(
            !hasInlineType(state, "text-right")
          )} mt-[0.1rem]`}
        />
        <div className="w-[0.05rem] h-8 bg-mid-neutral-300" />
        <Popover
          content={
            <div>
              <Input
                type="text"
                placeholder="Enter the URL"
                value={URL}
                onType={(e) => setURL(e.target.value)}
                height="h-[2rem]"
              />
              <div className="flex justify-end mt-3 gap-2">
                <Action
                  onAction={() => onRemoveLinkClick()}
                  type="button"
                  size="xs"
                  variant="light"
                  clickable={
                    getLinkURL(state) && getLinkURL(state).trim() !== ""
                  }
                >
                  Remove Link
                </Action>
                <Action
                  onAction={() => onAddLinkClick()}
                  type="button"
                  size="xs"
                  clickable={URL && URL.trim() !== ""}
                >
                  Add Link
                </Action>
              </div>
            </div>
          }
          open={openLink}
          onClickAway={() => setOpenLink(false)}
          variant="darker"
        >
          <LuLink
            onClick={() => {
              setOpenLink(!openLink);
            }}
            className={`cursor-pointer ${getHighlightColor(
              !isSelectionLink()
            )} mt-[0.1rem]`}
          />
        </Popover>
        <LuImage
          onClick={() => fileInputRef.current!.click()}
          className={`cursor-pointer ${getHighlightColor(
            !isSelectionImage(state)
          )} mt-[0.1rem]`}
        />
        <input
          className="hidden"
          ref={fileInputRef}
          title="upload"
          type="file"
          onChange={(e) => onFileChange(e, state, setState)}
          multiple
          accept="image/*"
        />
      </div>
      <div className="text-white w-full h-[calc(100%-4rem)] bg-dark-neutral-100 rounded-lg overflow-y-auto">
        <div className="p-5">
          <Editor
            editorState={state}
            onChange={setState}
            customStyleMap={{
              ...colorsStyleMap,
              ...alignment,
            }}
            handleKeyCommand={(c: string) =>
              handleKeyCommand(c, state, setState)
            }
            keyBindingFn={(e) => {
              if (e.key === "Tab") {
                onTab(e, state, setState);
                return "Tab";
              }
              if (e.key === "Backspace") {
                e.preventDefault();
                const selection = state.getSelection();
                const content = state.getCurrentContent();
                if (selection.isCollapsed()) {
                  const blockKey = selection.getStartKey();
                  const block = content.getBlockForKey(blockKey);
                  if (block.getEntityAt(0)) {
                    const newContent = Modifier.removeRange(
                      content,
                      selection,
                      "backward"
                    );
                    const newEditorState = EditorState.push(
                      state,
                      newContent,
                      "remove-range"
                    );
                    setState(newEditorState);
                    return "Backspace";
                  }
                }
              }
              return getDefaultKeyBinding(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(RichTextEditor);
