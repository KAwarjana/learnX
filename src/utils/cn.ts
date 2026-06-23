type ClassValue = string | number | boolean | null | undefined | Record<string, boolean>;

/**
 * Tiny classnames helper — joins truthy class strings together
 * and supports a conditional object map like { "bg-red-500": isError }.
 */
export function cn(...values: ClassValue[]): string {
  const classes: string[] = [];

  for (const value of values) {
    if (!value) continue;

    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      continue;
    }

    if (typeof value === "object") {
      for (const [key, enabled] of Object.entries(value)) {
        if (enabled) classes.push(key);
      }
    }
  }

  return classes.join(" ");
}
