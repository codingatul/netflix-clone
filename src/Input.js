import React from "react";

const Input = React.forwardRef((props, ref) => {
  // const onChangeHandler = (e) => {
  //   e.preventDefault();
  //   props.setvalue(e.target.value);
  // };
  return (
    <input
      ref={ref}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
});

export default Input;
