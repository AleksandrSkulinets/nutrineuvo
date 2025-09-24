import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/nutri-neuvo-logo.svg";
import { Menu, MessageCircle, User, CalendarDays } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "../components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";

// Top bar actions
const TopBarActions = ({ t, i18n, languages, changeLanguage, loginUrl }) => (
  <div className="hidden h-5 my-5 lg:flex items-center space-x-4 text-sm">
    <Button
      asChild
      variant="ghost"
      className="gap-1 text-foreground font-semibold"
    >
      <Link to="/ajanvaraus">
        <CalendarDays className="h-4 w-4" />
        {t("appointment")}
      </Link>
    </Button>

    <Separator orientation="vertical" />

    <Button
      asChild
      variant="ghost"
      className="gap-1 text-foreground font-semibold"
    >
      {/* external link, not react-router */}
      <a href={loginUrl} target="_blank" rel="noopener noreferrer">
        <User className="h-4 w-4" />
        {t("login")}
      </a>
    </Button>

    <Separator orientation="vertical" />

    <Button
      asChild
      variant="ghost"
      className="gap-1 text-foreground font-semibold"
    >
      <Link to="/chat">
        <MessageCircle className="h-4 w-4" />
        Chat
      </Link>
    </Button>

    <Separator orientation="vertical" />

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground font-semibold"
        >
          {i18n.language.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background">
        <DropdownMenuLabel>Select language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lng) => (
          <DropdownMenuItem key={lng} onClick={() => changeLanguage(lng)}>
            {lng.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const languages = ["fi", "sv", "en"];

  const isDev = process.env.NODE_ENV === "development";

  // Dynamic loginUrl with current language
  const loginUrl = isDev
    ? `http://localhost:5173/login?lng=${i18n.language}`
    : `https://oma.nutrineuvo.fi/login?lng=${i18n.language}`;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close mobile menu if resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation structure
  const links = [
    { title: t("home"), to: "/" },
    {
      title: t("services"),
      dropdownKey: "services",
      items: [
        { title: t("nutrition_therapy"), to: "/nutrition" },
        { title: t("individual_clients"), to: "/henkiloasiakkaille" },
        { title: t("professionals"), to: "/nutritionists" },
      ],
    },
    {
      title: t("nutrineuvo"),
      dropdownKey: "about",
      items: [
        { title: t("about_us"), to: "/about" },
        { title: t("contacts"), to: "/contacts" },
      ],
    },
    { title: t("appointment"), to: "/ajanvaraus" },
    { title: t("blog"), to: "/blog" },
  ];

  return (
    <header className="fixed w-full  z-50 bg-background">
      {/* Top bar desktop only */}
      <div className="w-full bg-muted flex justify-end ms-auto items-center gap-2 px-4 sm:px-6 lg:px-8">
        <TopBarActions
          t={t}
          i18n={i18n}
          languages={languages}
          changeLanguage={changeLanguage}
          loginUrl={loginUrl}
        />
      </div>

      {/* Main navbar */}
      <nav className="mx-auto w-full border-b border-muted">
        <div className="py-3">
          {/* Mobile layout */}
          <div className="flex w-full items-center gap-3 lg:hidden px-3">
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Nutri Neuvo Logo"
                className="h-auto max-h-20 w-auto"
              />
            </Link>

            <Input
              type="text"
              placeholder={t("search") || "Search..."}
              className="h-auto border flex-grow"
            />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button size="lg" variant="outline">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full p-0 flex flex-col">
                <SheetHeader className="p-2">
                  <Link to="/" className="flex-shrink-0 mx-auto">
                    <img
                      src={logo}
                      alt="Nutri Neuvo Logo"
                      className="h-auto max-h-20 w-auto"
                    />
                  </Link>
                </SheetHeader>

                {/* Actions */}
                <div className="border-b flex flex-col gap-2 p-4">
                  <TopBarActions
                    t={t}
                    i18n={i18n}
                    languages={languages}
                    changeLanguage={changeLanguage}
                    loginUrl={loginUrl}
                  />
                </div>

                {/* Nav links */}
                <nav className="flex flex-col p-4 gap-2 text-base">
                  {links.map((link) =>
                    link.items ? (
                      <div key={link.dropdownKey} className="flex flex-col">
                        <span className="font-semibold">{link.title}</span>
                        {link.items.map((item) => (
                          <Button
                            key={item.to}
                            asChild
                            variant="ghost"
                            className={`justify-start text-base ${
                              location.pathname === item.to
                                ? "text-primary font-semibold"
                                : "text-muted-foreground"
                            }`}
                          >
                            <Link to={item.to}>{item.title}</Link>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <Button
                        key={link.to}
                        asChild
                        variant="ghost"
                        className={`justify-start text-base ${
                          location.pathname === link.to
                            ? "text-primary font-semibold"
                            : "text-muted-foreground"
                        }`}
                      >
                        <Link to={link.to}>{link.title}</Link>
                      </Button>
                    )
                  )}
                  <Separator className="my-2" />
                  <div>
                    <Button
                      asChild
                      variant="ghost"
                      className="gap-1 text-foreground font-semibold"
                    >
                      <Link to="/ajanvaraus">
                        <CalendarDays className="h-4 w-4" />
                        {t("appointment")}
                      </Link>
                    </Button>

                    <Separator className="my-2" />

                    <Button
                      asChild
                      variant="ghost"
                      className="gap-1 text-foreground font-semibold"
                    >
                      {/* external link, not react-router */}
                      <a
                        href={loginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <User className="h-4 w-4" />
                        {t("login")}
                      </a>
                    </Button>


                    <Separator className="my-2" />

                    <div className="flex justify-between items-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-foreground font-semibold"
                          >
                            {i18n.language.toUpperCase()}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background">
                          <DropdownMenuLabel>Select language</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {languages.map((lng) => (
                            <DropdownMenuItem
                              key={lng}
                              onClick={() => changeLanguage(lng)}
                            >
                              {lng.toUpperCase()}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>


                    <Button
                      asChild
                      variant="ghost"
                      className="gap-1 text-foreground font-semibold"
                    >
                      <Link to="/chat">
                        <MessageCircle className="h-4 w-4" />
                        Chat
                      </Link>
                    </Button>
                      <ThemeToggle />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:grid w-full grid-cols-[auto_1fr_auto] items-center">
            <div className="ms-3">
              <Link to="/" className="flex items-center flex-shrink-0">
                <img
                  src={logo}
                  alt="Nutri Neuvo Logo"
                  className="h-auto max-h-20 w-auto"
                />
              </Link>
            </div>

            <NavigationMenu viewport={false} className="mx-auto justify-center">
              <NavigationMenuList className="space-x-6 xl:space-x-8">
                {links.map((link) =>
                  link.items ? (
                    <NavigationMenuItem key={link.dropdownKey}>
                      <NavigationMenuTrigger
                        className={`text-md font-semibold bg-transparent hover:bg-transparent 
                          focus:bg-transparent active:bg-transparent
                          data-[state=open]:bg-transparent 
                          data-[state=open]:text-primary
                          ${
                            location.pathname.startsWith("/" + link.dropdownKey)
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                      >
                        {link.title}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent className="bg-white">
                        <ul className="grid gap-2 p-4 w-56">
                          {link.items.map((item) => (
                            <li key={item.to}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={item.to}
                                  className={`block px-2 py-1 rounded text-md font-semibold bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent
                                    ${
                                      location.pathname === item.to
                                        ? "text-primary"
                                        : "text-foreground hover:text-primary"
                                    }`}
                                >
                                  {item.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.to}>
                      <NavigationMenuLink
                        asChild
                        className={`text-md font-semibold bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent
                          ${
                            location.pathname === link.to
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                      >
                        <Link to={link.to}>{link.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            
            <div className="flex items-center gap-2 me-3 justify-self-end w-full">
              <ThemeToggle />

              <Input
                type="text"
                placeholder={t("search") || "Search..."}
                className="flex-grow h-9 border focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" variant="default">
                {t("search")}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
