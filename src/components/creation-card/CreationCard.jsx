import React from "react";
import { useState } from "react";
import Cookies from 'js-cookie';
import "./creation-card.css";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { createCourse } from "../../hooks/course-hooks";

const CreationCard = ({ text }) => {

    const type = text;
    const [options, setOptions] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const teacher_id = JSON.parse(Cookies.get('user')).type_id;
    
    function handleAddOption(e) {
      e.preventDefault();
      const newOptions = [...options, { id: options.length + 1, text: 'New Item' }];
      setOptions(newOptions);
    }

    function handleAddStudent(e) {
      e.preventDefault();
      students.push('hola');
      setStudents(students);
    }

    const hanldeCreateCourse = async(e)=>{
      e.preventDefault()
      setLoading(true)
      const formData = new FormData(e.currentTarget);
      formData.append('id_teacher', teacher_id.toString())
      formData.append('startAt', formatDate(formData.get('courseStartDay'), formData.get('courseStartMonth'), formData.get('courseStartYear')))
      formData.append('endAt', formatDate(formData.get('courseEndDay'), formData.get('courseEndMonth'),  formData.get('courseEndYear')))
      const response = await createCourse(formData)
      if(response.success){
        setLoading(false)
        window.location.reload(false)
      }
    }

    const formatDate = (day, month, year)=>{
      return `${year}-${month}-${day}`
    }

    if (type === 'course') {
        return (
            <div className="creation-card">
              <div className="creation-card-loader">{loading? <LoadingSpinner/>:<></>}</div>
              <h1 className="creation-card-title">Creando curso</h1>
              <form className="creation-card-form" onSubmit={(e)=>hanldeCreateCourse(e)}>
                <div className="creation-card-form-area">
                  <label className="creation-card-form-area-title" htmlFor="name">Nombre del curso<span>*</span></label>
                  <input className="creation-card-form-area-input" style={{width: 'auto', textAlign: 'left'}} type="text" name="name" id="name" />
                </div>
                <div className="creation-card-form-area">
                  <label className="creation-card-form-area-title" htmlFor="description">Descripcion<span>*</span></label>
                  <input className="creation-card-form-area-input" style={{width: 'auto', textAlign: 'left'}} type="text" name="description" id="description" />
                </div>
                <div className="creation-card-form-area">
                  <h2 className="creation-card-form-area-title" htmlFor="nameCourse">Fecha Inicio<span>(opcional)</span></h2>
                  <div className="creation-card-form-area-options">
                    <label className="creation-card-form-area-subtitle" htmlFor="courseStartDay">Dia</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="DD" type="text" name="courseStartDay" id="courseStartDay" />
                    <label className="creation-card-form-area-subtitle" htmlFor="courseStartMonth">Mes</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="MM" type="text" name="courseStartMonth" id="courseStartMonth" />
                    <label className="creation-card-form-area-subtitle" htmlFor="courseStartYear">Año</label>
                    <input className="creation-card-form-area-input" style={{width: '50px'}} placeholder="YYYY" type="text" name="courseStartYear" id="courseStartYear" />
                  </div>
                </div>
                <div className="creation-card-form-area">
                  <h2 className="creation-card-form-area-title" htmlFor="nameCourse">Fecha finalizacion<span>(opcional)</span></h2>
                  <div className="creation-card-form-area-options">
                    <label className="creation-card-form-area-subtitle" htmlFor="courseEndDay">Dia</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="DD" type="text" name="courseEndDay" id="courseEndDay" />
                    <label className="creation-card-form-area-subtitle" htmlFor="courseEndMonth">Mes</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="MM" type="text" name="courseEndMonth" id="courseEndMonth" />
                    <label className="creation-card-form-area-subtitle" htmlFor="courseEndYear">Año</label>
                    <input className="creation-card-form-area-input" style={{width: '50px'}} placeholder="YYYY" type="text" name="courseEndYear" id="courseEndYear" />
                  </div>
                  <div className="creation-card-form-area">
                    <label className="creation-card-form-area-subtitle" htmlFor="icon">Subir imagen curso</label>
                    <input className="creation-card-form-area-inputfile" style={{width: '300px'}} type="file" name="icon" id="icon" />
                  </div>
                </div>
                <button className="creation-card-form-button" type="submit">Crear curso</button>
              </form>
            </div>
          );
    }

    if (type === 'exam') {
        return (
            <div className="creation-card">
              <h1 className="creation-card-title">Creando examen</h1>
              <form className="creation-card-form" action="">
                <div className="creation-card-form-area">
                  <label className="creation-card-form-area-title" htmlFor="nameCourse">Nombre del examen<span>*</span></label>
                  <input className="creation-card-form-area-input" style={{width: 'auto', textAlign: 'left'}} type="text" name="nameCourse" id="nameCourse" />
                </div>
                <div className="creation-card-form-area">
                  <h2 className="creation-card-form-area-title" htmlFor="nameCourse">Tiempo para resolverlo<span>(opcional)</span></h2>
                  <div className="creation-card-form-area-options">
                    <label className="creation-card-form-area-subtitle" htmlFor="">Tiempo en minutos</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="00" type="text" name="day" id="day" />
                  </div>
                </div>
                <div className="creation-card-form-area">
                  <h2 className="creation-card-form-area-title" htmlFor="nameCourse">Fecha de inicio</h2>
                  <div className="creation-card-form-area-options">
                    <label className="creation-card-form-area-subtitle" htmlFor="">Dia</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="DD" type="text" name="day" id="day" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Mes</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="MM" type="text" name="month" id="month" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Año</label>
                    <input className="creation-card-form-area-input" style={{width: '50px'}} placeholder="YYYY" type="text" name="year" id="year" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Hora</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="00" type="text" name="hours" id="hours" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Minuto</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="00" type="text" name="minutes" id="minutes" />
                  </div>
                </div>
                <div className="creation-card-form-area">
                  <h2 className="creation-card-form-area-title" htmlFor="nameCourse">Fecha de finalizacion</h2>
                  <div className="creation-card-form-area-options">
                    <label className="creation-card-form-area-subtitle" htmlFor="">Dia</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="DD" type="text" name="day" id="day" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Mes</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="MM" type="text" name="month" id="month" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Año</label>
                    <input className="creation-card-form-area-input" style={{width: '50px'}} placeholder="YYYY" type="text" name="year" id="year" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Hora</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="00" type="text" name="hours" id="hours" />
                    <label className="creation-card-form-area-subtitle" htmlFor="">Minuto</label>
                    <input className="creation-card-form-area-input" style={{width: '40px'}} placeholder="00" type="text" name="minutes" id="minutes" />
                  </div>
                </div>
                <button className="creation-card-form-button" type="submit">Crear examen</button>
              </form>
            </div>
          );
    }

    if (type === 'question') {
        return (
            <div className="creation-card">
              <h1 className="creation-card-title">Agregando Pregunta</h1>
              <h2 className="creation-card-exam-name">Parcial 1</h2>
              <form className="creation-card-form" action="">
                <div className="creation-card-form-area">
                  <label className="creation-card-form-area-title" htmlFor="nameCourse">type de pregunta<span>*</span></label>
                  <input className="creation-card-form-area-input" style={{width: 'auto', textAlign: 'left'}} placeholder="Seleccione el type de pregunta" list="types" name="question-type" id="question-type" />
                  <datalist id="types">
                    <option value="Seleccion multiple" />
                  </datalist>
                </div>
                <div className="creation-card-form-area">
                  <label className="creation-card-form-area-title" htmlFor="nameCourse">Enunciado<span>*</span></label>
                  <input className="creation-card-form-area-input" style={{width: 'auto', textAlign: 'left'}} type="text" name="statement" id="statement" />
                </div>
                <div className="creation-card-form-area">
                  <label className="creation-card-form-area-title" htmlFor="nameCourse">Opciones</label>
                  <ul className="creation-card-form-area-option-list">
                    {options.map((item) => (
                      <li key={item.id} className='creation-card-form-area-option-list-option'>
                        <div className="creation-card-form-area-option-list-option-content">
                          <input className="creation-card-form-area-input" style={{flex: '1'}} type="text" name="question" id="question" />
                          <div className="creation-card-form-area-option-list-option-content-check">
                            <label htmlFor="questionCheck">Correcta</label>
                            <input className="creation-card-form-area-input-checkbox" type="checkbox" name="questionCheck" id="questionCheck" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button className="creation-card-form-button-add" onClick={(e) => handleAddOption(e)}>Agregar Opcion</button>
                </div>
                <button className="creation-card-form-button" type="submit">Agregar pregunta</button>
              </form>
            </div>
          );
    }

    if (type === 'student') {
      return (
          <div className="creation-card">
            <h1 className="creation-card-title">Matriculando estudiante</h1>
            <form className="creation-card-form" action="">
              <div className="creation-card-form-area">
                <label className="creation-card-form-area-title" htmlFor="mailStudent">Correo estudiante<span>*</span></label>
                <input className="creation-card-form-area-input" style={{width: 'auto', textAlign: 'left'}} placeholder="Correo del estudiante" name="student-mail" id="student-mail" />
              </div>
              <div className="creation-card-form-area">
                <label className="creation-card-form-area-title" htmlFor="mailStudent">Agregados</label>
                <ul className="creation-card-form-area-option-list">
                  {students.map((item) => (
                    <li key={item.id} className='creation-card-form-area-option-list-option'>
                      <div className="creation-card-form-area-option-list-option-content">
                        <input className="creation-card-form-area-input" style={{flex: '1'}} type="text" name="question" id="question" />
                        <div className="creation-card-form-area-option-list-option-content-check">
                          <label htmlFor="questionCheck">Correcta</label>
                          <input className="creation-card-form-area-input-checkbox" type="checkbox" name="questionCheck" id="questionCheck" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="creation-card-form-button" type="submit" onClick={(e) => handleAddStudent(e)}>Agregar estudiante</button>
            </form>
          </div>
        );
  }
};

export default CreationCard;
