import jss from "jss";

export const { classes } = jss
  .createStyleSheet({
    container: {
      width: "calc(100% - var(--spacing) * 2)",
      height: "80px",
      "box-shadow": "var(--elevation-3)",
      background: "#242424",
      color: "var(--white)",
      position: "fixed",
      bottom: "var(--spacing)",
      left: "var(--spacing)",
      right: "var(--spacing)",
      "border-radius": "var(--shape)",
      "font-size": "18px",
      "font-weight": "300",
      display: "flex",
      "align-items": "center",
      padding: "0 16px",
    },
    error: {
      background: "var(--warn)",
    },
    success: {
      background: "var(--success)",
    },
    "@keyframes notification_show": {
      from: {
        transform: "translateX(-100%)",
      },
      to: {
        transform: "translateX(0)",
      },
    },
    "@keyframes notification_hide": {
      from: {
        opacity: 1,
        transform: "translateX(0)",
      },
      to: {
        opacity: 0,
        transform: "translateX(-100%)",
      },
    },
    show: {
      animation: "0.4s cubic-bezier(0, 1.03, 0.66, 1.1) $notification_show",
    },
    hide: {
      animation:
        "0.4s cubic-bezier(0, 1.03, 0.66, 1.1) $notification_hide forwards",
    },
  })
  .attach();
