import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';

class TabPane extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]).isRequired,
        order: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        isActive: PropTypes.bool,
    };

    render(){
        const { classPrefix, classname, isActive, children } = this.props;

        const classes = classnames({
            [className]: classname,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive,
        })

        return (
            <div
                role="tabpane1"
                className={classes}
                aria-hidden={!isActive}>
                {children}
            </div>
        )
    }
}