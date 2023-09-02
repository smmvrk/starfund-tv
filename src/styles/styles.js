import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#111111',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    width: '90%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    overflow: 'hidden',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    height: '7vh',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuItemText: {
    color: '#787878',
    fontSize: 30,
    paddingVertical: 10,
    fontWeight: '500',
    left: '3vw',
  },
  activeWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  activeCard: {
    width: 160,
    height: 120,
  },
  activeCardTitle: {
    padding: 20,
    color: 'white',
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 232,
    height: 290,
    margin: 10,
  },
  eventCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    height: 365,
    width: 325,
  },
  cardTitle: {
    color: 'white',
    textAlign: 'left',
  },
  cardButtonTitle: {
    color: 'white',
    marginTop: -5,
  },
  categoryWrapper: {
    padding: 20,
    width: '156vh',
    height: '70vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  categoryTitle: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  categoriesWrapper: {
    overflow: 'hidden',
  },
  menuItemFocus: {
    backgroundColor: '#3E3E3E',
  },
  menuItemTextFocus: {
    color: 'white',
  },
  focusedBorder: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    opacity: 0.5,
  },
});
