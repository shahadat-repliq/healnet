export function getCategoryList(specialties) {
    return specialties?.map(({ id, name }) => ({
        id,
        value: name,
        label: name
    }));
}

export function getDoctorList(doctors) {
    return doctors?.map(({ name }) => ({
        value: name,
        label: name
    }));
}

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
