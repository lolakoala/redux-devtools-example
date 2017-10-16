const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, Object.assign({}, {text: action.text, id: action.id}) ]
    default:
      return state;
  };
};

export default todos;
