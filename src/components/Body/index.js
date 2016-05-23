import React from 'react';
import './index.scss';

export default function Body() {
    return (
        <div className="content">
            <div className="create"  >
                <div className="create__container">
                    <h1 className="title">Choose your color</h1>

                    <div className=" cp">
                        <div className=" react-color-picker__saturation-spectrum"  >
                            <div className="react-color-picker__saturation-white">
                                <div className="react-color-picker__saturation-black"></div>
                            </div>
                            <div className="react-color-picker__saturation-drag"  >
                                <div className="react-color-picker__saturation-inner"></div>
                            </div>
                        </div>
                        <div className="react-color-picker__hue-spectrum"  >
                            <div className="react-color-picker__hue-drag"  >
                                <div className="react-color-picker__hue-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selected">
                    <h2 className="selected__title">Select up to ten colors</h2>

                    <p>Select Colors by clicking on them</p>

                    <div className="selected__colors">
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                        <div className="selected__color"  ></div>
                    </div>
                </div>
                <div className="container color-samples-container">
                    <h2>Darker and Lighter</h2>

                    <div className="color-samples-wrapper">
                        <div className="color-samples">
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                        </div>
                        <footer className="color-samples-footer">
                            <button className="btn btn--default">
                                Dark background
                            </button>
                            <button className="btn btn--default">Select all</button>
                            <button className="btn btn--danger"  >Remove all</button>
                        </footer>
                    </div>
                </div>
                <div className="container color-samples-container">
                    <header className="create__header">
                        <h2>Mixed with </h2>
                        <span className="mixer">&nbsp;</span>
                    </header>
                    <div className="cp_shown">
                        <div className="cp">
                            <div className="react-color-picker__saturation-spectrum"  >
                                <div className="react-color-picker__saturation-white">
                                    <div className="react-color-picker__saturation-black"></div>
                                </div>
                                <div className="react-color-picker__saturation-drag"  >
                                    <div className="react-color-picker__saturation-inner"></div>
                                </div>
                            </div>
                            <div className="react-color-picker__hue-spectrum"  >
                                <div className="react-color-picker__hue-drag"  >
                                    <div className="react-color-picker__hue-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="color-samples-wrapper">
                        <div className="color-samples">
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                            <div className="color-sample"  >
                            </div>
                        </div>
                        <footer className="color-samples-footer">
                            <button className="btn btn--default">
                                Dark background
                            </button>
                            <button className="btn btn--default">Select all</button>
                            <button className="btn btn--danger"  >Remove all</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}