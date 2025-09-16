import './link.scss'

function Link({label}: {label: string}) {
  return (
    <a href="#" className='link'>{label}</a>
  )
}

export default Link