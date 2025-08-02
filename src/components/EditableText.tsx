import React, { useEffect, useRef, useState } from "react";

type editableTextProps = {
  text: string;
  onChange: (newValue: string) => void;
  className: string;
};

export const EditableText: React.FC<editableTextProps> = ({
  text,
  onChange,
  className,
}) => {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(text);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handDoubleClick = () => {
    setTemp(text);
    setEditing(true);
  };

  const handleBlur = () => {
    onChange(temp);
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onChange(temp);
      setEditing(false);
    } else if (e.key === "Escape") {
      setEditing(false);
    }
  };

  return (
    <span className={className}>
      {editing ? (
        <input
          ref={inputRef}
          type="text"
          value={temp}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTemp(e.target.value)}
        ></input>
      ) : (
        <span onDoubleClick={handDoubleClick}>{text}</span>
      )}
    </span>
  );
};
