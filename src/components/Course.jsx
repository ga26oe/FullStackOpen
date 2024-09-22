import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
  return (
    <div>
      {course.map((c) => (
        <div key={c.id}>
          <h2>{c.name}</h2>
          <Content parts={c.parts} />{' '}
        </div>
      ))}
    </div>
  )
}

export default Course
