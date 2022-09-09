import classNames from 'classnames/bind';
import style from './Section.scss';

const cx = classNames.bind(style);

function Section({ children }) {
    return <div className={cx('section')}>{children}</div>;
}

function SectionTitle({ children }) {
    return <div className={cx('section__title')}>{children}</div>;
}

function SectionBody({ children }) {
    return <div className={cx('section__body')}>{children}</div>;
}

export { SectionTitle, SectionBody };
export default Section;
