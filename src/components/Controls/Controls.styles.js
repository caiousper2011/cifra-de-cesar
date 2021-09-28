import jss from "jss";

export const { classes } = jss
  .createStyleSheet({
    container: {
      background: "var(--paper)",
      "border-radius": "var(--shape)",
      "box-shadow": "var(--elevation-3)",
      display: "flex",
      "flex-direction": "column",
      height: "140px",
      "align-self": "center",
      transform: "translateY(-20px)",
      width: "48px",
      ["@media (min-width: 1024px)"]: {
        width: 200,
      },
    },
  })
  .attach();
