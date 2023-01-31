import React,{useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { getExamQuestions, getExam} from "../../hooks/exam-hooks";
import CourseBar from "../course-bar/CourseBar";
import ExamContent from "../exam-content/ExamContent";
import ExamInfo from "../exam-info/ExamInfo";
import Cookies from 'js-cookie';
import "./dashboard-exam.css";
import ExamInfoStudent from "../exam-info-student/ExamInfoStudent";
import { getCourseInfo } from "../../hooks/course-hooks";
import CreationView from "../creation-view/CreationView";

const DashboardExam = () => {
  const userType = JSON.parse(Cookies.get('user')).type
  const {id_exam } = useParams();
  const [questions, setQuestions] = useState([])
  const [exam, setExam] = useState({
    startAt: "0000-01-01T00:00:00",
    endAt: "0000-01-01T10:00:00",
  })
  const [courseName, setCourseName] = useState('')
  const [creationComponent, setCreationComponent] = useState("");


  useEffect(()=>{
    if(exam.idCourse !== '' && exam.idCourse !== undefined){
      getCourseName(exam.idCourse)
    }
  }, [exam])

  useEffect(()=>{
    handleExamInfo(id_exam)
  }, [])

  const handleExamInfo = async(exam_id)=>{
    const exam = await getExam(exam_id);
    const questions = await getExamQuestions(exam_id);
    setExam(exam.data.data)
    setQuestions(questions.data.data)
  }

  const getCourseName = async(id)=>{
    const courseInfo = await getCourseInfo(id)
    setCourseName(courseInfo.data.course.name)
  }
  function handleClick(e, creation) {
    e.preventDefault();
    setCreationComponent(creation);
  }

  return (
    <div className="dashboard-exam">
      <CourseBar text={courseName}/>
        {userType === "student"? 
        <div className="sections-exam">
          <ExamInfoStudent data={exam} questions={questions.length}/>
        </div>
        :<div className="sections-exam">
          <ExamContent questions={questions} addQuestion={handleClick}/>
          <ExamInfo data={exam} questions={questions.length}/>
        </div>
        }
        {creationComponent === "exam" ||
        creationComponent === "course" ||
        creationComponent === "question" ? (
          <div className="creation-view-container-active">
            <button
              className="creation-view-exit-button"
              onClick={(e) => handleClick(e, "")}
            >
              x
            </button>
            <CreationView type={creationComponent} />
          </div>
        ) : (
          <div className='empty'></div>
        )}
    </div>
  );
};

export default DashboardExam;
