export const courseData = async()=>{
    const data = await fetch('courses.json')
    const course = await data.json()
    return course;
}