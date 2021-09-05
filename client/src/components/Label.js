const Label = (props) => {
  const htmlFor = props.htmlFor;
  const labelVal = props.labelVal;

  return (
    <div>
      <label htmlFor={htmlFor} className="form-label mt-4">
        {labelVal}:{" "}
      </label>
    </div>
  );
};

export default Label;
