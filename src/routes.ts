import { lazy } from "react";

const EditorPage = lazy(() => import("./pages/Editor"));

export const routes = [
  {
    path: "/editor",
    element: EditorPage,
  },
];
