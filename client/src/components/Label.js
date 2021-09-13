const Label = (props) => {
  const htmlFor = props.htmlFor;
  const labelVal = props.labelVal;

  return (
    <div>
      <label htmlFor={htmlFor} className="mt-4 bmd-label-floating">
        <strong>{labelVal}: </strong>
      </label>
    </div>
  );
};

export default Label;
