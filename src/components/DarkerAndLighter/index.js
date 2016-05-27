import React from 'react'
import changeTheme from '../../actions/change-theme'
import ColorsList from '../../containers/ColorsList'
import selectAllColors from '../../actions/select-all-colors'
import removeAllColors from '../../actions/remove-all-colors'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './index.scss'

class DarkerAndLighter extends React.Component {
    render() {
        console.error('DarkerAndLighter');
        console.log('this.props', this.props);

        const onChangeTheme = () => {
            const theme = this.props.DarkerAndLighter.theme;

            switch (theme) {
            case 'light':
                this.props.changeTheme('dark');
                break;
            case 'dark':
                this.props.changeTheme('light');
                break;
            }
        };

        const onSelectAllColors = () => {
            this.props.selectAllColors(this.props.common.shadedColors);
        };

        return (
            <div className="container color-samples-container">
                <h2>Darker and Lighter</h2>

                <div className="color-samples-wrapper">

                    <ColorsList />

                    <footer className="color-samples-footer">
                        <button className="btn btn--default" onClick={onChangeTheme} >
                            { (this.props.DarkerAndLighter.theme === 'dark' ? 'Light background' : 'Dark background') }
                        </button>
                        <button className="btn btn--default" onClick={onSelectAllColors}>Select all</button>
                        <button className={'btn btn--danger ' + (this.props.DarkerAndLighter.showRemoveAllBtn ? '' : 'hide')}
                                onClick={this.props.removeAllColors}>
                            Remove all
                        </button>
                    </footer>
                </div>
            </div>
        );
    }
}

DarkerAndLighter.propTypes = {};
DarkerAndLighter.defaultProps = {};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        changeTheme: bindActionCreators(changeTheme, dispatch),
        selectAllColors: bindActionCreators(selectAllColors, dispatch),
        removeAllColors: bindActionCreators(removeAllColors, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkerAndLighter)