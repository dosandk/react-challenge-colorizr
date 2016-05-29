import React from 'react';
import ColorPicker from 'react-color-picker'
import './index.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isColorPickerVisible: false
        };

        this.onMixerClick = () => {
            this.setState({ isColorPickerVisible: !this.state.isColorPickerVisible });
        };

        this.onChangeMixColor = (color) => {
            this.props.changeMixedColor(color)
        }
    }

    render () {
        const singleHeader = () => {
            return (
                <header className="create__header">
                    <div>
                        <h2>{ this.props.palletName }</h2>
                    </div>
                </header>
            );
        };

        const headerWithColorPicker = () => {
            return (
                <header className="create__header">
                    <div>
                        <h2>{ this.props.palletName }</h2>
                    <span className="mixer"
                          onClick={ this.onMixerClick }
                          style={{ background: this.props.mixedColor }}></span>
                    </div>
                    <div className={'cp_shown ' + (this.state.isColorPickerVisible ? '' : 'hide')} >
                        <ColorPicker defaultValue={this.props.mixedColor} onDrag={ this.onChangeMixColor } />
                    </div>
                </header>
            );
        };

        return this.props.showColorPicker ? headerWithColorPicker() : singleHeader();
    }
}

export default function colorPallet(props) {
    const currentState = {
        mixedColor: props.mixedColor || '#894B9D',
        showColorPicker: props.showColorPicker || false,
        palletName: props.palletName || 'Colors pallet',
        onChangeTheme: props.onChangeTheme || null,
        removeAllColors: props.removeAllColors || null,
        onSelectAllColors: props.onSelectAllColors || null,
        showRemoveAllBtn: props.showRemoveAllBtn || false,
        isColorPickerVisible: props.isColorPickerVisible || false,
        changeMixedColor: props.changeMixedColor || null,
        theme: props.theme || 'light'
    };

    return (
        <div className="container color-samples-container">
            <Header palletName={ currentState.palletName }
                    mixedColor={ currentState.mixedColor}
                    changeMixedColor= { currentState.changeMixedColor }
                    showColorPicker={ currentState.showColorPicker } />

            <div className="color-samples-wrapper">

                { props.children }

                <footer className="color-samples-footer">
                    <button className="btn btn--default" onClick={currentState.onChangeTheme} >
                        { (currentState.theme === 'dark' ? 'Light background' : 'Dark background') }
                    </button>

                    <button className="btn btn--default"
                            onClick={currentState.onSelectAllColors}>
                        Select all
                    </button>
                    <button className={'btn btn--danger ' + (currentState.showRemoveAllBtn ? '' : 'hide')}
                            onClick={currentState.removeAllColors}>
                        Remove all
                    </button>
                </footer>
            </div>
        </div>
    );
}