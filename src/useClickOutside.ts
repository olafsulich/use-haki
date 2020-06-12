import { useEffect, RefObject } from 'react';

enum Events {
  MOUSEDOWN = 'mousedown',
  TOUCHSTART = 'touchstart',
}

type EventsTypes = [typeof Events.MOUSEDOWN, typeof Events.TOUCHSTART][number];
type Event = { [Type in EventsTypes]: HTMLElementEventMap[Type] }[EventsTypes];

type Ref = RefObject<HTMLElement>;
type Handler = (event: Event) => void;

const useClickOutside = (ref: Ref, handler: Handler) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;