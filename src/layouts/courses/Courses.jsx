import React from 'react'
import { CourseCard } from '../../components'
import './courses.css'

const Courses = () => {
  const img = 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80';

  return (
    <div className='courses'>
        <h4 className='header'>Cursos</h4>
        <div className='courses-content'>
            <CourseCard courseName='Quimica Molecular Avanzada' image={img} />
            <CourseCard courseName='Arquitectura de Computadores' image={img} />
            <CourseCard courseName='Matematicas Discretas II' image={img} />
            <CourseCard courseName='Ingles 4' image={img} />
            <CourseCard courseName='Sistemas Operativos' image={img} />
            <CourseCard courseName='Programacion Orientada a Objetos' image={img} />
        </div>
    </div>
  )
}

export default Courses