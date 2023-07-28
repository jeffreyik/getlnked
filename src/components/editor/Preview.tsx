import { useContext, useRef } from "react";
import { renderer } from "./Renderer";
import { AppContext } from "@/context/AppContext";
import {
  AppInterface,
  RenderInterface,
  selectedComponentInterface,
} from "@/interfaces/interfaces";

const Preview = () => {
  const { template, setSelectedComponent, isPreviewMode } = useContext(
    AppContext
  ) as AppInterface;
  const parentRef = useRef(null);

  const selectComponent = (parent: [] | string, id: string | undefined) => {
    if (typeof parent !== "string") {
      parent?.find((component: selectedComponentInterface) => {
        if (component.id === id) {
          setSelectedComponent(component);
        } else if (component.children && component.children.length > 0) {
          selectComponent(component.children, id);
        }
      });
    }
  };

  return (
    <div className="pt-10 w-full overflow-y-scroll h-[89vh]">
      <div
        className={`bg-white ${
          isPreviewMode ? "w-full" : "max-w-[97%]"
        } min-h-screen h-fit`}
      >
        <div
          ref={parentRef}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            const target = event.target as HTMLDivElement;
            selectComponent(template as [], target.id);
          }}
        >
          {template?.map((component: RenderInterface) => renderer(component))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
