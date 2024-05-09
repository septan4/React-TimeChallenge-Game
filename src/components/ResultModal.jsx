import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const userLost = remainingTime <= 0;
  const formattedReamainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2>You {result}</h2>}
      {!userLost && <h2>Your Score {score}</h2>}
      <p>
        The Target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedReamainingTime} </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
