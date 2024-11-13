interface SelectOption {
  text: string;
  value: string;
  id: string;
}

interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  selectLabel?: string;
  selectName?: string;
  selectId?: string;
  options?: SelectOption[];
  leftElement?: React.ReactElement;
  styles?: {
    label?: string;
    input?: string;
    select?: string;
    container?: string;
  };
}

export default function Input(props: InputProps) {
  return (
    <div className={props.styles?.container}>
      {props.label && (
        <label
          htmlFor="price"
          className={"block text-sm/6 font-medium text-gray-900 ".concat(
            props.styles?.label || ""
          )}
        >
          {props.label}
        </label>
      )}
      <div className="relative mt-1 rounded-md shadow-sm">
        {props.leftElement && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              {props.leftElement}
            </span>
          </div>
        )}
        <input
          id={props.id}
          name={props.name}
          type="text"
          placeholder={props.placeholder}
          className={`block w-full rounded-md border-0 py-2 ${
            props.leftElement ? "pl-7" : "pl-3"
          } ${
            props.options ? "pr-20" : "pr-3"
          } text-gray-900 ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-inset focus:ring-2 focus:ring-inset focus:outline-none focus-visible:outline-none focus:ring-indigo-600 sm:text-sm/6 `.concat(
            props.styles?.input || ""
          )}
        />
        {props.options && props.options.length > 0 && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            {props.selectLabel && (
              <label htmlFor={props.selectId} className="sr-only">
                {props.selectLabel}
              </label>
            )}
            <select
              id={props.selectId}
              name={props.selectName}
              className={"h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ".concat(
                props.styles?.select || ""
              )}
            >
              {props.options.map((o) => (
                <option value={o.value} id={`${props.selectId}-option-${o.id}`}>
                  {o.text}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
