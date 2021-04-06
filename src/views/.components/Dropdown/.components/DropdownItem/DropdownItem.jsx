import { Fragment } from 'react';
import PropTypes from 'prop-types';

// import { Ripple } from './.components/Ripple';

import { ClassNameUtils } from 'views/.tools/Utils/ClassNameUtils';
import { DropdownUtils } from 'views/.components/Dropdown/.tools/DropdownUtils';

export const DropdownItem = ({ disabled, label, onClick, option, selected, template }) => {
  const { classNames } = ClassNameUtils;
  const { getJSXElement } = DropdownUtils;

  const className = classNames(
    'p-dropdown-item',
    { 'p-highlight': selected, 'p-disabled': disabled, 'p-dropdown-item-empty': !label || label.length === 0 },
    option.className
  );

  const onItemClick = event => {
    if (onClick) onClick({ originalEvent: event, option: option });
  };

  const renderContent = () => (
    <Fragment>
      {template ? getJSXElement(template, option) : label}
      {/* <Ripple /> */}
    </Fragment>
  );

  return (
    <li aria-label={label} aria-selected={selected} className={className} key={label} onClick={onItemClick} role="option">
      {renderContent()}
    </li>
  );
};

DropdownItem.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.any,
  onClick: PropTypes.func,
  option: PropTypes.any,
  selected: PropTypes.bool,
  template: PropTypes.any
};

DropdownItem.defaultProps = {
  disabled: false,
  label: null,
  onClick: null,
  option: null,
  selected: false,
  template: null
};
