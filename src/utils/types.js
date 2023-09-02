import PropTypes from 'prop-types';

export const SpatialPropTypes = {
  navigateByDirection: PropTypes.func.isRequired,
};

export const MenuPropTypes = {
  // setFocus: PropTypes.func.isRequired,
  hasFocusedChild: PropTypes.bool.isRequired,
};

export const SideBarMenuFocusable = {
  hasFocusedChild: PropTypes.bool.isRequired,
};

export const MenuItemPropTypes = {
  title: PropTypes.bool.isRequired,
  // img: PropTypes.bool.isRequired,
  focused: PropTypes.bool.isRequired,
};

export const ActivePropTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export const OrganizationCardPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
};

export const CardPropTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export const SponsorPropTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
};

export const VideoCardPropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
};

export const CategoriesPropTypes = {
  // onCardPress: PropTypes.func.isRequired,
};

export const CategoryPropTypes = {
  // onCardPress: PropTypes.func.isRequired,
  realFocusKey: PropTypes.string.isRequired,
  // categoryIndex: PropTypes.number.isRequired,
  setFocus: PropTypes.func.isRequired,
};
