export const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children, classname = "bg-black"} = props;
    return (
      <button
        className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type="submit">
        {children}
      </button>
    );
  };

export default Button