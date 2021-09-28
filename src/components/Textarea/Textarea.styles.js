import jss from "jss";

export const { classes } = jss
  .createStyleSheet({
    container: {
      flex: 1,
      "max-width": "500px",
      height: "90%",
      "max-height": "400px",
      overflow: "hidden",
      background: "var(--paper)",
      "border-radius": "var(--shape)",
      "box-shadow": "var(--elevation-3)",
    },
    field: {
      background: "transparent",
      border: "none",
      width: "100%",
      height: "100%",
      resize: "none",
      color: "var(--purple-400)",
      "font-size": "0.8rem",
      margin: "0px",
      padding: " 8px",
      outline: "none",
      "font-family": '"Roboto Mono", monospace',
      "text-transform": "uppercase",
    },
  })
  .attach();
