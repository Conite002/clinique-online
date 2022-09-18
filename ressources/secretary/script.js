var showtabs = document.querySelectorAll(".show-table");

showtabs.forEach(elt_showtabs =>{
	elt_showtabs.addEventListener("click",()=>{
		document.querySelectorAll(".section-home-content-table").forEach(elt =>{
			if(!elt.classList.contains(elt_showtabs.id))
				elt.classList.remove('dropdown__content_active');
		}
	)
	let dropdown_content = document.querySelector("."+elt_showtabs.id);
		dropdown_content.classList.toggle('dropdown__content_active');
		// dropdown_content.classList.remove('dropdown__content');
	})
})

