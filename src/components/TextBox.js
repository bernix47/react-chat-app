import React, { useState } from "react";

export default function TextBox({onSubmit}) {
  
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
        onSubmit(value);
      setValue("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id='text'
        class="textbox container input-group"
      >
        <input
          value={value}
          onChange={handleInputChange}
          type="text"
          class="form-control"
          placeholder="Enter your message.."
          aria-describedby="basic-addon1"
          onKeyDown={e => e.key ==='Enter' ? handleSubmit:null}
        />
        <button class="input-group-addon btn btn-default" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="auto"
            fill="currentColor"
            class="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </form>
    </>
  );
}
