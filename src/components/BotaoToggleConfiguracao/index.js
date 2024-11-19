import React, { useState } from "react";
import * as C from './style'

const ToggleButton = () => {
    
  const [active, setActive] = useState(false);

  return (
    <C.ToggleSwitch
      active={active}
      onClick={() => setActive((prev) => !prev)}
    >
      <C.ToggleCircle active={active} />
    </C.ToggleSwitch>
  );
};

export default ToggleButton;
