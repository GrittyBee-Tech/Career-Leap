
const InputGroup = ({ type, name, onChange, value, label, placeholder }) => {
  return (
    <div className='flex flex-col gap-3.5'>
        <label htmlFor={name}>{label}</label>
        <input type={type} value={value} name={name} onChange={onChange} className='w-full border border-[#0A0A29] rounded-md' id="" placeholder={placeholder} />
    </div>
  )
}

export default InputGroup