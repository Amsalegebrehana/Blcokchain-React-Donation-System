import { Button as FooButton } from 'foo-ui-lib';
import { Button as BarButton } from 'bar-ui-lib';

const CustomButton = props => {
  return <button>{props.title}</button>;
};

const AdapterButton = props => {
  if (props.variant === 'foo') {
    return <FooButton {...props} />;
  } else if (props.variant === 'bar') {
    return <BarButton {...props} />;
  }

  return <CustomButton {...props} />;
};

export default AdapterButton;