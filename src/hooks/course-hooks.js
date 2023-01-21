export const getAllCourses = async()=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+'course',{
        method: 'GET',
        headers: {}
    })
    const courseData = await res.json()
    return courseData
}

export const getUserTypeCourse = async(type, type_id)=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+`course/${type}/${type_id}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const courseData = await res.json()
    console.log("COURSE ID: " + courseData)
    return courseData
}

export const getUserInfo = async(user_type, type_id)=>{
    const type = await fetch(process.env.REACT_APP_DEV_MICRO+`user/${user_type}/${type_id}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const typeData = await type.json()
    let id_user
    if(typeData.success){
        if(user_type == "teacher"){
            id_user = typeData.data.teacher.id_user
        }
        if(user_type == "student"){
            id_user = typeData.data.student.id_user
        }
    }
    const user = await fetch(process.env.REACT_APP_DEV_MICRO+`user/${id_user}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const userData = await user.json()
    return userData
}

export const getTeacherCoursesAverage = async(teacher_id)=>{
    const courses = await fetch(process.env.REACT_APP_DEV_MICRO+`course/teacher/average/${teacher_id}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const coursesData = await courses.json()
    console.log("COURSE TEACHER AVG: ", coursesData)
    return coursesData
}

export const getCourseActivities = async(id_course)=>{
    const activities = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/course/${id_course}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const activitiesData = await activities.json()
    console.log("ACTIVITIES AVG: ", activitiesData)
    return activitiesData
}