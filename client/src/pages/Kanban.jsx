import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
  return (
    <div className='m-1 md:m-2 mt-12 p-2 md:p-5 bg-white rounded-3xl'>
      <Header category="App" title="Kanban Board"/>
      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        keyField='Status'
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => 
            <ColumnDirective key={index} {...item}/>
          )}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban