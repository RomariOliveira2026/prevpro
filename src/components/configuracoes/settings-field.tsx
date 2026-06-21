interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        {description && (
          <p className="mt-1 text-xs text-slate-500">{description}</p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email";
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: TextFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 transition-colors placeholder:text-slate-400 focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 transition-colors focus:border-prevpro-blue/40 focus:outline-none focus:ring-2 focus:ring-prevpro-blue/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

interface ToggleFieldProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function ToggleField({
  label,
  description,
  checked,
  onChange,
}: ToggleFieldProps) {
  return (
    <div className="group flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-prevpro-gray/30 px-4 py-3.5 transition-all duration-200 hover:border-prevpro-blue/15 hover:bg-white hover:shadow-sm">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-700">{label}</p>
        {description && (
          <p className="mt-0.5 text-xs text-slate-500">{description}</p>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-300 ${
          checked ? "bg-prevpro-green shadow-sm shadow-prevpro-green/30" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

interface SensitivityFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  hint?: string;
}

export function SensitivityField({
  label,
  value,
  options,
  onChange,
  hint,
}: SensitivityFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-slate-500">{label}</label>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => {
          const isActive = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-prevpro-blue bg-prevpro-blue text-white shadow-md shadow-prevpro-blue/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-prevpro-blue/30 hover:bg-prevpro-gray/50"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {hint && <p className="mt-2 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}


interface ReadOnlyFieldProps {
  label: string;
  value: string;
}

export function ReadOnlyField({ label, value }: ReadOnlyFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">
        {label}
      </label>
      <div className="rounded-xl border border-slate-100 bg-prevpro-gray/40 px-3.5 py-2.5 text-sm font-medium text-slate-600">
        {value}
      </div>
    </div>
  );
}

interface UploadFieldProps {
  label: string;
  description?: string;
  fileName?: string;
}

export function UploadField({ label, description, fileName }: UploadFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">{label}</label>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 rounded-xl border border-dashed border-slate-200 bg-prevpro-gray/20 px-4 py-4 text-left transition-all duration-200 hover:border-prevpro-blue/30 hover:bg-white hover:shadow-sm"
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-700">
            {fileName ?? "Selecionar arquivo"}
          </p>
          {description && (
            <p className="mt-0.5 text-xs text-slate-500">{description}</p>
          )}
        </div>
        <span className="shrink-0 rounded-lg bg-prevpro-blue/10 px-3 py-1.5 text-xs font-semibold text-prevpro-blue">
          Upload
        </span>
      </button>
    </div>
  );
}

interface ColorFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function ColorField({ label, value, onChange }: ColorFieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">{label}</label>
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-9 cursor-pointer rounded-lg border-0 bg-transparent p-0"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 border-0 bg-transparent text-sm font-mono text-slate-700 focus:outline-none"
        />
      </div>
    </div>
  );
}

interface ThemeFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export function ThemeField({ label, value, options, onChange }: ThemeFieldProps) {
  const icons: Record<string, string> = {
    Claro: "☀️",
    Escuro: "🌙",
    Automático: "🔄",
  };

  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-slate-500">{label}</label>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => {
          const isActive = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 transition-all duration-200 ${
                isActive
                  ? "border-prevpro-blue bg-prevpro-blue/5 text-prevpro-blue shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-prevpro-blue/30"
              }`}
            >
              <span className="text-lg">{icons[option] ?? "⚙️"}</span>
              <span className="text-xs font-semibold">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
