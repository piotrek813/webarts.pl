import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import getColorName from 'utils/getColorName';

const RenderSections = ({ data }) => {
  return (
    <>
      {data.map(({ model: { apiKey }, ...section }) => (
        <Fragment key={section.id}>
          {apiKey === 'section_break_layout' && (
            <Section
              isCenter={apiKey === 'section_break_layout'}
              h={section.heading}
              p={section.paragraphNode}
            />
          )}
          {apiKey === 'section' && (
            <Section
              h={section.heading}
              color={getColorName(section.background.hex)}
              p={section.paragraphNode}
              img={section.image}
              isMirror={section.isMirror}
            />
          )}
          {/* {apiKey === 'section_with_image' && (
            <Section
              isMirror={section.isMirror}
              color={getColorName(section.background.hex)}
              h={section.heading}
              p={section.paragraphNode}
              img={section.image}
            />
          )} */}
          {apiKey === 'section_with_reference' && (
            <Section
              isMirror={section.isMirror}
              color={getColorName(section.background.hex)}
              h={section.reference.heading}
              p={section.reference.paragraphNode}
              img={section.reference.hero}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};

RenderSections.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RenderSections;
