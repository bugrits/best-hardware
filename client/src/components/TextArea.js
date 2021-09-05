const TextArea = (props) => {
  const id = props.id;
  const rows = props.rows;
  const placeholder = props.placeholder;
  const value = props.value || "";

  return (
    <div>
      <textarea
        className="form-control"
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(e) => props.onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextArea;
