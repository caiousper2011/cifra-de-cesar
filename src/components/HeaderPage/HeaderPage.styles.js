import jss from "jss";

export const { classes } = jss
  .createStyleSheet({
    container: {
      display: "flex",
      "flex-direction": "column",
      "justify-content": "flex-end",
      "align-items": "center",
      margin: "calc(var(--spacing) * 6) 0",
    },
    title: {
      "font-size": "4.33rem",
      "font-weight": "500",
      color: "var(--white)",
      "margin-bottom": "0.8rem",
    },
    subtitle: {
      "font-weight": "100",
      "font-family": "Roboto Mono",
      color: "var(--purple-200)",
    },
  })
  .attach();
