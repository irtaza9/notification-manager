import { createTheme as createMuiTheme } from "@mui/material";
import { createPalette } from "./create-palette";
import { createComponents } from "./create-components";

export function createTheme() {
  const palette = createPalette();
  const components = createComponents({ palette });

  return createMuiTheme({
    components,
    palette,
    shape: {
      borderRadius: 8,
    },
  });
}
