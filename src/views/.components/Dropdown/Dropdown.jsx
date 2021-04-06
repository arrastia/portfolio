import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { DropdownPanel } from './.components/DropdownPanel';
import { DropdownItem } from './.components/DropdownItem';

import { ClassNameUtils } from 'views/.tools/Utils/ClassNameUtils';

export const Dropdown = ({
  appendTo,
  ariaLabel,
  ariaLabelledBy,
  autoFocus,
  classNameProp,
  dataKey,
  disabled,
  editable,
  emptyFilterMessage,
  filter,
  filterBy,
  filterInputAutoFocus,
  filterLocale,
  filterMatchMode,
  filterPlaceholder,
  id,
  inputId,
  itemTemplate,
  maxLength,
  name,
  onBlur,
  onChange,
  onContextMenu,
  onFocus,
  onMouseDown,
  optionDisabled,
  optionGroupChildren,
  optionGroupLabel,
  optionGroupTemplate,
  optionLabel,
  options,
  optionValue,
  panelClassName,
  panelStyle,
  placeholder,
  required,
  resetFilterOnHide,
  scrollHeight,
  showClear,
  showFilterClear,
  style,
  tabIndex,
  tooltip,
  tooltipOptions,
  value,
  valueTemplate
}) => {
  const { classNames } = ClassNameUtils;

  const classNameFinal = classNames('p-dropdown p-component p-inputwrapper', classNameProp, {
    'p-disabled': this.props.disabled,
    'p-focus': this.state.focused,
    'p-dropdown-clearable': this.props.showClear && !this.props.disabled,
    'p-inputwrapper-filled': this.props.value,
    'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
  });
  let selectedOption = this.getSelectedOption();

  let items = this.renderItems();

  const renderHiddenSelect = selectedOption => {
    let placeHolderOption = <option value="">{this.props.placeholder}</option>;
    let option = selectedOption ? <option value={selectedOption.value}>{this.getOptionLabel(selectedOption)}</option> : null;

    return (
      <div className="p-hidden-accessible p-dropdown-hidden-select">
        <select ref={el => (this.nativeSelect = el)} required={this.props.required} name={this.props.name} tabIndex={-1} aria-hidden="true">
          {placeHolderOption}
          {option}
        </select>
      </div>
    );
  };

  const renderKeyboardHelper = () => {
    return (
      <div className="p-hidden-accessible">
        <input
          ref={el => (this.focusInput = el)}
          id={this.props.inputId}
          type="text"
          readOnly
          aria-haspopup="listbox"
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          onKeyDown={this.onInputKeyDown}
          disabled={this.props.disabled}
          tabIndex={this.props.tabIndex}
          aria-label={this.props.ariaLabel}
          aria-labelledby={this.props.ariaLabelledBy}
        />
      </div>
    );
  };

  const renderDropdownIcon = () => {
    return (
      <div
        ref={el => (this.trigger = el)}
        className="p-dropdown-trigger"
        role="button"
        aria-haspopup="listbox"
        aria-expanded={this.state.overlayVisible}>
        <span className="p-dropdown-trigger-icon pi pi-chevron-down p-clickable"></span>
      </div>
    );
  };

  const renderLabel = selectedOption => {
    const label = selectedOption ? this.getOptionLabel(selectedOption) : null;

    if (this.props.editable) {
      let value = label || this.props.value || '';

      return (
        <input
          aria-haspopup="listbox"
          aria-label={this.props.ariaLabel}
          aria-labelledby={this.props.ariaLabelledBy}
          className="p-dropdown-label p-inputtext"
          defaultValue={value}
          disabled={this.props.disabled}
          maxLength={this.props.maxLength}
          onBlur={this.onInputBlur}
          onFocus={this.onEditableInputFocus}
          onInput={this.onEditableInputChange}
          placeholder={this.props.placeholder}
          ref={el => (this.input = el)}
          type="text"
        />
      );
    } else {
      let className = classNames('p-dropdown-label p-inputtext', {
        'p-placeholder': label === null && this.props.placeholder,
        'p-dropdown-label-empty': label === null && !this.props.placeholder
      });

      let content = this.props.valueTemplate
        ? ObjectUtils.getJSXElement(this.props.valueTemplate, selectedOption, this.props)
        : label || this.props.placeholder || 'empty';

      return (
        <span ref={el => (this.input = el)} className={className}>
          {content}
        </span>
      );
    }
  };

  const renderClearIcon = () => {
    if (this.props.value != null && this.props.showClear && !this.props.disabled) {
      return <i className="p-dropdown-clear-icon pi pi-times" onClick={this.clear}></i>;
    }

    return null;
  };

  const renderFilterClearIcon = () => {
    if (this.props.showFilterClear && this.state.filter) {
      return <i className="p-dropdown-filter-clear-icon pi pi-times" onClick={() => this.resetFilter(() => this.filterInput.focus())}></i>;
    }

    return null;
  };

  const renderFilter = () => {
    if (this.props.filter) {
      const clearIcon = renderFilterClearIcon();
      const containerClassName = classNames('p-dropdown-filter-container', { 'p-dropdown-clearable-filter': !!clearIcon });
      return (
        <div className="p-dropdown-header">
          <div className={containerClassName} onClick={this.onFilterContainerClick}>
            <input
              autoComplete="off"
              className="p-dropdown-filter p-inputtext p-component"
              onChange={this.onFilterInputChange}
              onKeyDown={this.onFilterInputKeyDown}
              placeholder={this.props.filterPlaceholder}
              ref={el => (this.filterInput = el)}
              type="text"
              value={this.state.filter}
            />
            {clearIcon}
            <i className="p-dropdown-filter-icon pi pi-search"></i>
          </div>
        </div>
      );
    }

    return null;
  };

  const renderItems = () => {
    let visibleOptions = this.getVisibleOptions();

    if (visibleOptions) {
      if (this.props.optionGroupLabel) {
        return visibleOptions.map((option, i) => {
          const groupContent = this.props.optionGroupTemplate
            ? ObjectUtils.getJSXElement(this.props.optionGroupTemplate, option, i)
            : this.getOptionGroupLabel(option);
          const groupChildrenContent = this.renderGroupChildren(option);
          const key = i + '_' + this.getOptionGroupRenderKey(option);

          return (
            <React.Fragment key={key}>
              <li className="p-dropdown-item-group">{groupContent}</li>
              {groupChildrenContent}
            </React.Fragment>
          );
        });
      } else {
        return visibleOptions.map((option, index) => {
          let optionLabel = this.getOptionLabel(option);
          let optionKey = index + '_' + this.getOptionRenderKey(option);
          let disabled = this.isOptionDisabled(option);

          return (
            <DropdownItem
              key={optionKey}
              label={optionLabel}
              option={option}
              template={this.props.itemTemplate}
              selected={this.isSelected(option)}
              disabled={disabled}
              onClick={this.onOptionClick}
            />
          );
        });
      }
    } else if (this.hasFilter()) {
      const emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
      return <li className="p-dropdown-empty-message">{emptyFilterMessage}</li>;
    }

    return null;
  };

  return (
    <div
      id={this.id}
      ref={el => (this.container = el)}
      className={classNameFinal}
      style={this.props.style}
      onClick={this.onClick}
      onMouseDown={this.props.onMouseDown}
      onContextMenu={this.props.onContextMenu}>
      {renderKeyboardHelper()}
      {renderHiddenSelect(selectedOption)}
      {renderLabel(selectedOption)}
      {renderClearIcon()}
      {renderDropdownIcon()}
      <DropdownPanel
        appendTo={this.props.appendTo}
        filter={renderFilter()}
        in={this.state.overlayVisible}
        onClick={this.onPanelClick}
        onEnter={this.onOverlayEnter}
        onEntered={this.onOverlayEntered}
        onExit={this.onOverlayExit}
        onExited={this.onOverlayExited}
        panelClassName={this.props.panelClassName}
        panelStyle={this.props.panelStyle}
        ref={this.overlayRef}
        scrollHeight={this.props.scrollHeight}>
        {items}
      </DropdownPanel>
    </div>
  );
};

Dropdown.propTypes = {
  appendTo: PropTypes.any,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  dataKey: PropTypes.string,
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  emptyFilterMessage: PropTypes.any,
  filter: PropTypes.bool,
  filterBy: PropTypes.string,
  filterInputAutoFocus: PropTypes.bool,
  filterLocale: PropTypes.string,
  filterMatchMode: PropTypes.string,
  filterPlaceholder: PropTypes.string,
  id: PropTypes.string,
  inputId: PropTypes.string,
  itemTemplate: PropTypes.any,
  lazy: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onContextMenu: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  optionDisabled: PropTypes.bool,
  optionGroupChildren: PropTypes.string,
  optionGroupLabel: PropTypes.string,
  optionGroupTemplate: PropTypes.any,
  optionLabel: PropTypes.string,
  options: PropTypes.array,
  optionValue: PropTypes.string,
  panelClassName: PropTypes.string,
  panelStyle: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  resetFilterOnHide: PropTypes.bool,
  scrollHeight: PropTypes.string,
  showClear: PropTypes.bool,
  showFilterClear: PropTypes.bool,
  style: PropTypes.object,
  tabIndex: PropTypes.number,
  tooltip: PropTypes.string,
  tooltipOptions: PropTypes.object,
  value: PropTypes.any,
  valueTemplate: PropTypes.any
};

Dropdown.defaultProps = {
  appendTo: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  autoFocus: false,
  className: null,
  dataKey: null,
  disabled: false,
  editable: false,
  emptyFilterMessage: 'No results found',
  filter: false,
  filterBy: null,
  filterInputAutoFocus: true,
  filterLocale: undefined,
  filterMatchMode: 'contains',
  filterPlaceholder: null,
  id: null,
  inputId: null,
  itemTemplate: null,
  maxLength: null,
  name: null,
  onBlur: null,
  onChange: null,
  onContextMenu: null,
  onFocus: null,
  onMouseDown: null,
  optionDisabled: null,
  optionGroupChildren: null,
  optionGroupLabel: null,
  optionGroupTemplate: null,
  optionLabel: null,
  options: null,
  optionValue: null,
  panelClassName: null,
  panelStyle: null,
  placeholder: null,
  required: false,
  resetFilterOnHide: false,
  scrollHeight: '200px',
  showClear: false,
  showFilterClear: false,
  style: null,
  tabIndex: null,
  tooltip: null,
  tooltipOptions: null,
  value: null,
  valueTemplate: null
};

import { tip } from '../tooltip/Tooltip';
import UniqueComponentId from '../utils/UniqueComponentId';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';

import { classNames } from '../utils/ClassNames';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import FilterUtils from '../utils/FilterUtils';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      focused: false,
      overlayVisible: false
    };

    this.onClick = this.onClick.bind(this);
    this.onFilterContainerClick = this.onFilterContainerClick.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onEditableInputChange = this.onEditableInputChange.bind(this);
    this.onEditableInputFocus = this.onEditableInputFocus.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
    this.onFilterInputChange = this.onFilterInputChange.bind(this);
    this.onFilterInputKeyDown = this.onFilterInputKeyDown.bind(this);
    this.onPanelClick = this.onPanelClick.bind(this);
    this.onOverlayEnter = this.onOverlayEnter.bind(this);
    this.onOverlayEntered = this.onOverlayEntered.bind(this);
    this.onOverlayExit = this.onOverlayExit.bind(this);
    this.onOverlayExited = this.onOverlayExited.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clear = this.clear.bind(this);

    this.id = this.props.id || UniqueComponentId();
    this.overlayRef = React.createRef();
  }

  onClick(event) {
    if (this.props.disabled) {
      return;
    }

    if (!this.isClearClicked(event) && event.target.tagName !== 'INPUT') {
      this.focusInput.focus();

      if (this.state.overlayVisible) {
        this.hideOverlay();
      } else {
        this.showOverlay();
      }
    }
  }

  onFilterContainerClick(event) {
    event.stopPropagation();
  }

  onInputFocus(event) {
    event.persist();
    this.setState({ focused: true }, () => {
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    });
  }

  onInputBlur(event) {
    event.persist();
    this.setState({ focused: false }, () => {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    });
  }

  onPanelClick(event) {
    OverlayEventBus.emit('overlay-click', {
      originalEvent: event,
      target: this.container
    });
  }

  onInputKeyDown(event) {
    switch (event.which) {
      //down
      case 40:
        this.onDownKey(event);
        break;

      //up
      case 38:
        this.onUpKey(event);
        break;

      //space
      case 32:
        if (this.state.overlayVisible) this.hideOverlay();
        else this.showOverlay();

        event.preventDefault();
        break;

      //enter
      case 13:
        this.hideOverlay();
        event.preventDefault();
        break;

      //escape and tab
      case 27:
      case 9:
        this.hideOverlay();
        break;

      default:
        this.search(event);
        break;
    }
  }

  onFilterInputKeyDown(event) {
    switch (event.which) {
      //down
      case 40:
        this.onDownKey(event);
        break;

      //up
      case 38:
        this.onUpKey(event);
        break;

      //enter and escape
      case 13:
      case 27:
        this.hideOverlay();
        event.preventDefault();
        break;

      default:
        break;
    }
  }

  onUpKey(event) {
    let visibleOptions = this.getVisibleOptions();
    if (visibleOptions) {
      let prevOption = this.findPrevOption(this.getSelectedOptionIndex());
      if (prevOption) {
        this.selectItem({
          originalEvent: event,
          option: prevOption
        });
      }
    }

    event.preventDefault();
  }

  onDownKey(event) {
    let visibleOptions = this.getVisibleOptions();
    if (visibleOptions) {
      if (!this.state.overlayVisible && event.altKey) {
        this.showOverlay();
      } else {
        let nextOption = this.findNextOption(this.getSelectedOptionIndex());
        if (nextOption) {
          this.selectItem({
            originalEvent: event,
            option: nextOption
          });
        }
      }
    }

    event.preventDefault();
  }

  findNextOption(index) {
    let visibleOptions = this.getVisibleOptions();

    if (this.props.optionGroupLabel) {
      let groupIndex = index === -1 ? 0 : index.group;
      let optionIndex = index === -1 ? -1 : index.option;
      let option = this.findNextOptionInList(this.getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);

      if (option) return option;
      else if (groupIndex + 1 !== visibleOptions.length) return this.findNextOption({ group: groupIndex + 1, option: -1 });
      else return null;
    } else {
      return this.findNextOptionInList(visibleOptions, index);
    }
  }

  findNextOptionInList(list, index) {
    let i = index + 1;
    if (i === list.length) {
      return null;
    }

    let option = list[i];
    if (this.isOptionDisabled(option)) return this.findNextOptionInList(i);
    else return option;
  }

  findPrevOption(index) {
    if (index === -1) {
      return null;
    }

    let visibleOptions = this.getVisibleOptions();

    if (this.props.optionGroupLabel) {
      let groupIndex = index.group;
      let optionIndex = index.option;
      let option = this.findPrevOptionInList(this.getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);

      if (option) return option;
      else if (groupIndex > 0)
        return this.findPrevOption({ group: groupIndex - 1, option: this.getOptionGroupChildren(visibleOptions[groupIndex - 1]).length });
      else return null;
    } else {
      return this.findPrevOptionInList(visibleOptions, index);
    }
  }

  findPrevOptionInList(list, index) {
    let i = index - 1;
    if (i < 0) {
      return null;
    }

    let option = list[i];
    if (this.isOptionDisabled(option)) return this.findPrevOption(i);
    else return option;
  }

  search(event) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    const char = String.fromCharCode(event.keyCode);
    this.previousSearchChar = this.currentSearchChar;
    this.currentSearchChar = char;

    if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;
    else this.searchValue = this.searchValue ? this.searchValue + char : char;

    if (this.searchValue) {
      let searchIndex = this.getSelectedOptionIndex();
      let newOption = this.props.optionGroupLabel ? this.searchOptionInGroup(searchIndex) : this.searchOption(++searchIndex);
      if (newOption) {
        this.selectItem({
          originalEvent: event,
          option: newOption
        });
        this.selectedOptionUpdated = true;
      }
    }

    this.searchTimeout = setTimeout(() => {
      this.searchValue = null;
    }, 250);
  }

  searchOption(index) {
    let option;

    if (this.searchValue) {
      let visibleOptions = this.getVisibleOptions();
      option = this.searchOptionInRange(index, visibleOptions.length);

      if (!option) {
        option = this.searchOptionInRange(0, index);
      }
    }

    return option;
  }

  searchOptionInRange(start, end) {
    let visibleOptions = this.getVisibleOptions();
    for (let i = start; i < end; i++) {
      let opt = visibleOptions[i];
      if (this.matchesSearchValue(opt)) {
        return opt;
      }
    }

    return null;
  }

  searchOptionInGroup(index) {
    let searchIndex = index === -1 ? { group: 0, option: -1 } : index;
    let visibleOptions = this.getVisibleOptions();

    for (let i = searchIndex.group; i < visibleOptions.length; i++) {
      let groupOptions = this.getOptionGroupChildren(visibleOptions[i]);
      for (let j = searchIndex.group === i ? searchIndex.option + 1 : 0; j < groupOptions.length; j++) {
        if (this.matchesSearchValue(groupOptions[j])) {
          return groupOptions[j];
        }
      }
    }

    for (let i = 0; i <= searchIndex.group; i++) {
      let groupOptions = this.getOptionGroupChildren(visibleOptions[i]);
      for (let j = 0; j < (searchIndex.group === i ? searchIndex.option : groupOptions.length); j++) {
        if (this.matchesSearchValue(groupOptions[j])) {
          return groupOptions[j];
        }
      }
    }

    return null;
  }

  matchesSearchValue(option) {
    let label = this.getOptionLabel(option).toLocaleLowerCase(this.props.filterLocale);
    return label.startsWith(this.searchValue.toLocaleLowerCase(this.props.filterLocale));
  }

  onEditableInputChange(event) {
    this.props.onChange({
      originalEvent: event.originalEvent,
      value: event.target.value,
      stopPropagation: () => {},
      preventDefault: () => {},
      target: {
        name: this.props.name,
        id: this.id,
        value: event.target.value
      }
    });
  }

  onEditableInputFocus(event) {
    event.persist();
    this.setState({ focused: true }, () => {
      this.hideOverlay();

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    });
  }

  onOptionClick(event) {
    const option = event.option;

    if (!option.disabled) {
      this.selectItem(event);
      this.focusInput.focus();
    }

    this.hideOverlay();
  }

  onFilterInputChange(event) {
    this.setState({ filter: event.target.value });
  }

  resetFilter(callback) {
    this.setState({ filter: '' }, callback);
  }

  clear(event) {
    this.props.onChange({
      originalEvent: event,
      value: undefined,
      stopPropagation: () => {},
      preventDefault: () => {},
      target: {
        name: this.props.name,
        id: this.id,
        value: undefined
      }
    });

    this.updateEditableLabel();
  }

  selectItem(event) {
    let currentSelectedOption = this.getSelectedOption();

    if (currentSelectedOption !== event.option) {
      this.updateEditableLabel(event.option);
      const optionValue = this.getOptionValue(event.option);

      this.props.onChange({
        originalEvent: event.originalEvent,
        value: optionValue,
        stopPropagation: () => {},
        preventDefault: () => {},
        target: {
          name: this.props.name,
          id: this.id,
          value: optionValue
        }
      });
    }
  }

  getSelectedOption() {
    let index = this.getSelectedOptionIndex();
    return index !== -1
      ? this.props.optionGroupLabel
        ? this.getOptionGroupChildren(this.props.options[index.group])[index.option]
        : this.props.options[index]
      : null;
  }

  getSelectedOptionIndex() {
    if (this.props.value != null && this.props.options) {
      if (this.props.optionGroupLabel) {
        for (let i = 0; i < this.props.options.length; i++) {
          let selectedOptionIndex = this.findOptionIndexInList(this.props.value, this.getOptionGroupChildren(this.props.options[i]));
          if (selectedOptionIndex !== -1) {
            return { group: i, option: selectedOptionIndex };
          }
        }
      } else {
        return this.findOptionIndexInList(this.props.value, this.props.options);
      }
    }

    return -1;
  }

  findOptionIndexInList(value, list) {
    const key = this.equalityKey();
    for (let i = 0; i < list.length; i++) {
      if (ObjectUtils.equals(value, this.getOptionValue(list[i]), key)) {
        return i;
      }
    }

    return -1;
  }

  isSelected(option) {
    return ObjectUtils.equals(this.props.value, this.getOptionValue(option), this.equalityKey());
  }

  equalityKey() {
    return this.props.optionValue ? null : this.props.dataKey;
  }

  showOverlay() {
    this.setState({ overlayVisible: true });
  }

  hideOverlay() {
    this.setState({ overlayVisible: false });
  }

  onOverlayEnter() {
    this.overlayRef.current.style.zIndex = String(DomHandler.generateZIndex());
    this.alignPanel();
    this.scrollInView();
  }

  onOverlayEntered() {
    this.bindDocumentClickListener();
    this.bindScrollListener();
    this.bindResizeListener();

    if (this.props.filter && this.props.filterInputAutoFocus) {
      this.filterInput.focus();
    }
  }

  onOverlayExit() {
    this.unbindDocumentClickListener();
    this.unbindScrollListener();
    this.unbindResizeListener();
  }

  onOverlayExited() {
    if (this.props.filter && this.props.resetFilterOnHide) {
      this.resetFilter();
    }

    DomHandler.revertZIndex();
  }

  alignPanel() {
    const container = this.input.parentElement;
    this.overlayRef.current.style.minWidth = DomHandler.getOuterWidth(container) + 'px';
    DomHandler.absolutePosition(this.overlayRef.current, container);
  }

  scrollInView() {
    let highlightItem = DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');
    if (highlightItem) {
      highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
    }
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = event => {
        if (this.state.overlayVisible && this.isOutsideClicked(event)) {
          this.hideOverlay();
        }
      };

      document.addEventListener('click', this.documentClickListener);
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      document.removeEventListener('click', this.documentClickListener);
      this.documentClickListener = null;
    }
  }

  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
        if (this.state.overlayVisible) {
          this.hideOverlay();
        }
      });
    }

    this.scrollHandler.bindScrollListener();
  }

  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }

  bindResizeListener() {
    if (!this.resizeListener) {
      this.resizeListener = () => {
        if (this.state.overlayVisible) {
          this.hideOverlay();
        }
      };
      window.addEventListener('resize', this.resizeListener);
    }
  }

  unbindResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }
  }

  isOutsideClicked(event) {
    return (
      this.container &&
      !(
        this.container.isSameNode(event.target) ||
        this.isClearClicked(event) ||
        this.container.contains(event.target) ||
        (this.overlayRef && this.overlayRef.current.contains(event.target))
      )
    );
  }

  isClearClicked(event) {
    return DomHandler.hasClass(event.target, 'p-dropdown-clear-icon');
  }

  updateEditableLabel(option) {
    if (this.input) {
      this.input.value = option ? this.getOptionLabel(option) : this.props.value || '';
    }
  }

  hasFilter() {
    return this.state.filter && this.state.filter.trim().length > 0;
  }

  getOptionLabel(option) {
    return this.props.optionLabel
      ? ObjectUtils.resolveFieldData(option, this.props.optionLabel)
      : option['label'] !== undefined
      ? option['label']
      : option;
  }

  getOptionValue(option) {
    return this.props.optionValue
      ? ObjectUtils.resolveFieldData(option, this.props.optionValue)
      : option['value'] !== undefined
      ? option['value']
      : option;
  }

  getOptionRenderKey(option) {
    return this.props.dataKey ? ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
  }

  isOptionDisabled(option) {
    return this.props.optionDisabled ? ObjectUtils.resolveFieldData(option, this.props.optionDisabled) : false;
  }

  getOptionGroupRenderKey(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
  }

  getOptionGroupLabel(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
  }

  getOptionGroupChildren(optionGroup) {
    return ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren);
  }

  checkValidity() {
    return this.nativeSelect.checkValidity();
  }

  getVisibleOptions() {
    if (this.hasFilter()) {
      let filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
      let searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];

      if (this.props.optionGroupLabel) {
        let filteredGroups = [];
        for (let optgroup of this.props.options) {
          let filteredSubOptions = FilterUtils.filter(
            this.getOptionGroupChildren(optgroup),
            searchFields,
            filterValue,
            this.props.filterMatchMode,
            this.props.filterLocale
          );
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push({ ...optgroup, ...{ items: filteredSubOptions } });
          }
        }
        return filteredGroups;
      } else {
        return FilterUtils.filter(this.props.options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
      }
    } else {
      return this.props.options;
    }
  }

  updateInputField() {
    if (this.props.editable && this.input) {
      let selectedOption = this.getSelectedOption();
      const label = selectedOption ? this.getOptionLabel(selectedOption) : null;
      const value = label || this.props.value || '';
      this.input.value = value;
    }
  }

  componentDidMount() {
    if (this.props.autoFocus && this.focusInput) {
      this.focusInput.focus();
    }

    if (this.props.tooltip) {
      this.renderTooltip();
    }

    this.updateInputField();
    this.nativeSelect.selectedIndex = 1;
  }

  componentWillUnmount() {
    this.unbindDocumentClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }

    if (this.tooltip) {
      this.tooltip.destroy();
      this.tooltip = null;
    }

    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    DomHandler.revertZIndex();
  }

  componentDidUpdate(prevProps) {
    if (this.state.overlayVisible) {
      if (this.props.filter) {
        this.alignPanel();
      }

      if (prevProps.value !== this.props.value) {
        this.scrollInView();
      }
    }

    if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
      if (this.tooltip) this.tooltip.update({ content: this.props.tooltip, ...(this.props.tooltipOptions || {}) });
      else this.renderTooltip();
    }

    if (this.state.filter && (!this.props.options || this.props.options.length === 0)) {
      this.setState({ filter: '' });
    }

    this.updateInputField();
    this.nativeSelect.selectedIndex = 1;
  }

  renderTooltip() {
    this.tooltip = tip({
      target: this.container,
      content: this.props.tooltip,
      options: this.props.tooltipOptions
    });
  }

  renderGroupChildren(optionGroup) {
    const groupChildren = this.getOptionGroupChildren(optionGroup);
    return groupChildren.map((option, j) => {
      let optionLabel = this.getOptionLabel(option);
      let optionKey = j + '_' + this.getOptionRenderKey(option);
      let disabled = this.isOptionDisabled(option);

      return (
        <DropdownItem
          key={optionKey}
          label={optionLabel}
          option={option}
          template={this.props.itemTemplate}
          selected={this.isSelected(option)}
          disabled={disabled}
          onClick={this.onOptionClick}
        />
      );
    });
  }
}
