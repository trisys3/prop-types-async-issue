const {Component} = require('react');
const PropTypes = require('prop-types');

// uncomment to STOP getting warned about the unused prop
// myFunc.propTypes = {warned: PropTypes.any};
function myFunc({warned}) {
  return <div></div>;
}

// uncommenting still does NOT get warned about the unused prop
// myAsync.propTypes = {unWarned: PropTypes.any};
async function myAsync({unWarned}) {
  return <div></div>;
}

class MyClass extends Component {
  static propTypes = {
    // uncomment to STOP getting warned about the unused prop
    // warnedDestructured: PropTypes.any,

    // uncomment to STOP getting warned about the unused prop
    // warnedRegular: PropTypes.any,

    // uncommenting still does NOT cause warnings
    unWarnedDestructured: PropTypes.any,
  };

  myDestructured() {
    const {warnedDestructured} = this.props;
  }

  async myAsyncMethod() {
    // comment out to get WARNED about an unused prop
    const {unWarnedDestructured} = this.props;
  }

  async myAsyncRegular() {
    const warnedRegular = this.props.warnedRegular;
  }
}
