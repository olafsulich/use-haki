import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../src/useToggle';

describe('test useToggle hook', () => {
  it('should init state with false', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current.on).toBe(false);
  });
  it('should init state with true', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.on).toBe(true);
  });
  it('should set state to true', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current.on).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.on).toBe(true);
  });
  it('should set state to false', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.on).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.on).toBe(false);
  });
});
