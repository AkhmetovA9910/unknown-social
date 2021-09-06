import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthVC, required } from '../../utils/validators';
import InputField from '../common/FormControls/InputField/InputField';
import HeadLabel from '../common/HeadLabel/HeadLabel';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css';
import Message from './Message/Message';

let maxLength250 = maxLengthVC(250);

const SendMessageForm = (props) => {
   return (
      <form className={s.dialogs__inputarea} onSubmit={props.handleSubmit}>
         <Field
            component={InputField}
            type='text'
            placeholder='Type your message...'
            name='message'
            validate={[required, maxLength250]}
            styles={{ width: '70%' }}
            showError={false}
            autoComplete='off'
         />
         <button className={s.dialogs__sendMessageButton}><span className='icon-send'></span></button>
      </form>
   );
};

const SendMessageReduxForm = reduxForm({ form: 'sendMessageForm' })(SendMessageForm);

const Dialogs = (props) => {
   let dialogElements = props.dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);

   let messageElements = props.messagesData.map(message => <Message key={message.id} mine={message.mine} text={message.text} />);

   const onSendMessage = (values) => {
      props.sendNewMessage(values.message);
      props.reset('sendMessageForm');
   };

   return (
      <div className={s.dialogs}>
         <HeadLabel text='Dialogs' color='#7951ad' className={s.dialogs__label} />
         <div className={s.dialogs__list}>

            {dialogElements}

         </div>
         <div className={s.dialogs__dialog}>
            <div className={s.dialogs__userpicture}><img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
            <div className={s.dialogs__username}>Dirk Conningem</div>
         </div>
         <div className={s.dialogs__messagesarea}>

            {messageElements}

         </div>
         <SendMessageReduxForm onSubmit={onSendMessage} />
      </div>
   );
};

export default Dialogs;