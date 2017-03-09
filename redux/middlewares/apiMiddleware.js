'use strict';

import varieties from '../../_assignment/service';

function checkIsApiAction(type) {
  return Array.isArray(type)
    && type.length === 3;
}

const middleware = store => next => action => {
  const {type} = action;

  if (checkIsApiAction(type)) {
    let [request, success, fail] = type;

    store.dispatch({type: request});

    varieties.getData((err, data) => {
      if (err) {
        store.dispatch({type: fail});
      } else {
        store.dispatch({type: success, data});
      }
    });
  }

  return next(action);
};

export default middleware;