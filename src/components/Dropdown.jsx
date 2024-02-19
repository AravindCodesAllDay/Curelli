import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaUser } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown() {
  const nav = useNavigate();

  const exit = () => {
    sessionStorage.clear();
    nav("/login");
  };

  const profile = [
    {
      title: "My Orders",
      to: "#",
    },
    {
      title: "Wishlist",
      to: "/wishlist",
    },
    {
      title: "Profile",
      to: "#",
    },
    {
      title: "Logout",
      onclick: exit,
    },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left z-30">
      <div>
        <Menu.Button className="inline-flex w-full justify-center text-sm font-semibold text-gray-900 shadow-sm rounded-full mt-1">
          {sessionStorage.getItem("name") != null ? (
            <p className=" text-white rounded-full p-1 w-8 bg-[#964B00] border-2">
              {sessionStorage.getItem("name").charAt(0)}
            </p>
          ) : (
            <Link to="/login">
              <FaUser className="w-[27px] h-[27px] text-white" />
            </Link>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {profile.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    to={item.to && item.to}
                    onClick={() => item.onclick && item.onclick()}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
