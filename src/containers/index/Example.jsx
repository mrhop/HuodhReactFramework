/**
 * Created by Donghui Huo on 2018/2/1.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Example from '../../components/index/Example'
import {exampleWelcome} from '../../redux/index/actions'

class ExampleContainer extends Component {
  render() {
    return (
      <div className="ExampleContainer">
        <Example {...this.props}/>
      </div>
    );
  }
}
ExampleContainer.propTypes = {
  example: PropTypes.object.isRequired,
  exampleWelcome: PropTypes.func
}

const mapStateToProps = (state) => ({
  example: state.example,
})

const mapDispatchToProps = {
  exampleWelcome
}
const ExampleContainerProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleContainer)
export default ExampleContainerProxy;
