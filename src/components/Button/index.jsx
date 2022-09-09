import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Button.scss';

const cx = classNames.bind(style);

function Button({
    children,
    to,
    href,
    btn = true,
    backgr,
    no_icon = false,
    primary_btn = false,
    fullWidth_btn = false,
    outline_btn = false,
    small_btn = false,
    medium_btn = false,
    large_btn = false,
    icon = false,

    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const bg = backgr ? backgr : '';

    const classes = cx(bg, {
        btn,
        [className]: className,
        primary_btn,
        outline_btn,
        small_btn,
        no_icon,
        medium_btn,
        fullWidth_btn,
        large_btn,
    });
    const Icon = icon;
    return (
        <Comp className={classes} {...props}>
            <span className={cx('btn__content')}>{children}</span>
            {icon && <Icon className={cx('btn__icon')}></Icon>}
        </Comp>
    );
}

export default Button;
