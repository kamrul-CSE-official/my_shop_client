import { FC } from "react";
import {
  EnvelopeOpenIcon,
  MobileIcon,
  Crosshair2Icon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FooterComponents: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-5 mt-[150px] mb-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Logo and Contact Information */}
        <div>
          <Link to="/">
            <img
              className="max-w-[70px]"
              src="/logo 2.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex flex-col items-start my-3">
            <p className="flex items-center gap-3">
              <EnvelopeOpenIcon /> motiveandskill@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MobileIcon /> +88 01823855998
            </p>
            <p className="flex items-center gap-3">
              <Crosshair2Icon /> Chattogram, Bangladesh
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-10">
          <div>
            <h6 className="font-bold text-sm border-b-2 my-3">
              <Link to="/">Home</Link>
            </h6>
            {["Benefits", "Our Courses", "Our Testimonials", "Our FAQ"].map(
              (item, i) => (
                <p key={i} className="font-light text-sm my-3">
                  {item}
                </p>
              ),
            )}
          </div>
          <div>
            <h6 className="font-bold text-sm border-b-2 my-3">
              <Link to="/about">About</Link>
            </h6>
            {["Company", "Achievements", "Our Goals"].map((item, i) => (
              <p key={i} className="font-light text-sm my-3">
                {item}
              </p>
            ))}
          </div>

          {/* Social Profiles */}
          <div>
            <h6 className="font-bold text-sm border-b-2 my-3">
              Social Profiles
            </h6>
            <div className="flex items-center justify-center gap-4">
              {[
                {
                  link: "https://www.linkedin.com/in/md-kamrul-hasan-dev/",
                  Logo: LinkedInLogoIcon,
                },
                {
                  link: "https://twitter.com/Kamrul_Hasan47",
                  Logo: TwitterLogoIcon,
                },
                {
                  link: "https://github.com/kamrul-CSE-official",
                  Logo: GitHubLogoIcon,
                },
              ].map((item, i) => (
                <Link target="_blank" to={item.link} key={i}>
                  <p className="font-light">
                    <Button variant="ghost" size="icon">
                      <item.Logo />
                    </Button>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Year and Rights */}
      <h4 className="text-sm font-bold my-5 text-center">
        © {year} My Shop. All rights reserved.
      </h4>
    </footer>
  );
};

export default FooterComponents;
