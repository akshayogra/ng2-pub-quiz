var state = {
  games: [],
  players: [],
  questions: [],
  roundTimer: 0,
};

module.exports = {
  db: state,
  get: get,
  add: add
};

function get(id) {
  return {
    from: function(type) {
      return state[type].filter(function(item){
        return item.id == id;
      }).shift();
    }
  }
}

function add(item) {
  return {
    to: function(type) {
      if(state[type]){
        addIncrementedIdToItem(type, item);
        state[type].push(item);
      }
      return item;
    }
  }
}

function addIncrementedIdToItem(type, item){
  if(!item.id){
    item.id = state[type].length + 1;
  }
  while(idExists(type, item.id)){
    item.id++;
  }
}

function idExists(type, id){
  state[type].forEach(function(existingItem){
    if(existingItem.id == id){
      return true;
    }
    return false;
  });
}
