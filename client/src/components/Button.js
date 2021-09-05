const Button = (props) => {
  const type = props.type;
  const value = props.value;

  return (
    <div>
      <button type={type} className="btn btn-primary mt-4">
        {value}
      </button>
    </div>
  );
};

export default Button;
