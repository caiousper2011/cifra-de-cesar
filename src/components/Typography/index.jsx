import { createElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './styles';

export const Typography = ({ variant = 'span', children, ...rest }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return createElement(
    variant,
    {
      ...rest,
      className: `${classes.container} ${classes[variant]} ${rest.className}`,
    },
    children
  );
};
