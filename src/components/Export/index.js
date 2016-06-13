import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.scss'

const Row = (props) => {
    const { rgb, hex, changeColorName, colorName } = props;

    return (
        <tr>
            <td style={{ background: rgb }}></td>
            <td className="hex">{ hex }</td>
            <td>{ rgb }</td>
            <td>
                <input type="text"
                       onChange = { changeColorName }
                       value = { colorName } />
            </td>
        </tr>
    )
}

class Preprocess extends Component {
    state = {
        activePreproc: 'sass'
    }

    changePreproc = (type) => (e) => {
        this.setState({
            activePreproc: type
        });
    }

    getCodeSnippetItems = () => {

        return this.props.colors.map((color, index) =>
            <CodeSnippet color = { color }
                         colorName = { this.props.getColorName(color, index) }
                         index = { index }
                         prepcoc = { this.state.activePreproc } />
        );
    }

    render() {
        return (
            <div className="preprops">
                <h2 className="export__title">Export your code</h2>

                <div className="preprops__links">
                    <button className= { 'btn ' + (this.state.activePreproc === 'sass' ? 'btn--primary' : '') } onClick = { this.changePreproc('sass') } >sass</button>
                    <button className= { 'btn ' + (this.state.activePreproc === 'less' ? 'btn--primary' : '')} onClick = { this.changePreproc('less') } >less</button>
                    <button className= { 'btn ' + (this.state.activePreproc === 'stylus' ? 'btn--primary' : '')} onClick = { this.changePreproc('stylus') } >stylus</button>
                </div>

                <div className="preprops__code">
                    <pre data-initialized="true" data-gclp-id="0">
                        { this.getCodeSnippetItems() }
                    </pre>
                </div>
            </div>
        );
    }
}

const CodeSnippet = (props) => {
    let colorName;
    let colorVal;

    switch (props.prepcoc) {
    case 'sass':
        colorName = '$' + props.colorName
        colorVal = ': ' + props.color + ';'
        break;
    case 'less':
        colorName = '@' + props.colorName
        colorVal = ': ' + props.color + ';'
        break;
    case 'stylus':
        colorName = props.colorName
        colorVal = ' = ' + props.color
        break;
    default:
        colorName = '$' + props.colorName
        colorVal = ': ' + props.color + ';'
    }

    return (
        <code>
            <span className="code__colored">{ colorName }</span>{ colorVal }<br />
        </code>
    )
}

export default class Export extends Component {
    state = {
        defaultColorName: 'color'
    }

    changeColorName = (color) => (e) => {
        const colorName = e.target.value.trim();

        this.setState({
            [color]: {
                colorName
            }
        });
    }

    hexToRGBa = (hex) => {
        hex = hex.replace('#', '');

        const r = parseInt(hex.substring(0,2), 16);
        const g = parseInt(hex.substring(2,4), 16);
        const b = parseInt(hex.substring(4,6), 16);

        return `rgb( ${r}, ${g}, ${b})`;
    };

    getColorName = (hex, index) => {
        return typeof this.state[hex] !== 'undefined'
            ? this.state[hex].colorName
            : this.state.defaultColorName + '-' + (++index);
    }

    getRowsItems = () => {
        const { selectedColors } = this.props.common;

        if (selectedColors.length) {
            return selectedColors.map((color, index) =>
                <Row index = { index }
                     hex = { color }
                     rgb = { this.hexToRGBa(color) }
                     colorName = { this.getColorName(color, index) }
                     changeColorName = { this.changeColorName(color) } />
            )
        }
        else {
            return <tr><td colSpan="4" style={{ textTransform: 'capitalize' }}>Select colors before exporting</td></tr>
        }
    }

    getPreprocessContainer = () => {
        const { selectedColors } = this.props.common;

        return selectedColors.length
            ? <Preprocess colors = { this.props.common.selectedColors }
                          getColorName = { this.getColorName }
                          colorName = { this.state.colorName } />
            : '';
    }

    render() {
        return (
            <div className="export container"><h1>Customize and Export colors for Sass, Less or Stylus</h1>
                <table className="export-table">
                    <thead>
                    <tr>
                        <th>Color</th>
                        <th>Hex value</th>
                        <th>RGB value</th>
                        <th>Variable name</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.getRowsItems() }
                    </tbody>
                </table>
                { this.getPreprocessContainer() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(Export);