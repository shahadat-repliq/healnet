export function getCategoryList(specialties) {
    return specialties?.map(({ id, name }) => ({
        id,
        value: name,
        label: name
    }));
}