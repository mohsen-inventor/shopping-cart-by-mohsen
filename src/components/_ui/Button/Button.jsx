import React, { Component, createRef } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { gsap, Power4 } from 'gsap';

// CSS
import css from './Button.module.scss';
export default class Button extends Component {
    hoverStateRef = createRef();

    onHover = () => {
        gsap.to(this.hoverStateRef.current, {
            left: 0,
            duration: 0.4,
            ease: Power4.easeInOut,
        });
    };

    onHoverOut = () => {
        gsap.to(this.hoverStateRef.current, {
            left: '101%',
            duration: 0.4,
            ease: Power4.easeInOut,
        });
    };

    render() {
        const { disabled, btnClick, children } = this.props;

        return (
            <div className={css.btnWrap}>
                <div
                    className={`${css.btn}`}
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onHoverOut}
                >
                    <button
                        type="button"
                        onClick={btnClick}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                    <span
                        ref={this.hoverStateRef}
                        className={`${css.hoverState}`}
                    ></span>
                </div>
            </div>
        );
    }
}
