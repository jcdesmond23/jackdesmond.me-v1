//Hamburber mobile menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const socialLinks = document.getElementsByClassName('socials')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    socialLinks.classList.toggle('active')
    
})

//jQuery smooth scroll
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});