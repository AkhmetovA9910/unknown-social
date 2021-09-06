const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
   dialogsData: [
      { id: 1, name: 'Dirk' },
      { id: 2, name: 'Kevin' },
      { id: 3, name: 'Chris' }
   ],
   messagesData: [
      { id: 1, text: 'Hi. How are you?', mine: true },
      { id: 2, text: 'Hello. Fine. And you?', mine: false },
      { id: 3, text: 'So am I', mine: true }
   ]
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_NEW_MESSAGE: return {
         ...state,
         messagesData: [
            ...state.messagesData,
            {
               id: (state.messagesData.length > 0) ? state.messagesData[state.messagesData.length - 1].id + 1 : 1,
               text: action.message,
               mine: true
            }
         ]
      };

      default: return state;
   }
};

export const sendNewMessage = (message) => ({ type: SEND_NEW_MESSAGE, message });

export default dialogsReducer;