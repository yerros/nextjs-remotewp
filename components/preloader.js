import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faBell } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="fixed top-0 left-0 z-50 block w-full h-full bg-white opacity-75">
      <span
        className="relative block w-0 h-0 mx-auto my-0 text-green-500 opacity-75 top-1/2"
        style={{ top: "50%" }}
      >
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin fa-5x" />
      </span>
    </div>
  );
};

export default Loader;
