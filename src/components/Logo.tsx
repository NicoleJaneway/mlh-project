import logo from "../assets/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center justify-start">
      <img src={logo} alt="Logo" className="h-12 w-auto" />{" "}
    </div>
  );
}
