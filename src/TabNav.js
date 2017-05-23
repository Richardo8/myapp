import React, { component, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';

class TabNav extends COmponent{
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
    };

    getTabs(){
        const { panels, classPrefix, activeIndex } = this.props;

        return React.children.map(panels, (child) => {
            if (!child) {reutn;}

            const order = paserInt(child.props.order, 10);

            let classes = classnames({
                [`${classPrefix}-tab`]: true,
                [`${classPrefix}-active`]: activeIndex === order,
                [`${classPrefix}-disabled`]: child.props.disabled,
            });

            let events = {};
            if(!child.props.disabled){
                events = {
                    onClick: this.props.onTabClick.bind(this, order),
                }
            }

            const ref = {};
            if(activeIndex === order){
                ref.ref = 'activeTab';
            }

            return (
                <li
                    role="tab"
                    aria-disabled={child.props.disabled ? 'true' : 'false'}
                    aria-selected={activeIndex === order ? 'true': 'false'}
                    {...events}
                    className={classes}
                    key={order}
                    {...ref}
                >
                    {child.props.tab}
                </li>
            );
        });
    }

    render(){
        const { classPrefix } = this.props;

        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true,
        });

        const classes = classnames({
            [`${classPrefix}-nav`]: true,
        })

        return (
            <div className={rootClasses} role="tablist">
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        );
    }
}