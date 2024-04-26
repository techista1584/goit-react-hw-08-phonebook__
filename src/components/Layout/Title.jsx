import PropTypes from 'prop-types';
import css from './Title.module.css';

// Use 'h1' or another appropriate HTML tag instead of 'title'
const GlobalTitle = ({ title }) => {
  return (
    <h1 className={css.Title}>{title}</h1>
  );
};

GlobalTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default GlobalTitle;
