
import './styles/body.scss';
const Body = ({headline,subhead}) => {
    return (
    <div className = "bodyContainer">
        <div className = "bodyHolder">
            <div className = "bodyContent">
                <div className = "bodyHeadline">{headline}</div>
                <div className = "bodySubhead">{subhead}</div>
            </div>
        </div>
    </div>
    )
}

export default Body;