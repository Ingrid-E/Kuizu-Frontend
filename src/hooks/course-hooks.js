export const getAllCourses = async()=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+'course',{
        method: 'GET',
        headers: {}
    })
    const courseData = await res.json()
    return courseData
}

export const getCourseInfo = async(course_id)=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+`course/${course_id}`,{
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
    return coursesData
}

export const getCourseAverage = async(course_id)=>{
    const courses = await fetch(process.env.REACT_APP_DEV_MICRO+`course/average/${course_id}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const coursesData = await courses.json()
    return coursesData
}