import PropTypes from "prop-types"

export function InputField({ id, label, type, placeholder, value, onChange, icon, labelClassName }) {
  return (
    <div className="space-y-2">
      <label 
        htmlFor={id} 
        className={`block font-medium ${labelClassName || "text-[#F4F4F4]"}`}
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-10 py-2 bg-transparent border border-[#F4F4F4] border-opacity-20 rounded-md text-[#F4F4F4] focus:outline-none focus:ring-2 focus:ring-[#FFD100]"
        />
      </div>
    </div>
  )
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.node,
  labelClassName: PropTypes.string
};