import { useFavoriteContext } from "./FavoriteContext";
export const Book = (props) => {
  const { toggleFavorite, favoriteBooks } = useFavoriteContext();

  const handleToggleFavorite = () => {
    toggleFavorite(props);
  };

  const {
    book_type,
    title,
    authors,
    page_count,
    series_name,
    published_works,
  } = props;
  const isFavorite = favoriteBooks.some((book) => book.title === title);

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
          checked={isFavorite}
          onChange={handleToggleFavorite}
        />
      </div>
    </article>
  );
};
