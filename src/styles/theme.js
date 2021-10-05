export const theme = {
  background: {
    blue: '#0767ff',
  },
  color: {
    textPrimary: '#ffffff',
    textSecondary: '#ff72a3',
    textAccent: '#fe0056',
    white: '#ffffff',
    purple: {
      100: '#f7c6d7',
      200: '#ff72a3',
      400: '#fe0056',
    },
    paper: '#f5f5f5',
    warn: '#dc3545',
    success: '#28a745',
  },
  spacing: (multiple = 1, suffix = 'px') => `${8 * multiple}${suffix}`,
  shape: 4,
  'elevation-3': {
    3: '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
  },
  maxContainerWidth: {
    lg: '1480px',
  },
  font: {
    main: "'Roboto', 'sans-serif'",
    secondary: "'Roboto Mono'",
  },
};
