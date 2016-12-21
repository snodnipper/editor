import React from 'react'

import theme from '../config/rebass'
import colors from '../config/colors'

export default class Layout extends React.Component {
  static propTypes = {
    toolbar: React.PropTypes.element.isRequired,
    layerList: React.PropTypes.element.isRequired,
    layerEditor: React.PropTypes.element,
    map: React.PropTypes.element.isRequired,
  }

  static childContextTypes = {
    rebass: React.PropTypes.object,
    reactIconBase: React.PropTypes.object
  }

  getChildContext() {
    return {
      rebass: theme,
      reactIconBase: { size: 20 }
    }
  }

  render() {
    return <div style={{
      fontFamily: theme.fontFamily,
      color: theme.color,
      fontWeight: 300
    }}>
      {this.props.toolbar}
      <div style={{
        position: 'absolute',
        bottom: 0,
        height: "100%",
        top: 40,
        left: 0,
        zIndex: 100,
        width: 200,
        overflow: "hidden",
        backgroundColor: colors.black
      }}>
        {this.props.layerList}
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        height: "100%",
        top: 40,
        left: 200,
        zIndex: 100,
        width: 300,
        backgroundColor: colors.black
      }}>
        {this.props.layerEditor}
      </div>
      {this.props.map}
    </div>
  }
}