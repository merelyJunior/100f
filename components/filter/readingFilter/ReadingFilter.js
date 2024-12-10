
import React from 'react';
import Slider, { Handle } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import styles from './index.module.css';

const HandleTooltip = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value}m`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const ReadingFilter = ({ readingTime, setReadingTime }) => {
  const handleReadingTimeChange = (value) => {
    setReadingTime(value);
  };

  return (
    <div className={styles['reading-time-filter']}>
      <Slider
        range
        min={1}
        max={30}
        step={null}
        value={readingTime}
        handle={HandleTooltip}
        onChange={handleReadingTimeChange}
        marks={{ 1: '1m',3: '3m', 5: '5m', 10: '10m', 15: '15m', 20: '20m', 25: '25m', 30: '∞' }}
        allowCross={false}
      />
    </div>
  );
};

export default ReadingFilter;