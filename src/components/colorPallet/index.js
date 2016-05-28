import React from 'react';
import ColorPicker from 'react-color-picker'
import './index.scss'

const Header = (props) => {
    const singleHeader = () => {
        return (
            <header className="create__header">
                <div>
                    <h2>{ props.palletName }</h2>
                </div>
            </header>
        );
    };

    const headerWithColorPicker = () => {
        return (
            <header className="create__header">
                <div>
                    <h2>{ props.palletName }</h2>
                    <span className="mixer" style={{background: '#894B9D'}}></span>
                </div>
                <div className="cp_shown">
                    <ColorPicker defaultValue='#452135' onDrag={() => {}} />
                </div>
            </header>
        );
    };

    return props.showColorPicker ? headerWithColorPicker() : singleHeader();
};

export default function colorPallet(props) {
    const currentState = {
        showColorPicker: props.showColorPicker || false,
        palletName: props.palletName || 'Colors pallet',
        onChangeTheme: props.onChangeTheme || null,
        removeAllColors: props.removeAllColors || null,
        onSelectAllColors: props.onSelectAllColors || null,
        showRemoveAllBtn: props.showRemoveAllBtn || false,
        theme: props.theme || 'light'
    };

    return (
        <div className="container color-samples-container">
            <Header palletName={ currentState.palletName }
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