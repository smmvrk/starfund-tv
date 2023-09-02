import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import {ScrollView} from 'react-native';
import {useGetOrganizationsQuery} from '../../store/api/organization/organization.api';
import {CategoriesPropTypes} from '../../utils/types';
import HomeCategoryFocusable from '../category/home-category';

const HomeCategories = () => {
  const {data} = useGetOrganizationsQuery();
  const scrollRef = React.useRef(null);

  const onCategoryFocused = ({y}) => {
    scrollRef.current.scrollTo({
      y,
    });
  };

  if (data && Array.isArray(data)) {
    return (
      <ScrollView style={{overflow: 'hidden'}} ref={scrollRef}>
        {data.map((organization, index) => (
          <React.Fragment key={index}>
            <HomeCategoryFocusable
              focusKey={`CATEGORY-${index}`}
              {...organization}
              onBecameFocused={onCategoryFocused}
              categoryIndex={index}
            />
          </React.Fragment>
        ))}
      </ScrollView>
    );
  }
};

HomeCategories.propTypes = CategoriesPropTypes;

const HomeCategoriesFocusable = withFocusable()(HomeCategories);

export default HomeCategoriesFocusable;
