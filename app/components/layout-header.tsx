import MLetterIcon from "./m-letter-icon";
import Button from "./button";

const LayoutHeader = () => {
    return(
      <nav className="flex justify-between px-40 h-36">
        <div className="w-96 h-full flex items-center justify-center">
          <MLetterIcon/>
          <p>Matthieu</p>
        </div>
        <div className="flex w-full h-full items-center justify-center">
              <a href="#" className="mx-10">Projects</a>
              <a href="#" className="mx-10">About me</a>
              <a href="#" className="mx-10">Contact</a>
        </div>
        <div className="w-96 h-full flex items-center justify-center">
          <Button text="Hire me"/>
          <button>Toggle dark mode</button>
        </div>
        <div className="hidden"></div>
      </nav>
    );
};

export default LayoutHeader;