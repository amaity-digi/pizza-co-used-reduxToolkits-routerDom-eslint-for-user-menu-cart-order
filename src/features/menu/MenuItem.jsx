import PropTypes from 'prop-types';

function MenuItem({pizza}) {
    MenuItem.propTypes = {
        pizza: PropTypes.shape({
          name: PropTypes.string.isRequired,
          soldOut: PropTypes.bool.isRequired,
          imageUrl: PropTypes.string.isRequired,
          ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
      };
  const {  name, soldOut, imageUrl, ingredients } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>{!soldOut ? <p>&ldquo;format Currency&rdquo;</p> : <p>Sold Out</p>}</div>
      </div>
    </li>
  );
}

export default MenuItem;
