import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {CategoryPropTypes} from '../../utils/types';

import EventCardFocusable from '../card/event-card';

const EventCategory = ({
  category,
  onCardPress,
  realFocusKey,
  categoryIndex,
  setFocus,
}) => {
  const scrollRef = React.useRef(null);

  const categoryCards = category.cards || [];

  const onCardFocused = ({x}) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x,
      });
    }
  };

  const onCardArrowPress = (direction, {categoryIndex, cardIndex}) => {
    if (
      direction === 'right' &&
      cardIndex === categoryCards.length - 1 &&
      categoryIndex < category.length - 1
    ) {
      setFocus(`CATEGORY-${categoryIndex + 1}`);
      return false;
    }

    return true;
  };

  return (
    <View
      style={{
        height: '50vh',
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: '700',
          marginVertical: 30,
        }}>
        {category.title}
      </Text>
      <ScrollView
        horizontal
        ref={scrollRef}
        style={{overflow: 'hidden', height: '50%'}}>
        {categoryCards.map((card, index) => (
          <EventCardFocusable
            {...card}
            focusKey={`CARD-${realFocusKey}-${index}`}
            // onPress={onCardPress}
            // onEnterPress={onCardPress}
            key={card.id}
            onBecameFocused={onCardFocused}
            onArrowPress={onCardArrowPress}
            cardIndex={index}
            id={card.id}
            categoryIndex={categoryIndex}
          />
        ))}
      </ScrollView>
    </View>
  );
};

EventCategory.propTypes = CategoryPropTypes;

const EventCategoryFocusable = withFocusable()(EventCategory);

export default EventCategoryFocusable;
