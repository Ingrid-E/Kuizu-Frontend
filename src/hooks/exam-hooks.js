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

export const getStudentExamGrade = async(id_student, id_exam)=>{
    const grade = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/grade/student/${id_student}/exam/${id_exam}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const gradeData = await grade.json()
    return gradeData
}

export const getStudentCompletedExam = async(idExam)=>{
    const completed = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/grade/student?idExam=${idExam}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const completedData = await completed.json()
    return completedData
}

export const getQuestionInfo = async(idQuestion)=>{
    const question = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/question/${idQuestion}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const questionData = await question.json()
    return questionData
}

export const getQuestionOptions = async(idQuestion)=>{
    const options = await fetch(process.env.REACT_APP_DEV_MICRO+`exam/question/option?idQuestion=${idQuestion}`,{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    const optionsData = await options.json()
    return optionsData
}

export const createExam = async(data)=>{
    //mientras se intenta acomodar el formdata en el apigateway
    const res = await fetch('https://kuizu-exam-micro.herokuapp.com/exam',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: data.get('name'),
            description: '...',
            startAt: data.get('startAt'),
            endAt: data.get('endAt'),
            timeLimit: data.get('timeLimit'),
            state: 'active',
            idCourse: data.get('idCourse')
        }),
        redirect: 'follow'
    })
    return res.json()
}


