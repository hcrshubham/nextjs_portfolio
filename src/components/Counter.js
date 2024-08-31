import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => (
  <VisibilitySensor>
    {({ isVisible }) => isVisible ? <h3>Counter</h3> : null}
  </VisibilitySensor>
);

export default Counter;
