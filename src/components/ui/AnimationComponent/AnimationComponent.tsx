import Plx from 'react-plx';
import classNames from 'classnames';

import { AnimationComponentProps } from './AnimationComponent.types';

function AnimationComponent({
  startValue,
  end,
  children,
  className,
}: AnimationComponentProps) {
  const parallaxData = [
    {
      start: 'self',
      end,
      properties: [
        {
          startValue,
          endValue: 0,
          duration: 200,
          property: 'translateX',
        },
        {
          startValue: 0.5,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ];
  return (
    <Plx
      className={classNames('xl:absolute xl:z-10', className && className)}
      parallaxData={parallaxData}
    >
      {children}
    </Plx>
  );
}

export default AnimationComponent;
