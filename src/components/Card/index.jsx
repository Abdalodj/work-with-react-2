import propTypes from 'prop-types';
import defaultPic from '../../assets/profile.png';

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt='freelance' height={80} width={80} />
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  picture: propTypes.string.isRequired
};

Card.defaultProps = {
  title: '',
  label: '',
  picture: defaultPic
};
export default Card;
