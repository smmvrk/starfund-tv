import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {CategoriesPropTypes} from '../../utils/types';

import EventCategoryFocusable from '../category/event-category';

const EventCategories = ({onCardPress, event, setActiveCategoryIndex}) => {
  const scrollRef = React.useRef(null);
  const [categoryActive, setCategoryActive] = useState(0);

  const onCategoryFocused = ({y}) => {
    scrollRef.current.scrollTo({
      y,
    });
  };

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.y / nativeEvent.layoutMeasurement.height,
      );
      if (slide != categoryActive) {
        setCategoryActive(slide);
      }
    }
  };

  return (
    <>
      <ScrollView
        style={{overflow: 'hidden'}}
        ref={scrollRef}
        onScroll={({nativeEvent}) => onchange(nativeEvent)}>
        {event.categories.map((category, index) => (
          <EventCategoryFocusable
            focusKey={`CATEGORY-${index}`}
            {...category}
            // onCardPress={onCardPress}
            key={index}
            onBecameFocused={onCategoryFocused}
            categoryIndex={index}
            category={category}
          />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
          left: '-5vh',
          bottom: 0,
          top: 0,
        }}>
        {event.categories.map((category, index) => {
          return (
            <View
              key={`indicator-${category}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                margin: 5,
                backgroundColor: categoryActive == index ? 'white' : 'grey',
              }}
            />
          );
        })}
      </View>
    </>
  );
};

EventCategories.propTypes = CategoriesPropTypes;

const EventCategoriesFocusable = withFocusable()(EventCategories);

export default EventCategoriesFocusable;
export const KEY_ENTER = 13;

export const RETURN_KEY = 8;
export const B_KEY = 66;
