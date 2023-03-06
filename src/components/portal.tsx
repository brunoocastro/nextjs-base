import {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface IPortal {
  selector: string;
  children: ReactElement;
}

export function Portal({ children, selector }: IPortal) {
  const reference = useRef<Element>();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    const selectorElement = document.querySelector(selector);
    if (selectorElement) {
      reference.current = selectorElement;
      setMounted(true);
    }
  }, [selector]);

  return isMounted && reference.current
    ? createPortal(children, reference.current)
    : children;
}
