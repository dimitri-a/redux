import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <div>{completedCount}</div>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
 
  actions: PropTypes.object.isRequired
}

export default MainSection;