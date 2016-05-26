import React from 'react';
import ColorPicker from 'react-color-picker'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectColor } from '../../actions'
import './index.scss'

class Color extends React.Component {
    constructor(props) {
        super(props);

        this.onSelectColor = () => {
            this.props.selectColor(this.props.color)
        }
    }

    render() {
        return (
            <li className="color-sample color-sample--selected"
                onClick={this.onSelectColor}
                style={{background: '#004B87'}}>
                {(() => {
                    if (true) {
                        return <i className="fa fa-times" style={{color: '#fff'}}></i>
                    }
                })()}
            </li>
        )
    }
}

class MixedWith extends React.Component {
    render() {
        console.error('MixedWith');
        console.log(this.props);

        return (
            <div className="container color-samples-container">
                <header className="create__header">
                    <h2>Mixed with </h2>
                    <span className="mixer" style={{background: '#894B9D'}}></span>
                </header>
                <div className="cp_shown" style={{display: 'none'}} >
                    <ColorPicker defaultValue='#452135' onDrag={() => {}} />
                </div>
                <div className="color-samples-wrapper">
                    <ul className="color-samples">
                        {[...Array(10)].map((x, i) =>
                            <Color key={i + 1} color={ this.props.mainColor } selectColor={ this.props.selectColor } />
                        )}
                    </ul>
                    
                    <footer className="color-samples-footer">
                        <button className="btn btn--default">
                            Dark background
                        </button>
                        <button className="btn btn--default">Select all</button>
                        <button className="btn btn--danger"  >Remove all</button>
                    </footer>
                </div>
            </div>
        );
    }
}

MixedWith.propTypes = {};
MixedWith.defaultProps = {};

function mapStateToProps(state) {
    return state.SetUpColors;
}

function mapDispatchToProps(dispatch) {
    return {
        selectColor: bindActionCreators(selectColor, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MixedWith)