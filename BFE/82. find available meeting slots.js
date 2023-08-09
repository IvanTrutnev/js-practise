// https://bigfrontend.dev/problem/find-available-meeting-slots

function findMeetingSlots(schedules) {
  const times = schedules.flat();

  times.sort((a, b) => a[0] - b[0]);

  const slots = [];

  let prevEnd = 0;

  times.forEach((time) => {
    const [start, end] = time;

    if (prevEnd < start) {
      slots.push([prevEnd, start]);
    }

    prevEnd = Math.max(end, prevEnd);
  });

  if (prevEnd !== 24) {
    slots.push([prevEnd, 24]);
  }

  return slots;
}

console.log(
  findMeetingSlots([
    [
      [13, 15],
      [11, 12],
      [10, 13],
    ],
    [[8, 9]],
    [[13, 18]],
  ])
); //[[0, 8], [9, 10], [18, 24]]
