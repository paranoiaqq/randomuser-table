import * as React from "react";
import styles from "./Filter.module.scss";
import { useEffect, useRef, useState } from "react";
import cross from "../../../assets/cross.svg";

type Props = {
  placeholder: string;
  options: string[];
  callback: React.Dispatch<React.SetStateAction<string[]>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

interface option {
  value: string;
  isSelected: boolean;
}

const Filter = ({ placeholder, options, callback, setIsSelected }: Props) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }

    callback(selectedOptions);
  }, [selectedOptions]);

  const filterClickHandler = () => {
    const drop = dropRef.current;
    if (drop) {
      if (drop.style.display === "none" || !drop.style.display) {
        drop.style.display = "flex";
        drop.style.flexDirection = "column";
        drop.style.justifyContent = "center";
      } else {
        drop.style.display = "none";
      }
    }
  };

  const optionClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const option = event.currentTarget.name;
    if (selectedOptions.find((item) => item === option)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== option));
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  const clearHandler = () => {
    setSelectedOptions([]);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={filterClickHandler} className={styles.dropbtn}>
        <div className={styles.optionsContainer}>
          <p>{placeholder}</p>
          {selectedOptions.map((option, index) => {
            return (
              <p key={index} className={styles.option}>
                {option}
              </p>
            );
          })}
          {selectedOptions.length > 0 ? (
            <button onClick={clearHandler} className={styles.crossButton}>
              <img src={cross} alt="cross button" />
            </button>
          ) : (
            ""
          )}
        </div>
      </button>

      <div ref={dropRef} className={styles.dropdownContent}>
        <div className={styles.btnsContainer}>
          {selectedOptions.map((option, index, array) => (
            <div className={styles.btnContainer} key={index}>
              <button
                className={styles.selected}
                name={option}
                onClick={optionClickHandler}
              >
                {option}
              </button>
            </div>
          ))}
          {selectedOptions.length > 0 ? <div className={styles.divider} /> : ""}
        </div>

        <div className={styles.btnsContainer}>
          {options.map((option, index) => {
            if (selectedOptions.indexOf(option) === -1)
              return (
                <div className={styles.btnContainer} key={index}>
                  <button name={option} onClick={optionClickHandler}>
                    {option}
                  </button>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
