import React from 'react';
import './index.scss'

const Color = (props) => {

    return(
        <div className="scheme__color" style={{ background: props.color}}></div>
    )
};


class ColorsPreset extends React.Component {
    constructor(props) {
        super(props);
    }

    getColorsItems() {
        return this.props.colors.map(function(color) {
            return <Color key = { color } color = { color } />
        })
    }

    render() {
        return (
            <div className="scheme">
                <header className="scheme__header">
                    <h2>{ this.props.name }</h2>
                </header>
                <div className="scheme__body">
                    { this.getColorsItems() }
                </div>
            </div>
        );
    }
}

ColorsPreset.propTypes = {};
ColorsPreset.defaultProps = {};

export default ColorsPreset;