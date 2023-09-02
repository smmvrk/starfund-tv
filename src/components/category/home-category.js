import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import {ScrollView, View} from 'react-native';
// import {useGetOrganizationsQuery} from '../../store/api/organization/organization.api';
import {useGetOrganizationsQuery} from '../../store/api/organization/organization.api';
import {styles} from '../../styles/styles';
import OrganizationCardFocusable from '../card/organization-card';

const HomeCategory = ({realFocusKey, categoryIndex, setFocus}) => {
  const {data} = useGetOrganizationsQuery();
  const scrollRef = React.useRef(null);

  const onCardFocused = ({x}) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        x,
      });
    }
  };

  const onCardArrowPress = (direction, {cardIndex}) => {
    if (direction === 'right' && cardIndex < data.length - 1) {
      setFocus(`CARD-${realFocusKey}-${cardIndex + 1}`);
      return false;
    } else if (direction === 'left' && cardIndex > 0) {
      setFocus(`CARD-${realFocusKey}-${cardIndex - 1}`);
      return false;
    }

    return true;
  };
  if (data && Array.isArray(data)) {
    return (
      <View style={styles.categoryWrapper}>
        <ScrollView horizontal ref={scrollRef} style={{overflow: 'hidden'}}>
          {data.map((item, index) => (
            <OrganizationCardFocusable
              item={item}
              focusKey={`CARD-${realFocusKey}-${index}`}
              key={item.id}
              onBecameFocused={onCardFocused}
              onArrowPress={onCardArrowPress}
              cardIndex={index}
              categoryIndex={categoryIndex}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
};

// HomeCategory.propTypes = CategoryPropTypes;

const HomeCategoryFocusable = withFocusable()(HomeCategory);

export default HomeCategoryFocusable;
