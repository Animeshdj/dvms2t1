export const Book = (props) => {
  const {
    book_type,
    title,
    authors,
    page_count,
    series_name,
    published_works,
  } = props;
  let isFavorite = false;
  const changeFavorite = () => {
    if (isFavorite != true) isFavorite = true;
    else isFavorite = false;
    console.log(isFavorite);
  };
  return (
    <article className="book">
      <img src={published_works[0].cover_art_url} alt="" />
      <div className="title-div">{title}</div>
      <div>By - {authors}</div>
      <div>Genre - {book_type}</div>
      <div>Series - {series_name}</div>
      <div className="page-count">Page count - {page_count}</div>
      <div className="checkbox-container">
        Favorite -
        <input
          type="checkbox"
          className="book-checkbox"
          onClick={() => changeFavorite()}
        />
      </div>
    </article>
  );
};
