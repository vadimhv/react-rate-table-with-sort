import React from "react";
import RateTable from "./RateTable";
import {connect} from "react-redux";
import {getParticipants, sortName, sortShoot, sortSpeed} from "../../redux/rate-reducer";

const RateTableContainer = (props) => {
    props.getParticipants();
    return (
        <div>
            <RateTable participants={props.participants} sortName={props.sortName} sortShoot={props.sortShoot}
                       sortSpeed={props.sortSpeed}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        participants: state.rate.participants
    }
}
export default connect(mapStateToProps, {sortName, sortShoot, sortSpeed, getParticipants})(RateTableContainer);