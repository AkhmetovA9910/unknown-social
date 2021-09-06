let initialState = {
   sidebarElements: [
      { id: 1, name: 'profile', path: '/profile' },
      { id: 2, name: 'messages', path: '/dialogs' },
      { id: 3, name: 'users', path: '/users' },
      { id: 4, name: 'news', path: '/news' },
      { id: 5, name: 'music', path: '/music' },
      { id: 6, name: 'settings', path: '/settings' }
   ]
}

const sidebarReducer = (state = initialState, action) => {
   switch (action.type) {
      default: return state;
   }
};

export default sidebarReducer;