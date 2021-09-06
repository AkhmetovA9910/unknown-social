import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addPost } from '../../../redux/reducers/profileReducer';
import Posts from './Posts';

const mapStateToProps = (state) => ({
   postsData: state.profilePage.postsData,
   newPostText: state.profilePage.newPostText
});

const actions = {
   addPost,
   reset
};

export default connect(mapStateToProps, actions)(Posts);