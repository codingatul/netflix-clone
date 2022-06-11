import React from "react";

function Input(props) {
  // const onChangeHandler = (e) => {
  //   e.preventDefault();
  //   props.setvalue(e.target.value);
  // };
  return (
    <input
      ref={props.ref}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
