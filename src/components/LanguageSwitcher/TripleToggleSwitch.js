import React from 'react';
import PropTypes from 'prop-types';
import './TrippleToggleSwitch.css';

const TripleToggleSwitch = ({
  labels = {
    left: { title: 'left', value: 'left' },
    center: { title: 'center', value: 'center' },
    right: { title: 'right', value: 'right' },
  },
  onChange = value => console.log('value:', value),
}) => {
  const [switchPosition, setSwitchPosition] = React.useState('left');
  const [animationClass, setAnimationClass] = React.useState('');

  const getSwitchAnimation = value => {
    let animationClass = '';

    if (value === 'center' && switchPosition === 'left') {
      animationClass = 'switch left-to-center';
    } else if (value === 'right' && switchPosition === 'center') {
      animationClass = 'switch center-to-right';
    } else if (value === 'center' && switchPosition === 'right') {
      animationClass = 'switch right-to-center';
    } else if (value === 'left' && switchPosition === 'center') {
      animationClass = 'switch center-to-left';
    } else if (value === 'right' && switchPosition === 'left') {
      animationClass = 'switch left-to-right';
    } else if (value === 'left' && switchPosition === 'right') {
      animationClass = 'switch right-to-left';
    }

    setSwitchPosition(value);
    setAnimationClass(animationClass);
    onChange(value);
  };

  return (
    <div className="main-container">
      <div className={`switch ${animationClass} ${switchPosition}-position`} />
      <input
        type="radio"
        defaultChecked
        onChange={e => getSwitchAnimation(e.target.value)}
        name="map-switch"
        id="left"
        value="left"
      />
      <label
        htmlFor="left"
        className={`left-label ${
          switchPosition === 'left' ? 'black-font' : ''
        }`}
      >
        <h4>{labels.left.title}</h4>
      </label>

      <input
        type="radio"
        onChange={e => getSwitchAnimation(e.target.value)}
        name="map-switch"
        id="center"
        value="center"
      />
      <label
        htmlFor="center"
        className={`center-label ${
          switchPosition === 'center' ? 'black-font' : ''
        }`}
      >
        <h4>{labels.center.title}</h4>
      </label>

      <input
        type="radio"
        onChange={e => getSwitchAnimation(e.target.value)}
        name="map-switch"
        id="right"
        value="right"
      />
      <label
        htmlFor="right"
        className={`right-label ${
          switchPosition === 'right' ? 'black-font' : ''
        }`}
      >
        <h4>{labels.right.title}</h4>
      </label>
    </div>
  );
};

TripleToggleSwitch.propTypes = {
  labels: PropTypes.shape({
    left: PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    }),
    center: PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    }),
    right: PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default TripleToggleSwitch;
