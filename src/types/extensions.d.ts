declare module 'react-dom' {
  interface Root {
    render: (children: React.ReactNode) => void;
    unmount: () => void;
  }

  function createRoot(
    container: Element | Document | DocumentFragment | Comment,
    options?: RootOptions
  ): Root;

  function createPortal(
    children: React.ReactNode,
    container: Element | Document | DocumentFragment | Comment,
    key?: null | string
  ): React.ReactPortal;
}