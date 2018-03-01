import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/dropdown_style.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selection[0],
      menuClassNames: { true: 'showMenu', false: 'hideMenu' },
      showMenu: false,
      hovered: null,
    };
  }

  toggleMenu() {
    const showMenu = !this.state.showMenu;
    this.setState({
      showMenu: showMenu,
    });
  }

  handleHover(e, item) {
    this.setState({
      hovered: item,
    });
  }

  render() {
    const selectionDivs = this.props.selection.map((item, index) => {
      let className;
      if (item === this.state.selected || item === this.state.hovered) {
        className = 'highlight';
      } else {
        className = 'noHighlight';
      }
      return (<div className={style[className]} key={item} onMouseEnter={e => this.handleHover(e, item)}>{item}</div>);
    });

    return (
      <div className={style.container} onClick={() => this.toggleMenu()}>
        <div className={style.label}>{this.props.label}</div>
        <div className={style.selected}>
          {this.state.selected}
          <div className={style[this.state.menuClassNames[this.state.showMenu]]}>{selectionDivs}</div>
        </div>
        <i className={`material-icons ${style.icon}`}>arrow_drop_down</i>
      </div>
    );
  }
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default Dropdown;