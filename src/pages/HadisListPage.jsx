import React from 'react'
import { hadises } from '../data/data'
import HadisItem from '../components/HadisItem'
import { Link } from 'react-router-dom'

const HadisListPage = () => {
  console.log(hadises)
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Хадисы
          </p>
          <div className="mt-10">
            {hadises.map((hadis) => (
              <Link key={hadis.id} to={`/hadises/${hadis.id}`}>
                <HadisItem {...hadis} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HadisListPage