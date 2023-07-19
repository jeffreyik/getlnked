export interface BlockInterface {
    id?: string | undefined,
    className?: string | undefined,
    children?: React.ReactNode | string | null,
    style?: {} | undefined,
    text?: string | null,
    url?: string,
    link?: string | undefined,
    navLinks?: [] | undefined,
    src?: string | undefined,
    logo?: string | undefined,
}

export interface StyleInterface {
    name?: string | undefined,
    value?: string | undefined,
  }
  
export interface RenderInterface {
    id?: string | undefined,
    className?: string | undefined,
    children?: [] | string | null,
    styles?: [StyleInterface] | null,
    text?: string | null,
    url?: string,
    link?: string | undefined,
    src?: string | undefined,
    component?: string | undefined,
    logo?: string | undefined,
    navLinks?: [] | undefined
  }

export interface AppInterface {
  template: [] | null,
  setTemplate: (template: any) => void,
  updateDatabase: () => void,
  selectedComponent: selectedComponentInterface,
  setSelectedComponent: (selectedComponent: selectedComponentInterface) => void,
  isPreviewMode: boolean,
  setIsPreviewMode: (isPreviewMode: boolean) => void,
  currentTab: string,
  setCurrentTab: (currentTab: string) => void,
  toggleEditTab: boolean | null,
  setToggleEditTab: (toggleEditTab: boolean) => void,
}

export interface selectedComponentInterface {
    id?: string | null,
    className?: string | null,
    children: [] | string | null,
    styles?: [StyleInterface] | null,
    text?: string,
    url?: string,
    link?: string | null,
    src?: string | null,
    component?: string | null,
    logo?: string | null,
    navLinks?: [] | null,
    editable?: [] | null,
    type?: string | null,
}