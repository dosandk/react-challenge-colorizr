import React from 'react'
import './index.scss'

const Color = (props) => {
    return(
        <div className="sample">
            <span className="sample__color" style={{ background: props.color }}></span>
            <span className="sample__name">#D32F2F</span>
        </div>
    );
}

const colorsFlatArr = [
    "#26b99a", "#4fba6f", "#14a085", "#24ae5f", "#3b97d3", "#2980ba", "#955ba5",
    "#894b9d", "#35495e", "#2c3e50", "#f0c419", "#f29c1f", "#e57e25", "#d25627",
    "#e64c3c", "#c03a2b", "#ecf0f1", "#bdc3c7", "#95a5a5", "#7f8c8d"
];

const colorsMaterial = [
    "#d32f2f", "#ad1457", "#6a1b9a", "#4527a0", "#283593", "#1565C0",
    "#0277bd", "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24",
    "#f9a825", "#ff8f00", "#ef6c00", "#d84315", "#4e342e", "#424242",
    "#37474f"
];

const ColorsSetList = (props) => {
    let colorsItems;
    let colors;

    switch (props.name) {
    case 'Flat':
        colors = colorsFlatArr;
        break;
    case 'Material':
        colors = colorsMaterial;
        break;
    }

    colorsItems = colors.map(function(color) {
        return <Color key={ color } color={ color } />
    });

    return (
        <div className="holder__body">
            { colorsItems }
        </div>
    );
};

export default function ColorsSet(props) {
    return (
        <div className="holder">

            <header className="holder__header">
                <h2 className="holder__title">{ props.name }</h2>
            </header>

            <ColorsSetList name={ props.name } />
        </div>
    )
};