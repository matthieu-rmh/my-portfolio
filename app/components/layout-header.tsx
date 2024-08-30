import MLetterIcon from "./m-letter-icon";
import Button from "./button";
import ToggleDarkModeButton from "./toggle-dark-mode-button";

const LayoutHeader = () => {
    return(
      <nav className="flex justify-between px-40 h-36">
        <div className="w-96 h-full flex items-center justify-center">
          <MLetterIcon/>
          <p className="text-4xl">Matthieu</p>
        </div>
        <div className="flex w-full h-full items-center justify-center">
              <a href="#" className="mx-10 text-2xl">Projects</a>
              <a href="#" className="mx-10 whitespace-nowrap text-2xl">About me</a>
              <a href="#" className="mx-10 text-2xl">Contact</a>
        </div>
        <div className="w-96 h-full flex items-center justify-center">
          <Button text="Hire me" className="text-xl"/>
          <ToggleDarkModeButton/>
        </div>
        <div className="hidden"></div>
      </nav>
    );
};

export default LayoutHeader;