import type { LoaderSnapshot, RenderModel, TextRenderOutput } from "../types";

export function renderText(snapshot: LoaderSnapshot, model: RenderModel): TextRenderOutput {
  const metrics = snapshot.frames.map((frame) => {
    const lines = frame.split("\n");
    return {
      columns: Math.max(...lines.map((line) => line.length), 1),
      rows: Math.max(lines.length, 1)
    };
  });
  const maxColumns = Math.max(...metrics.map((metric) => metric.columns), 1);
  const maxRows = Math.max(...metrics.map((metric) => metric.rows), 1);

  return {
    kind: "text",
    text: model.text,
    style: {
      display: "inline-block",
      minWidth: `${maxColumns}ch`,
      minHeight: `${maxRows}em`,
      ...model.style
    },
    containerStyle: model.containerStyle,
    label: model.label
  };
}
