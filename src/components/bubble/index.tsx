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

    const BgColor = [
      '#f75774',
      '#f76580',
      '#f7748c',
      '#ed8598',
      '#ed8598',
      '#f7748c',
      '#f76580',
      '#f75774',
    ];
    let i = 0;
    const BubbleEffect = function () {
      if (i < BgColor.length && bubbleRef.current) {
        bubbleRef.current.style['backgroundColor'] = BgColor[i];
      } else {
        i = 0;
      }
      i++;
    };
    setInterval(BubbleEffect, 3000);
  }, []);

  return <div ref={bubbleRef} className="bubble-circle"></div>;
}

export default Bubble;
