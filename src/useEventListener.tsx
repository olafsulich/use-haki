import { useRef, useEffect } from 'react';

const useEventListener = <KD extends keyof DocumentEventMap, KH extends keyof HTMLElementEventMap, KW extends keyof WindowEventMap>(
  element: Document | HTMLElement | Window | null | void,
  eventName: KD | KH | KW | string,
  handler: (this: typeof element, evt: DocumentEventMap[KD] | HTMLElementEventMap[KH] | WindowEventMap[KW] | Event) => void,
) => {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!element) return;

    const eventListener: typeof handlerRef.current = (evt) => handlerRef.current.call(element, evt);

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
