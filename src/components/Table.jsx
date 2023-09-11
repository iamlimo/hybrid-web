import React from 'react'

const Table = () => {
  return (
    <div className='w-[calc(100vw-106px)] lg:w-[calc(100vw-304px)] mt-6 ml-6 shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-auto whitespace-nowrap'>
        <div className="w-full border-b border-solid p-2 border-[rgba(0,0,0,0.40)]">
            <h1 className='text-xl font-medium'>Newly Uploaded Books</h1>
        </div>
         <table className="w-full text-left text-sm font-light">
          <thead className="text-sm">
            <tr>
              <th scope="col" className="px-6 py-4 font-normal">S/N</th>
              <th scope="col" className="px-6 py-4 font-normal">Title</th>
              <th scope="col" className="px-6 py-4 font-normal">Category</th>
              <th scope="col" className="px-6 py-4 font-normal">Read By</th>
              <th scope="col" className="px-6 py-4 font-normal">Author</th>
              <th scope="col" className="px-6 py-4 font-normal">Date</th>
              <th scope="col" className="px-6 py-4 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 font-medium">6</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
              <td className="whitespace-nowrap px-6 py-4">Adventure</td>
            </tr>
          </tbody>
        </table>
        </div>
  )
}

export default Table
