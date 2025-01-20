interface ButtonProps {
  text: string;
}

const Card = ({ text }: ButtonProps) => {
  return (
    <div className="card">
      <h2>Title</h2>
      <div className="card__image"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsam
        nam quisquam veniam? Alias assumenda obcaecati quae rem rerum voluptate?
      </p>
      <button>{text}</button>
    </div>
  );
};

export default Card;
