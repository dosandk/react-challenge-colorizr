import React from 'react';
import ColorPicker from 'react-color-picker'
import recalculateMixedColors from '../../utils/recalculate-mixed-colors'
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
            console.error(111);
            console.log(color);

            const mixedColors = recalculateMixedColors({ mainColor: props.mainColor, mixedColor: color });

            this.props.changeMixedColor({
                mixedColor: color,
                mixedColors
            })
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

export default function ColorPallet(props) {
    const currentState = {
        mixedColor: props.mixedColor || '#894B9D',
        mainColor: props.mixedColor || '#894B9D',
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
                    mixedColor={ currentState.mixedColor }
                    mainColor={ currentState.mainColor }
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