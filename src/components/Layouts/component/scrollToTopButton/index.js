import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.opacity = 1;
  } else {
    document.getElementById("scrollButton").style.opacity = 0;
  }
};

function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div id="scrollButton">
      <div
        className="p-4 bg-black  rounded-[50%] fixed z-20 bottom-5 right-5 hover:cursor-pointer"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          style={{ fontSize: "1.2rem", color: "white" }}
        />
      </div>
    </div>
  );
}

export default ScrollToTopButton;
