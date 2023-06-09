const Button = (props) => {
  const className = " btn btn-outline m-5 " + props.className;
  return (
    <>
      {/* <div>
        <button type="submit" className={className} onClick={props.onClick}>
          {props.buttonname}
        </button>
      </div> */}
      <div>
        <button className={className} onClick={props.onClick}>
          {props.buttonname}
        </button>
      </div>
    </>
  );
};
export default Button;
