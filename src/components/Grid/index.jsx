import classNames from 'classnames/bind';

import style from './Grid.scss';

const cx = classNames.bind(style);

function Grid({ children, gap = 0, col = 0, mdCol = 0, smCol = 0 }) {
    const gapp = gap ? `${gap}px` : '0';
    const style = {
        gap: gapp,
    };
    const coll = col ? `grid-col-${col}` : '';
    const mdColl = mdCol ? `grid-md-${mdCol}` : '';
    const smColl = smCol ? `grid-sm-${smCol}` : '';

    const classes = cx('grid', `${gapp}`, `${coll}`, `${mdColl}`, `${smColl}`);

    return <div style={style} className={classes}>{children}</div>;
}

export default Grid;
