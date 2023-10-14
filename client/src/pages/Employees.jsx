import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, ExcelExport, PdfExport, Edit, Inject, Toolbar  } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-1 md:m-1 p-2 md:p-5'>
      <Header category="Page" title="Employees" />
      <GridComponent
        id='gripcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees