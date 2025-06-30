export default function BookCard(props) {
  return (
    <div data-testid="book-card">
      <img src={props.img} alt={""} />
      <b>
        <div data-testid="book-card-title">
          {props.title}
          <span>{props.author}</span>
        </div>
      </b>
      <div data-testid="book-card-author">{props.year}</div>
      <div data-testid="book-card-price">{props.price}</div>
    </div>
  );
}
