import React, { useRef, useEffect, ReactNode } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter({ ref, callback }: any) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

interface Props {
  children: ReactNode;
  style: any;
  callback: () => void;
}
/**
 * Component that alerts if you click outside of it
 */
export const ClickOutside = ({ children, style, callback }: Props) => {
  const wrapperRef = useRef(null);
  // eslint-disable-next-line react/prop-types
  useOutsideAlerter({ ref: wrapperRef, callback });

  // eslint-disable-next-line react/prop-types
  return (
    <div className="click-outside" ref={wrapperRef} style={style}>
      {children}
    </div>
  );
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.object,
};

ClickOutside.propTypes = propTypes;
