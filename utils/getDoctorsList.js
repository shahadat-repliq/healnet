export function getDoctorList(doctors) {
    return doctors?.map(({ name }) => ({
        value: name,
        label: name
    }));
}