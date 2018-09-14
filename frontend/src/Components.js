import React from "react";
export const LetterForm = props => {
  const { inputLetters, letters, submit } = props;
  return (
    <form onSubmit={e => submit(e)}>
      <input
        placeholder="Enter your letters"
        onChange={e => {
          console.log(e);
          inputLetters(e);
        }}
        value={letters}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export const Results = props => {
  const { data } = props;
  return (
    <ul>
      {data.map(word => {
        return (
          <li>
            {word.word}, {word.score}
          </li>
        );
      })}
    </ul>
  );
};
