import { EffectCallback, useEffect } from "react";

const useOnceEffect = (effect: EffectCallback) => {
  useEffect(() => {
    effect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useOnceEffect;
