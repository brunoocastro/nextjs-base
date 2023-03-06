import { PropsWithChildren } from "react";
import { useModals } from "../hooks/useModal";

export function LayoutProvider({ children }: PropsWithChildren) {
  const { ModalInstances } = useModals();
  return (
    <div style={{ display: "contents", position: "relative" }}>
      <aside>
        <div style={{zIndex: 51}} id="portal-modal" />
      </aside>
      {ModalInstances}
      {children}
    </div>
  );
}
