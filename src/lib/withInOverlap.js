export function withInOverlap(intervals, targetInterval) {
  for (const interval of intervals) {
    const [start1, end1] = interval;
    const [start2, end2] = targetInterval;

    if (start1 <= end2 && end1 >= start2) {
      return true;
    }
  }

  return false;
}
