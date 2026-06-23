import { cn } from "../utils/cn";
import { GRADE_OPTIONS, PRODUCT_FILTER_GROUPS, SUBJECT_OPTIONS } from "../data";
import type { Theme } from "../types";
import { SlidersIcon } from "../ui/icons";

type Props = {
  theme: Theme;
  selectedFilterCheckboxes: string[];
  onToggleCheckbox: (option: string) => void;
  /** "classes" renders grouped checkbox filters (grade/subject/type).
   *  "tutors" renders two scrollable sections (grade/subject) with fade dividers. */
  variant?: "classes" | "tutors";
};

function CheckboxRow({
  theme,
  label,
  checked,
  onToggle,
}: {
  theme: Theme;
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-3 py-1.5 transition",
        theme === "light" ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white",
      )}
    >
      <span
        className={cn(
          "grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[3px] border transition",
          checked
            ? "border-blue-600 bg-blue-600"
            : theme === "light"
              ? "border-slate-200 bg-white"
              : "border-slate-700 bg-slate-950",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 16 16"
            className="h-2.5 w-2.5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 8 3.5 3.5L13 5" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onToggle} />
      <span className="text-[13px] font-medium leading-none">{label}</span>
    </label>
  );
}

function GroupedCheckboxFilters({
  theme,
  selectedFilterCheckboxes,
  onToggleCheckbox,
}: Omit<Props, "variant">) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <SlidersIcon className="h-5 w-5 text-sky-600" />
          Filter Options
        </h2>
      </div>

      <div className="mt-4 space-y-5">
        {PRODUCT_FILTER_GROUPS.map((group) => (
          <div key={group.title} className="py-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-1 rounded-full bg-sky-500" />
              <p className="text-sm font-bold uppercase tracking-tight">{group.title}</p>
            </div>
            <div className="mt-3 space-y-2 pl-3">
              {group.options.map((option) => {
                const checked = selectedFilterCheckboxes.includes(option);
                return (
                  <label key={option} className="flex cursor-pointer items-center gap-2 text-sm">
                    <span
                      className={cn(
                        "grid h-4 w-4 flex-shrink-0 place-items-center rounded-full border-2 transition",
                        checked
                          ? "border-sky-600 bg-sky-600"
                          : theme === "light"
                            ? "border-slate-300 bg-white"
                            : "border-slate-600 bg-slate-900",
                      )}
                    >
                      {checked && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </span>
                    <button
                      type="button"
                      onClick={() => onToggleCheckbox(option)}
                      className={cn(
                        "text-left transition",
                        theme === "light" ? "text-slate-700 hover:text-sky-600" : "text-slate-300 hover:text-sky-400",
                      )}
                    >
                      {option}
                    </button>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function TutorScrollFilters({ theme, selectedFilterCheckboxes, onToggleCheckbox }: Omit<Props, "variant">) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className={cn("pb-3 text-lg tracking-wide font-extrabold", theme === "light" ? "text-slate-700" : "text-white")}>
          Filter Options
        </h3>
        <div
          className={cn(
            "h-[1px] w-11/12",
            theme === "light"
              ? "bg-gradient-to-r from-slate-300 via-slate-300/80 to-transparent"
              : "bg-gradient-to-r from-slate-700 via-slate-700/80 to-transparent",
          )}
        />
      </div>

      <div className="relative">
        <h4 className={cn("mb-4 text-sm font-bold", theme === "light" ? "text-slate-700" : "text-white")}>By Grade</h4>
        <div
          className={cn(
            "max-h-44 overflow-y-auto pr-4 ml-2",
            theme === "light"
              ? "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-track]:bg-slate-200"
              : "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-track]:bg-slate-800",
          )}
        >
          {GRADE_OPTIONS.map((option) => (
            <CheckboxRow
              key={`grade-${option}`}
              theme={theme}
              label={option}
              checked={selectedFilterCheckboxes.includes(option)}
              onToggle={() => onToggleCheckbox(option)}
            />
          ))}
        </div>
        <div
          className={cn(
            "mt-6 h-[1px] w-11/12",
            theme === "light"
              ? "bg-gradient-to-l from-slate-300 via-slate-300/80 to-transparent"
              : "bg-gradient-to-l from-slate-700 via-slate-700/80 to-transparent",
          )}
        />
      </div>

      <div className="relative">
        <h4 className={cn("mb-4 text-sm font-bold", theme === "light" ? "text-slate-700" : "text-white")}>By Subject</h4>
        <div
          className={cn(
            "max-h-44 overflow-y-auto pr-4 ml-2",
            theme === "light"
              ? "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-track]:bg-slate-200"
              : "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-track]:bg-slate-800",
          )}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <CheckboxRow
              key={`subject-${option}`}
              theme={theme}
              label={option}
              checked={selectedFilterCheckboxes.includes(option)}
              onToggle={() => onToggleCheckbox(option)}
            />
          ))}
        </div>
        <div
          className={cn(
            "mt-6 h-[1px] w-11/12",
            theme === "light"
              ? "bg-gradient-to-r from-slate-300 via-slate-300/80 to-transparent"
              : "bg-gradient-to-r from-slate-700 via-slate-700/80 to-transparent",
          )}
        />
      </div>
    </div>
  );
}

export function FilterOptions({ theme, selectedFilterCheckboxes, onToggleCheckbox, variant = "classes" }: Props) {
  if (variant === "tutors") {
    return (
      <TutorScrollFilters
        theme={theme}
        selectedFilterCheckboxes={selectedFilterCheckboxes}
        onToggleCheckbox={onToggleCheckbox}
      />
    );
  }

  return (
    <GroupedCheckboxFilters
      theme={theme}
      selectedFilterCheckboxes={selectedFilterCheckboxes}
      onToggleCheckbox={onToggleCheckbox}
    />
  );
}
