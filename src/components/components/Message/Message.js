import "./styles.css";

const styledMessage = {
  backgroundColor: "#74b9ff",
  color: "white",
};

const Message = ({ isSubmitted }) => (
  <footer
    className="submitted-footer"
    style={isSubmitted ? styledMessage : null}
  >
    {isSubmitted && (
      <p className="animation-text-onSubmit">Form has been sent!</p>
    )}
  </footer>
);

export default Message;
