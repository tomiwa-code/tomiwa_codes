"use client";
import { ThemeContext } from "@/context/Theme.Context";
import emailjs from "@emailjs/browser";
import { useContext, useEffect, useState } from "react";
import { usePresence, useAnimate, useInView, motion } from "framer-motion";

const ContactView = () => {
  const [msg, setMsg] = useState({
    text: "",
    color: "",
    status: false,
    textColor: "",
  });
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const notification = {
    initial: {
      opacity: 0,
      x: 500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 8,
        mass: 0.4,
      },
    },
  };

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send("service_p0bzn9a", "template_irt9f7c", mail, "7XYo08YpLvvcOo7Rf")
      .then((res) => {
        if (res) {
          setIsLoading(false);
          setMsg({
            text: "Thanks, message received. I'll get back as soon as possible.",
            color: "bg-green-500",
            status: true,
            textColor: "text-lightSecondary",
          });
          clearForm();
        }
      })
      .catch((err) => {
        if (err) {
          setIsLoading(false);
          setMsg({
            text: "Sorry, message was not sent. Please check your network and try again.",
            color: "bg-red-500",
            status: true,
            textColor: "text-lightSecondary",
          });
        }
      });
  };

  // Function to clear the form
  function clearForm() {
    const form = document.getElementById("contactForm") as HTMLFormElement;
    form.reset();
  }

  useEffect(() => {
    if (msg?.status) {
      setTimeout(() => {
        setMsg((prev) => ({
          ...prev,
          status: false,
        }));
      }, 5000);
    }
  }, [msg?.status]);

  useEffect(() => {
    if (isPresent) {
      if (isInView) {
        const enterAnimation = async () => {
          await animate("#contactForm", { opacity: 0, x: 50 });
          await animate(
            "#contactForm",
            { x: 0, opacity: 1 },
            { type: "spring", stiffness: 150, delay: 0.2 }
          );
        };
        enterAnimation();
      }
    } else {
      const exitAnimation = async () => {
        await animate("#contactForm", { opacity: 0, x: 50 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, isInView]);

  return (
    <>
      <motion.div
        variants={notification}
        initial={"initial"}
        animate={msg.status ? "animate" : ""}
        onClick={() =>
          setMsg((prev) => ({
            ...prev,
            status: false,
          }))
        }
        className={`${msg.color} w-80 px-5 py-4 cursor-pointer rounded absolute right-10 top-10 z-50`}
      >
        <p className={`text-sm ${msg.textColor} font-medium`}>{msg.text}</p>
      </motion.div>
      <div ref={scope} className={` pb-12 md:pb-0`}>
        <form
          className="w-8/12 lg:w-5/12 mx-auto opacity-0"
          onSubmit={formSubmit}
          id="contactForm"
        >
          <div className="block md:flex md:items-center md:justify-between mb-5 md:mb-10">
            <div className="mb-5 md:mb-0 md:space-y-2 w-full md:w-5/12">
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }  capitalize md:mb-1`}
              >
                your name
              </p>
              <input
                type="text"
                className={`text-sm ${
                  theme === "dark"
                    ? "text-gray-300 placeholder:text-gray-300"
                    : "text-gray-500 placeholder:text-gray-500"
                }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none`}
                placeholder="Enter your name"
                onChange={(e) =>
                  setMail((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="md:space-y-2 w-full md:w-5/12">
              <p
                className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }  capitalize md:mb-1`}
              >
                email address
              </p>
              <input
                type="email"
                className={`text-sm ${
                  theme === "dark"
                    ? "text-gray-300 placeholder:text-gray-300"
                    : "text-gray-500 placeholder:text-gray-500"
                }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none`}
                placeholder="Enter your email address"
                onChange={(e) =>
                  setMail((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
          <div className="w-full">
            <p
              className={`text-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }  capitalize md:mb-1`}
            >
              your message
            </p>
            <textarea
              className={`text-sm ${
                theme === "dark"
                  ? "text-gray-300 placeholder:text-gray-300"
                  : "text-gray-500 placeholder:text-gray-500"
              }  text-sm py-3 border-b border-b-gray-400 w-full bg-transparent focus:outline-none h-20 md:h-16 resize-none`}
              placeholder="Hi, we need a website for our Company X. How soon can you hop on to discuss this?"
              onChange={(e) =>
                setMail((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className={`border-2 ${
                theme === "dark"
                  ? "border-dark-500 hover:bg-dark-500 hover:text-darkSecondary text-dark-500"
                  : "border-light-500 hover:bg-light-500 hover:text-lightSecondary text-light-500"
              } ${
                isLoading ? "pointer-events-none" : "pointer-events-auto"
              } duration-200 uppercase w-44 py-4 font-medium text-xs rounded mt-8 md:mt-10`}
            >
              {isLoading ? "sending" : "send a message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactView;
