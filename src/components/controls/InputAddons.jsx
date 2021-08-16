const InputAddons = ({
  field, // { name, value, onChange, onBlur }
  label,
  inputGroupClassName = 'form-group',
  inputClassName = 'form-control',
  type = 'text',
  ...props
}) => {
  return (
    <div className={inputGroupClassName}>
      <input
        type={type}
        className={`${inputClassName}`}
        placeholder={label}
        autoComplete='off'
        {...field}
        {...props}
        value={field.value || ''}
      />
    </div>
  )
}

export default InputAddons
