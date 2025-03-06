const HorizontalLine = (props) => {
    return (
        <div className={`${props.OuterLineStyle ? props.OuterLineStyle : ''}`}>
            <div
                className={`${
                    props.InnerLineStyle ? props.InnerLineStyle : ''
                }`}
            ></div>
        </div>
    );
};

const VerticalLine = (props) => {
    return (
        <div className={`${props.OuterLineStyle ? props.OuterLineStyle : ''}`}>
            <div
                className={`${
                    props.InnerLineStyle ? props.InnerLineStyle : ''
                }`}
            ></div>
        </div>
    );
};

// Export The Components
export { HorizontalLine, VerticalLine };