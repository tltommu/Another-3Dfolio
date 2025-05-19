import React from 'react'

const Sidebar = () => {
  return (
    <nav>
    <ul class="sidebar">
      <li></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>


  )
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
export default Sidebar