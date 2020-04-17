import { EffectCallback, useEffect } from "react";

const useOnceEffect = (effect: EffectCallback) => {
  useEffect(() => {
    effect();
  }, [effect]);
};

export default useOnceEffect;
