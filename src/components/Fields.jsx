import clsx from 'clsx'

export const formClasses =
  'block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'

export const disabledFormClasses =
  'block w-full appearance-none rounded-lg border border-gray-400 bg-gray-400 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]"
    >
      {children}
    </label>
  )
}

export function TextField({ id, label, type = 'text', className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function TextAreaField({
  id,
  label,
  type = 'text',
  className,
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <textarea id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className, ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
