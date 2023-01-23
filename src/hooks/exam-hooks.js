export const getExam = async(id_exam)=>{
    const exam = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/${id_exam}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const examData = await exam.json()
    return examData
}

export const updateExamState = async(id_course)=>{
    const exam = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/course/${id_course}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const examData = await exam.json()
    return examData
}

export const getExamQuestions = async(id_exam)=>{
    const questions = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/question/list/${id_exam}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const questionsData = await questions.json()
    return questionsData
}

export const getCourseActivities = async(id_course)=>{
    const activities = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/course/${id_course}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const activitiesData = await activities.json()
    return activitiesData
}

