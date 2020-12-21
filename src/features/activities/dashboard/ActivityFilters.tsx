import React from 'react'
import { Calendar } from 'react-widgets'
import { Header, Menu } from 'semantic-ui-react'

const ActivityFilters = () => {
  return (
    <>
      <Menu vertical size={'large'} style={{width: '100%', marginTop: 50}}>
        <Header icon={'filter'} attached color={'teal'} content={'Filter'}/>
        <Menu.Item color={'blue'} name={'all'} content={'All Activities'} />
        <Menu.Item color={'blue'} name={'username'} content={"I'm Going"} />
        <Menu.Item color={'blue'} name={'host'} content={"I'm hosting"} />
      </Menu>
      <Header icon={'calendar'} attached color={'teal'} content={'Select Date'} />
      <Calendar />
    </>
  )
}

export default ActivityFilters
