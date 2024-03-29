import React from 'react'
import './style.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
const BackToTop = () => {
    let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  return (
    <div className='back-to-top' id='myBtn' onClick={()=>topFunction()}>
      <ArrowUpwardRoundedIcon style={{color:'var(--blue)'}}/>
    </div>
  )
}

export default BackToTop
