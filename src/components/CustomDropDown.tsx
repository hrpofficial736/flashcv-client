import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const CustomDropDown: React.FC<{
  items: string[];
  callback: (selectedValue: string, index: number) => void;
  dropDownIndex: number;
}> = ({ items, callback, dropDownIndex }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(items[0]);

  useEffect(() => {
    callback(selectedValue, dropDownIndex);
  }, [selectedValue])
  return (
    <div className="relative w-56">
      <div
        onClick={() => setOpen(!open)}
        className="px-3 w-full py-2 font-poppins flex justify-between items-center gap-x-5 cursor-pointer shadow-sm shadow-black/30 rounded-lg"
      >
        <span className="truncate max-w-[80%]">{selectedValue}</span>
        <IoIosArrowDown
          className={`text-black/50 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="list-none bg-white w-full flex flex-col shadow-black/50 shadow-md z-50 absolute top-full mt-1 left-0 rounded-lg"
          >
            {items.map((item, index) => {
              return (
                <li
                  className="min-w-full z-50 rounded-lg cursor-pointer px-3 py-2 hover:bg-orange-100"
                  onClick={() => {
                    setSelectedValue(item);
                    setOpen(!open);
                  }}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
