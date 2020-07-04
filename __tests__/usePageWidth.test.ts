import { renderHook, act } from '@testing-library/react-hooks';
import usePageWidth from '../src/usePageWidth';

describe('test usePageWidth hook', () => {
  const getHook = () => renderHook(() => usePageWidth());

  const triggerResize = (value: number) => {
    (window.innerWidth as number) = value;
    window.dispatchEvent(new Event('resize'));
  };

  it('should return numeric value', () => {
    const { result } = getHook();
    expect(typeof result.current).toBe('number');
  });

  it('should re-render after width change', () => {
    const { result } = getHook();

    act(() => {
      triggerResize(550);
    });

    expect(result.current).toBe(550);

    act(() => {
      triggerResize(920);
    });

    expect(result.current).toBe(920);
  });
});
