export function getTime(data) {
    const { days, hours } = data || {};
    if (days && hours) {
      return days.map(day => ({
        value: `${day}: ${hours}`,
        label: `${day}: ${hours}`
      }));
    }
    return [];
  }
  