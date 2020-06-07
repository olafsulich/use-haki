declare module 'activity-detector' {
  export type ActivityState = 'idle' | 'active';

  export type ActivityDetectorOptions = {
    /**
     * Events which force a transition to 'active'
     *
     * Default:
     *  [ 'click', 'mousemove', 'keydown', 'DOMMouseScroll',
     *    'mousewheel', 'mousedown', 'touchstart', 'touchmove',
     *    'focus' ];
     */
    activityEvents?: Array<string>;
    /**
     * Events which force a transition to 'idle'
     *
     * Default: ['blur', 'visibilitychange']
     */
    inactivityEvents?: Array<string>;
    /**
     * Events that are ignored in 'idle' state
     *
     * Default: ['mousemove']
     */
    ignoredEventsWhenIdle?: Array<string>;
    /**
     *  Inactivity time in ms to transition to 'idle'
     */
    timeToIdle?: number;
    initialState?: ActivityState;
    autoInit?: boolean;
  };

  export type ActivityDetectorInstance = {
    on: (eventName: ActivityState, listener: () => void) => void;
    stop: () => void;
    init: (firstState: ActivityState) => {};
  };

  function createActivityDetector(
    options: ActivityDetectorOptions
  ): ActivityDetectorInstance;
  export default createActivityDetector;
}
