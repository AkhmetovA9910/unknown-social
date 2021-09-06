import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => ({
   sidebarElements: state.sidebarComponent.sidebarElements,
   myId: state.auth.userId
});

const actions = {
};

export default connect(mapStateToProps, actions)(Sidebar);