const btn=document.querySelectorAll('.btn');
const img=document.querySelectorAll('.img')


	btn.forEach((button)=>{
		console.log(button)
		button.addEventListener('click',(e)=>{
			let targetBtn=e.target;
			console.log(targetBtn)
			let btnFilter=targetBtn.getAttribute('data-filter');
			console.log(btnFilter)

			img.forEach((image)=>{
				
			let imgFilter=image.getAttribute('data-filter');
			console.log(imgFilter)

			if(btnFilter!= 'all'){

			if(btnFilter == imgFilter){
				image.style.display  = 'block'
			}else{
					image.style.display  = 'none'
			}

			}else{
				image.style.display  = 'block'
			}

		})
			
			
			







		})
			})
