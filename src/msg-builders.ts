import * as t from './types';

function updateView(viewMsg : t.ViewMsg) : t.UpdateView {
  return {
    type: 'updateView',
    viewMsg
  };
}

export function switchPage(page : t.Page) : t.UpdateView {
  return updateView({ type: 'switchPage', page });
}