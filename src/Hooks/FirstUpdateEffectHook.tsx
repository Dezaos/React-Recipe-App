import {
  useEffect,
  EffectCallback,
  DependencyList,
  useRef,
  useCallback
} from "react";
/**
 * This hook is a custom effect, which has the options to skip the first update.
 * @param runOnFirst Will skip the first update if true
 * @param effect
 * @param deps
 */
const useFirstUpdateEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
  runOnFirst: boolean = false
): void => {
  const firstUpdate = useRef(true);
  const stableRunOnFirst = useRef(runOnFirst);
  const stableEffect = useCallback(effect, deps || []);

  useEffect(() => {
    if (firstUpdate.current && !stableRunOnFirst.current) {
      firstUpdate.current = false;
      return;
    }

    stableEffect();
  }, [stableEffect]);
};

export default useFirstUpdateEffect;
