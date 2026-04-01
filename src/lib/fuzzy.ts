/**
 * Compute Levenshtein distance between two strings.
 */
function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }

  return dp[m][n];
}

/**
 * Check if the input is a fuzzy match (close but not exact) to any valid option.
 * Returns true if the input is NOT an exact match but IS close to at least one option.
 */
export function isFuzzyMatch(input: string, validOptions: string[]): boolean {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return false;

  // Check for exact match first
  const isExact = validOptions.some(
    opt => opt.toLowerCase() === normalized
  );
  if (isExact) return false;

  // Check for close matches (distance <= 2)
  return validOptions.some(opt => {
    const dist = levenshtein(normalized, opt.toLowerCase());
    return dist > 0 && dist <= 2;
  });
}

/**
 * Check if input exactly matches any option (case-insensitive).
 */
export function isExactMatch(input: string, target: string): boolean {
  return input.trim().toLowerCase() === target.toLowerCase();
}
