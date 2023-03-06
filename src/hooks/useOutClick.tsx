import { useCallback, useEffect, useMemo } from "react";
import { flatChildArray } from "../utils/dom";

interface IOutClick {
  referenceId: string;
  onOutClick: VoidFunction;
  ignoreOutClick?: boolean;
}

export function useOutClick({
  referenceId,
  onOutClick,
  ignoreOutClick = false,
}: IOutClick) {
  const OutClickProps = useMemo(
    () => ({ "outclick-reference-id": referenceId }),
    [referenceId]
  );

  const OutClickHandler = useCallback(
    (e: MouseEvent) => {
      if(ignoreOutClick || e.button !== 0 ) return

      let parentComponent = (e.target as HTMLElement).closest(`[outclick-reference-id]='${referenceId}'`)

      if(!parentComponent) return onOutClick()

      if(flatChildArray(parentComponent as HTMLElement).includes(e.target as HTMLElement)) return;

      onOutClick();
    },
    [ignoreOutClick, onOutClick, referenceId]
  );

  const register = useCallback(() => {
    document.addEventListener("mouseup", OutClickHandler, false);
  }, [OutClickHandler]);

  useEffect(
    () => () => {
      document.removeEventListener("mouseup", OutClickHandler);
    },
    [OutClickHandler]
  );

  return {
    register,
    OutClickProps,
  };
}
