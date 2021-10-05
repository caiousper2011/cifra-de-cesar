import { createElement } from 'react';
import { useTheme } from 'react-jss';
import useStyles from './styles';

export const Typography = ({ variant = 'span', color, children, ...rest }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const convertVariantIntoElement = (elementType) => {
    const convertElements = {
      subtitle1: 'div',
      subtitle2: 'div',
    };

    return convertElements[elementType] || elementType;
  };

  return createElement(
    convertVariantIntoElement(variant),
    {
      ...rest,
      className: `${classes.typography} ${classes[variant]} ${rest.className} ${color}`,
    },
    children
  );
};
