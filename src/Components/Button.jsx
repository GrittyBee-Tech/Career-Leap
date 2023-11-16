import LoaderIcon from "./Icons/LoaderIcon";

 
 
const Button = ({text, styles, position, background, isLoading, handleClick, ...props}) => {
  const hasChildren = props && props.children;
  return (
    <div className={position}>
      <button {...props} 
      className={`${background || 'bg-[#E5B611]'} py-3 px-18 w-44 rounded text-sm font-semibold leading-6 shadow-xl ${styles} `} onClick={handleClick}>
       
    {isLoading ? 
   <LoaderIcon />
    :
    <>
    {hasChildren ? (
          <>
            {props.children}
            {text}
          </>
        ) : (
          text
        )}
    </>
    }
      </button>
    </div>
  )
}

export default Button