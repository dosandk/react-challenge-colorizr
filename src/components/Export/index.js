import React from 'react';
import './index.scss'

export default function Export() {
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
                <tr>
                    <td style={{ background: 'rgb(0, 0, 0)' }}></td>
                    <td className="hex">#000000</td>
                    <td>rgb(0, 0, 0)</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td style={{ background: 'rgb(0, 0, 21)' }}></td>
                    <td className="hex">#000015</td>
                    <td>rgb(0, 0, 21)</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td style={{ background: 'rgb(0, 23, 47)' }}></td>
                    <td className="hex">#00172f</td>
                    <td>rgb(0, 23, 47)</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td style={{ background: 'rgb(11, 48, 72) '}}></td>
                    <td className="hex">#0b3048</td>
                    <td>rgb(11, 48, 72)</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td style={{ background: 'rgb(37, 74, 98)' }}></td>
                    <td className="hex">#254a62</td>
                    <td>rgb(37, 74, 98)</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td style={{ background: 'rgb(62, 99, 123)' }} ></td>
                    <td className="hex">#3e637b</td>
                    <td>rgb(62, 99, 123)</td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td style={{ background: 'rgb(88, 125, 149)' }} ></td>
                    <td className="hex">#587d95</td>
                    <td>rgb(88, 125, 149)</td>
                    <td><input type="text" /></td>
                </tr>
                </tbody>
            </table>
            <div className="preprops">
                <h2 className="export__title">Export your code</h2>

                <div className="preprops__links">
                    <button className="btn btn--primary">sass</button>
                    <button className="btn btn--default">less</button>
                    <button className="btn btn--default">stylus</button>
                </div>

                <div className="preprops__code">
                    <pre data-initialized="true" data-gclp-id="0">
                        <code>
                            <span className="code__colored">
                                $color-1
                            </span>
                            : #000000;
                            <br />
                        </code>
                        <code>
                            <span className="code__colored">
                                $color-2
                            </span>
                                : #000015;
                            <br/>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}