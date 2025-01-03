import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import logo from "../../public/images/logo.png";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
 const router = useRouter();
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 const { name, showBlog, showResume } = data;

 useEffect(() => {
 setMounted(true);
 }, []);

 return (
 <>
 <Popover className="block tablet:hidden mt-5">
 {({ open }) => (
 <>
 <div
 className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 laptop:p-0 ${
 theme === "dark"
 ? "bg-gray-800 text-white"
 : "bg-white text-black"
 } shadow-md`}
 >
 <div className="flex items-center">
 <img src={logo} alt="" className="h-8 mr-2" />
 <h1
 className="font-medium text-xl laptop:text-2xl link" // Adjust font size as needed
 >
 {name}.
 </h1>
 </div>
 {/* Other navigation elements can go here */}
 <div className="flex items-center">
 {mounted && (
 <Button
 onClick={() =>
 setTheme(theme === "dark" ? "light" : "dark")
 }
 >
 <img
 className="h-6"
 src={`/images/${
 theme === "dark" ? "moon.svg" : "sun.svg"
 }`}
 alt="Toggle Theme"
 />
 </Button>
 )}
 <Popover.Button>
 <img
 className="h-5"
 src={`/images/${
 !open
 ? theme === "dark"
 ? "menu-white.svg"
 : "menu.svg"
 : theme === "light"
 ? "cancel.svg"
 : "cancel-white.svg"
 }`}
 ></img>
 </Popover.Button>
 </div>
 </div>
 <Popover.Panel
 className={`absolute right-0 z-10 w-11/12 p-4 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-md rounded-md`}
 >
 {!isBlog ? (
 <div className="grid grid-cols-1">
 <Button onClick={handleAboutScroll}>About</Button>
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>Programs</Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute start-0 z-10 w-48 p-2 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-lg rounded-md`}
 >
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Peru
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 {showBlog && (
 <Button onClick={() => router.push("/blog")}>
 Gallery of Photos
 </Button>
 )}
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>
 Travel Forms (🇺🇸 to Latin America)
 </Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute right-0 z-10 w-11/12 p-4 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-md rounded-md`}
 >
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Registration Form
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Medical Form
 </Button>
 <Button
 onClick={() => window.open("/resume3.pdf")}
 >
 Terms and conditions
 </Button>
 <Button
 onClick={() => window.open("/resume4.pdf")}
 >
 Program agreement
 </Button>
 <Button
 onClick={() => window.open("/resume5.pdf")}
 >
 Student behavior guidelines
 </Button>
 <Button
 onClick={() => window.open("/resume3.pdf")}
 >
 Responsability Disclaimers
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Things to bring to Peru
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Things to bring to Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 <Button
 onClick={() =>
 window.open(
 "https://starrtravelinsurance.com/?agentcode=7119"
 )
 }
 >
 Insurance Purchase
 </Button>
 <Button onClick={handleWorkScroll}>Testimonials</Button>
 <Button
 type="primary"
 onClick={() => window.open("mailto:..@gmail.com")}
 >
 Contact us
 </Button>
 </div>
 ) : (
 <div className="grid grid-cols-1">
 <Button onClick={handleAboutScroll}>About</Button>
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>Programs</Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute start-0 z-10 w-48 p-2 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-lg rounded-md`}
 >
 {" "}
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Peru
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 {showBlog && (
 <Button onClick={() => router.push("/blog")}>
 Gallery of Photos
 </Button>
 )}
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>
 Travel Forms (🇺🇸 to Latin America)
 </Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute right-0 z-10 w-11/12 p-4 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-md rounded-md`}
 >
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Registration Form
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Medical Form
 </Button>
 <Button
 onClick={() => window.open("/resume3.pdf")}
 >
 Terms and conditions
 </Button>
 <Button
 onClick={() => window.open("/resume4.pdf")}
 >
 Program agreement
 </Button>
 <Button
 onClick={() => window.open("/resume5.pdf")}
 >
 Student behavior guidelines
 </Button>
 <Button
 onClick={() => window.open("/resume3.pdf")}
 >
 Responsability Disclaimers
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Things to bring to Peru
 </Button>
 <Button
 onClick={() => window.open("/resume2.pdf")}
 >
 Things to bring to Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 <Button
 onClick={() =>
 window.open(
 "https://starrtravelinsurance.com/?agentcode=7119"
 )
 }
 >
 Insurance Purchase
 </Button>
 <Button onClick={handleWorkScroll}>Testimonials</Button>
 <Button
 type="primary"
 onClick={() => window.open("mailto:..@gmail.com")}
 >
 Contact us
 </Button>
 </div>
 )}
 </Popover.Panel>
 </>
 )}
 </Popover>
 <div
 className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 laptop:p-0 ${
 theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
 } shadow-md`}
 >
 <div className="flex items-center" onClick={() => router.push("/")}>
 <img src={"/images/logo.png"} alt="" className="h-8 mr-2" />
 <h1
 className="font-medium text-xl laptop:text-2xl link" // Adjust font size as needed
 >
 {name}.
 </h1>
 </div>
 {!isBlog ? (
 <div className="flex">
 <Button onClick={handleAboutScroll}>About</Button>
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>Programs</Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute start-0 z-10 w-48 p-2 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-lg rounded-md`}
 >
 {" "}
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Peru
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 {showBlog && (
 <Button onClick={() => router.push("/blog")}>
 Gallery of Photos
 </Button>
 )}
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>Travel Forms (🇺🇸 to Latin America)</Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute right-0 z-10 w-11/12 p-4 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-md rounded-md`}
 >
 {" "}
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Registration Form
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Medical Form
 </Button>
 <Button onClick={() => window.open("/resume3.pdf")}>
 Terms and conditions
 </Button>
 <Button onClick={() => window.open("/resume4.pdf")}>
 Program agreement
 </Button>
 <Button onClick={() => window.open("/resume5.pdf")}>
 student behavior guidelines
 </Button>
 <Button onClick={() => window.open("/resume3.pdf")}>
 Responsability Disclaimers
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Things to bring to Peru
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Things to bring to Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 <Button
 onClick={() =>
 window.open("https://starrtravelinsurance.com/?agentcode=7119")
 }
 >
 Insurance Purchase
 </Button>
 <Button onClick={handleWorkScroll}>Testimonials</Button>
 <Button
 type="primary"
 onClick={() => window.open("mailto:..@gmail.com")}
 >
 Contact us
 </Button>

 {mounted && theme && data.darkMode && (
 <Button
 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
 >
 <img
 className="h-6"
 src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
 ></img>
 </Button>
 )}
 </div>
 ) : (
 <div className="flex">
 <Button onClick={handleAboutScroll}>About</Button>
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>Programs</Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute start-0 z-10 w-48 p-2 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-lg rounded-md`}
 >
 {" "}
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Peru
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 {showBlog && (
 <Button onClick={() => router.push("/blog")}>
 Gallery of Photos
 </Button>
 )}
 {showResume && (
 <div className="relative">
 <Popover className="block">
 {({ open }) => (
 <>
 <Popover.Button className="w-full text-left">
 <Button>Travel Forms (🇺🇸 to Latin America)</Button>
 </Popover.Button>
 <Popover.Panel
 className={`absolute right-0 z-10 w-11/12 p-4 ${
 theme === "dark" ? "bg-slate-800" : "bg-white"
 } shadow-md rounded-md`}
 >
 <Button
 onClick={() =>
 window.open(
 "https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit"
 )
 }
 >
 Registration Form
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Medical Form
 </Button>
 <Button onClick={() => window.open("/resume3.pdf")}>
 Terms and conditions
 </Button>
 <Button onClick={() => window.open("/resume4.pdf")}>
 Program agreement
 </Button>
 <Button onClick={() => window.open("/resume5.pdf")}>
 student behavior guidelines
 </Button>
 <Button onClick={() => window.open("/resume3.pdf")}>
 Responsability Disclaimers
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Things to bring to Peru
 </Button>
 <Button onClick={() => window.open("/resume2.pdf")}>
 Things to bring to Cuba
 </Button>
 </Popover.Panel>
 </>
 )}
 </Popover>
 </div>
 )}
 <Button
 onClick={() =>
 window.open("https://starrtravelinsurance.com/?agentcode=7119")
 }
 >
 Insurance Purchase
 </Button>
 <Button onClick={handleWorkScroll}>Testimonials</Button>
 <Button
 type="primary"
 onClick={() => window.open("mailto:..@gmail.com")}
 >
 Contact us
 </Button>

 {mounted && theme && data.darkMode && (
 <Button
 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
 >
 <img
 className="h-6"
 src={`/images /${theme === "dark" ? "moon.svg" : "sun.svg"}`}
 ></img>
 </Button>
 )}
 </div>
 )}
 </div>
 </>
 );
};

export default Header;
