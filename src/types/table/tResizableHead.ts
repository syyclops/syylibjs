export type TableResizableHeadProps = {
    children: JSX.Element | JSX.Element[] | string;
    divideX?: boolean;
    onClick?: () => void;
    cx?: string;
    id: string;
    resizerCX?: string;
    colspan?: number;
  }