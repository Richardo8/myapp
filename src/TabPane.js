import React, { Component, PropTypes } from 'react';
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
        const { classPrefix, className, isActive, children } = this.props;

        const classes = classnames({
            [className]: className,
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

export default TabPane