export function makeTimestamp(sessionDurationMs: number): string {
  let retVal = "";
  if (sessionDurationMs == 0) {
    return '0:0:0';
  }
  if (sessionDurationMs == null) {
    return '0:0:0';
  }
  const sum = sessionDurationMs; 
  const sum_seconds = Math.floor(sum / 1000);
  const hours = Math.floor(sum_seconds / 3600);
  const minutes = Math.floor((sum_seconds % 3600) / 60);
  const seconds = sum_seconds % 60;

  retVal = `${hours}:${minutes}:${seconds}`;

  return retVal;
}
