import { connect } from "react-redux";
import { compose } from "redux";
import { reset } from "redux-form";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { sendNewMessage } from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({
   dialogsData: state.dialogsPage.dialogsData,
   messagesData: state.dialogsPage.messagesData,
   currentLocation: '/dialogs'
});

const actions = {
   sendNewMessage,
   reset
};

export default compose(connect(mapStateToProps, actions), withAuthRedirect)(Dialogs);