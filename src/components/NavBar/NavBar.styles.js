import jss from "jss";

export const { classes } = jss
  .createStyleSheet({
    container: {
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      padding: "calc(var(--spacing) * 2)",
      background: "var(--purple-400)",
      color: "var(--white)",
      "box-shadow": "var(--elevation-3)",
    },
  })
  .attach();
