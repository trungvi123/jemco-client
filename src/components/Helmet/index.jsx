function Helmet(props) {
    if (props.title) {
        document.title = 'Jemco-' + props.title;
    }

    return <div>{props.children}</div>;
}

export default Helmet;
