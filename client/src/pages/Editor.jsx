import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='m-1 md:m-2 mt-12 p-2 md:p-5 bg-white rounded-3xl'>
      <Header category="App" title="Editor"/>
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor