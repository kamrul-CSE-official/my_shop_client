import { FC } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./themeToggle";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const userData = null;
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      details: [
        {
          id: 1,
          courseName: "Inventory Management",
          courseLink: "/",
          description:
            "Learn the fundamentals of UI/UX design, including user research, wireframing, prototyping, and usability testing.",
        },
        {
          id: 2,
          courseName: "Showroom management",
          courseLink: "/",
          description:
            "Justo diam sit clita labore diam amet. Tempor amet et sadipscing diam consetetur. Lorem et sanctus elitr no ipsum est. ",
        },
        {
          id: 3,
          courseName: "Shop management",
          courseLink: "/",
          description:
            "Explore mobile app development with courses on both Android and iOS platforms, focusing on key programming skills.",
        },
        {
          id: 4,
          courseName: "Super shop management",
          courseLink: "/",
          description:
            "Improve your spoken English skills with courses designed to enhance your vocabulary, grammar, and pronunciation.",
        },
      ],
    },
    { id: 5, name: "About Us", path: "/about" },
    { id: 6, name: "Pricing", path: "/pricing/monthly" },
    { id: 7, name: "Contact", path: "/contact" },
  ];

  const isPathActive = (path: string) => {
    path = path.substring(0, 4);
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const renderNavItems = () => (
    <ul className="hidden md:flex items-center gap-3">
      {navItems.map((item, index) => (
        <NavigationMenu key={index}>
          <NavigationMenuList>
            <NavigationMenuItem>
              {item.details ? (
                <>
                  <NavigationMenuTrigger
                    className={
                      isPathActive(item.path) ? "border border-primary" : ""
                    }
                  >
                    <NavigationMenuLink href={item.path}>
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-3 grid grid-cols-2 gap-2">
                      {item.details.map((detail) => (
                        <NavigationMenuLink
                          href={detail.courseLink}
                          key={detail.id}
                          className="hover:bg-slate-100 dark:hover:bg-black p-3 text-start rounded-md"
                        >
                          <h4 className="text-sm font-bold">
                            {detail.courseName}
                          </h4>
                          <p className="text-xs">{detail.description}</p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <Link to={item.path}>
                        <Button variant="ghost" className="w-full">
                          See More...
                        </Button>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink href={item.path}>
                  <Button
                    className={
                      isPathActive(item.path) ? "border border-primary" : ""
                    }
                    variant="ghost"
                  >
                    {item.name}
                  </Button>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </ul>
  );

  const renderDropdownMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <HamburgerMenuIcon className="w-7 h-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navItems.map((item, index) => (
          <DropdownMenuItem key={index}>
            <Link to={item.path}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderProfileAvatar = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Avatar>
          <AvatarImage src={userData?.image} />
          <AvatarFallback>{userData?.fullName?.substring(0, 1)}</AvatarFallback>
        </Avatar> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5">
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <Button variant="link" size="default" onClick={() => signOutUser()}>
            Logout
          </Button> */}
        </DropdownMenuItem>
        {/* Other menu items */}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="max-h-[145px] w-full">
      <div className="flex items-center justify-between mt-1 mx-5">
        <nav className="flex items-center gap-2">
          <Link to="/" className="w-[40px] md:w-[54px] h-[40px] md:h-[54px]">
            <img src="/logo 2.png" alt="logo" width={54} height={54} />
          </Link>
          {renderNavItems()}
          <ThemeToggle />
        </nav>
        <nav className="flex items-center gap-3">
          {!userData && (
            <>
              <Link to="/signup">
                <Button variant={isPathActive("/signup") ? "default" : "ghost"}>
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button variant={isPathActive("/login") ? "default" : "ghost"}>
                  Login
                </Button>
              </Link>
            </>
          )}
          {userData && <div className="relative">{renderProfileAvatar()}</div>}
          <div className="block md:hidden">{renderDropdownMenu()}</div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
