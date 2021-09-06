import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators';
import Button from '../../common/Button/Button';
import TextareaField from '../../common/FormControls/TextareaField/TextareaField';
import HeadLabel from '../../common/HeadLabel/HeadLabel';
import Post from './Post/Post';
import s from './Posts.module.css';

const AddPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.posts__addPost}>
         <Field
            component={TextareaField}
            name='textarea'
            placeholder='type your post...'
            validate={[required]}
            showError={false}
         />

         <Button
            text='Add post'
            styles={{
               color: '#105ab1',
               border: '2px solid #105ab1',
               width: '120px',
               alignSelf: 'flex-end',
               margin: '10px 0 0 0'
            }}
            onHover={{
               backgroundColor: '#B9D2EA'
            }}
         />
      </form>
   );
};

const AddPostReduxForm = reduxForm({ form: 'addPostForm' })(AddPostForm);

const Posts = (props) => {
   let postElements = props.postsData.map(post => <Post key={post.id} message={post.postText} likesCount={post.likesCount} />);

   const onAddNewPost = (values) => {
      props.addPost(values.textarea);
      props.reset('addPostForm');
   };

   return (
      <div className={s.posts}>
         <HeadLabel text='My posts' className={s.posts__label} styles={{ justifyContent: 'flex-start' }} />
         <AddPostReduxForm onSubmit={onAddNewPost} />
         <div className={s.posts__list}>

            {postElements}

         </div>
      </div>
   );
};

export default Posts;