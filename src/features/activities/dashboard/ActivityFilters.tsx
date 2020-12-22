import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Calendar } from 'react-widgets'
import { Header, Menu } from 'semantic-ui-react'
import { RootStoreContext } from '../../../app/stores/rootStore';

const ActivityFilters = () => {
  const rootStore = useContext(RootStoreContext);
  const { predicate, setPredicate } = rootStore.activityStore;

  return (
    <>
      <Menu vertical size={'large'} style={{ width: '100%', marginTop: 50 }}>
        <Header icon={'filter'} attached color={'teal'} content={'Filter'} />
        <Menu.Item
          onClick={() => setPredicate('all', 'true')}
          active={predicate.size === 0}
          color={'blue'} name={'all'}
          content={'All Activities'}
        />
        <Menu.Item
          onClick={() => setPredicate('isGoing', 'true')}
          active={predicate.has('isGoing')}
          color={'blue'}
          name={'username'}
          content={"I'm Going"}
        />
        <Menu.Item
          active={predicate.has('isHost')}
          onClick={() => setPredicate('isHost', 'true')}
          color={'blue'}
          name={'host'}
          content={"I'm hosting"}
        />
      </Menu>
      <Header 
        icon={'calendar'} 
        attached 
        color={'teal'} 
        content={'Select Date'} 
      />
      <Calendar 
        onChange={date => setPredicate('startDate', date!)}
        value={predicate.get('startDate') || new Date()}  
      />
    </>
  )
}

export default observer(ActivityFilters);
