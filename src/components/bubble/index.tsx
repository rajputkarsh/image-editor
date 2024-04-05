import { useEffect, useRef } from 'react';

function Bubble() {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const BubbleAnimationEffect = function () {
      bubbleRef.current &&
        bubbleRef.current.animate(
          {
            borderTopLeftRadius: String(
              Math.round(Math.random() * 800 + 350) + 'px'
            ),
            borderTopRightRadius: String(
              Math.round(Math.random() * 800 + 350) + 'px'
            ),
            borderBottomLeftRadius: String(
              Math.round(Math.random() * 800 + 350) + 'px'
            ),
            borderBottomRightRadius: String(
              Math.round(Math.random() * 800 + 350) + 'px'
            ),
          },
          500000
        );
    };

    BubbleAnimationEffect();
  }, []);

  return <div ref={bubbleRef} className="bubble-circle"></div>;
}

export default Bubble;
