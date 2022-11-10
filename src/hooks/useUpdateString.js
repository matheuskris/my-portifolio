import { useState, useEffect } from "react";

const useUpdateString = (
  initialStringArray,
  timeStartDeleting,
  timeWriting
) => {
  const [text, setText] = useState("");

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(true);
  const [delta, setDelta] = useState(timeWriting);

  const toRotate = initialStringArray;
  const period = timeStartDeleting;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => {
        if (prevDelta > 80) {
          return prevDelta / 2;
        } else {
          return prevDelta;
        }
      });
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(timeWriting);
    }
  };

  useEffect(() => {
    const ticker = async () => {
      await new Promise((resolve) => setTimeout(resolve, delta));
      tick();
    };
    ticker();
  }, [text, tick]);

  useEffect(() => {
    tick();
  }, []);

  return [text];
};

export default useUpdateString;
