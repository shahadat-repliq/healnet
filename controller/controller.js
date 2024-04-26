export async function getDoctors(){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/doctors.json`)
    if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
    return response.json();
}

export async function getCategories(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/category.json`)
  if (!response.ok) {
      throw new Error('Failed to fetch doctors');
    }
  return response.json();
}