import React from 'react'
import { hadises } from '../data'
import HadisItem from '../components/HadisItem'
import { Link } from 'react-router-dom'

const HadisListPage = () => {
  console.log(hadises)
  return (
    <div>
      <h3>Хадисы</h3>
      <div>
        {hadises.map((hadis) => (
          <Link key={hadis.id} to={`/hadises/${hadis.id}`}>
            <HadisItem {... hadis} />
          </Link>
          ))}
      </div>
    </div>
  )
}

export default HadisListPage