var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('navbar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.bottom='-60px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.bottom='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});

document.getElementById('scrollButton').addEventListener('click', function() {
  window.scroll({
      top: window.innerHeight,  // Scorre una schermata verso il basso
      behavior: 'smooth'        // Scorrimento fluido
  });
});