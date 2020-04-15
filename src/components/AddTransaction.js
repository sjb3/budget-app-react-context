import React from "react";

export const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <form>
        <div className="input-group income">
          <input type="text" placeholder="Add income ..." autoComplete="off" />
          <input
            type="number"
            placeholder="Add amount ..."
            autoComplete="off"
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add expense ..." autoComplete="off" />
          <input
            type="number"
            placeholder="Add amount ..."
            autoComplete="off"
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};
