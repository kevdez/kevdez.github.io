import Typography from "typography";
import stAnnesTheme from "typography-theme-st-annes";

const typography = new Typography(
  Object.assign(stAnnesTheme, {
    headerColor: "#283d3b",
    bodyColor: "#197278"
  })
);

export default typography;
