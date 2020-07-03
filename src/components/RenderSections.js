import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';

const RenderSections = ({ data }) => {
  const colors = [
    {
      name: 'primary',
      hex: '#518CE3',
    },
    {
      name: 'dark',
      hex: '#2A2C34',
    },
    {
      name: 'secondary',
      hex: '#1E3A65',
    },
    {
      name: 'dark-blue',
      hex: '#3475D6',
    },
  ];

  const getColorName = (hex) => {
    const color = colors.filter((c) => c.hex === hex.toUpperCase());
    return color.length !== 0 ? color[0].name : '';
  };

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
