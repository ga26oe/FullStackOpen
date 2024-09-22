import Part from './Part'

const Content = ({ parts }) => {
  const total = parts
    .map((o) => o.exercises)
    .reduce((a, c) => {
      return a + c
    })
  console.log(total)

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>Total of {total} exercises</p>
    </div>
  )
}
export default Content
