const todos = (state = [], action) => {
  console.log('in baby reducer')
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, Object.assign({}, {text: action.text, id: action.id}) ]
    default:
      return state;
  };
};

export default todos;
