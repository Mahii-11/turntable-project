import React, { useState } from "react";
import { Check, ChevronRight, Circle } from "lucide-react";

const DropdownMenu = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioSelected, setRadioSelected] = useState("");

  const handleSubmenuToggle = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };

  const handleRadioChange = (e) => {
    setRadioSelected(e.target.value);
  };

  return (
    <div className="dropdown">
      {/* Dropdown Trigger Button */}
      <button className="dropdown-btn">Dropdown</button>

      {/* Dropdown Content */}
      <div className="dropdown-content">
        <div className="dropdown-item">Option 1</div>
        <div className="dropdown-item">Option 2</div>

        {/* Submenu */}
        <div className="dropdown-submenu">
          <button
            onClick={handleSubmenuToggle}
            className="dropdown-item submenu-trigger"
          >
            Submenu <ChevronRight className="ml-auto h-4 w-4" />
          </button>
          {submenuOpen && (
            <div className="submenu-content">
              <div className="dropdown-item">Sub-option 1</div>
              <div className="dropdown-item">Sub-option 2</div>
            </div>
          )}
        </div>

        {/* Checkbox Item */}
        <div className="dropdown-checkbox">
          <label>
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
            Checkbox Option
          </label>
          {checkboxChecked && <Check className="h-4 w-4" />}
        </div>

        {/* Radio Item */}
        <div className="dropdown-radio">
          <label>
            <input
              type="radio"
              name="radio-group"
              value="radio1"
              checked={radioSelected === "radio1"}
              onChange={handleRadioChange}
            />
            Radio Option 1
          </label>
          <label>
            <input
              type="radio"
              name="radio-group"
              value="radio2"
              checked={radioSelected === "radio2"}
              onChange={handleRadioChange}
            />
            Radio Option 2
          </label>
          {radioSelected && <Circle className="h-2 w-2 fill-current" />}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
