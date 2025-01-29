import logo from "../assets/nutri-neuvo-logo-transparent.png";
export default function Navigation() {
    return (
      <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between">
        <div className="size-[100px] m-4">
          <img src={logo} alt="Nutri Neuvo Logo" />
        </div>
        <div className="flex mr-4">
          <ul className="flex space-x-8 font-bold text-xl text-gray-800">
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
      </div>
    );
  }
  