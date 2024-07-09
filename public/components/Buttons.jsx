// import React from 'react'
// import { prototype } from 'postcss/lib/at-rule'
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react'
function Buttons({label,ButtonClassName,className,iconclassName,icon,spanclassName,typeclassName}) {
  // onClick,disabled
  return (
    <div>
      <button className={className} type={typeclassName}>
    <div className={spanclassName}> <Icon icon={icon} className={iconclassName} /> </div>  
        <div className={ButtonClassName}>
        {label}
        </div>
        
      </button>
      {/* disabled={disabled} */}
    </div>
  )
  // onClick={onClick}
}
Buttons.propTypes = {
    label: PropTypes.string,
    
    icon: PropTypes.string,
    className: PropTypes.string,
    iconclassName: PropTypes.string,
    spanclassName: PropTypes.string,
    ButtonClassName: PropTypes.string,
    typeclassName:PropTypes.string,
    // disabled: PropTypes.bool,
  };
export default Buttons
