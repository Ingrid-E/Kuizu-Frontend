export const getAllCourses = async()=>{
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+'course',{
        method: 'GET',
        headers: {}
    })
    const courseData = await res.json()
    return courseData
}

export const createCourse = async(courseData)=>{
    var formdata = new FormData();
    formdata.append("icon", courseData.get('icon'),  courseData.get('icon').name);
    formdata.append("name", courseData.get('name'));
    formdata.append("description", courseData.get('description'));
    formdata.append("shortName", "short");
    formdata.append("createdAt", formatDate(new Date()));
    formdata.append("startAt", courseData.get('startAt'));
    formdata.append("endAt", courseData.get('endAt'));
    formdata.append("id_teacher", courseData.get('id_teacher'));
    //mientras se intenta acomodar el formdata en el apigateway
    const res = await fetch('https://kuizu-courses-micro.herokuapp.com/',{
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    })
    return res.json()
}

const formatDate = (date)=>{
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
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
    console.log("GET USER TYPE COURSE: ", type, type_id)
    const res = await fetch(process.env.REACT_APP_DEV_MICRO+`course/${type}/${type_id}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const courseData = await res.json()
    console.log()
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

export const getStudentCoursesAverage = async(student_id)=>{
    const courses = await fetch(process.env.REACT_APP_DEV_MICRO+`course/student/average/${student_id}`,{
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