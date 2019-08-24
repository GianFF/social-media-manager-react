import React from 'react';
import '../styles/SMInput.scss';

function SMInput({title, viewModel, accountKey}) {
  return (
    <div className="sm-input-container">
      <h4>{title}</h4>
      <input type="text" onChange={(event) => viewModel.updateAccount(event.target.value, accountKey)}/>
      <button title={"associate account"} onClick={() => viewModel.associateAccount(accountKey)}> ✓ </button>
    </div>
  );
}

export default SMInput;
