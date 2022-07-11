if (document.documentElement.clientWidth > 1024) {
    const observer_aboutClient = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
          if (entry.isIntersecting) {
            document.querySelector(".about-client__heading").classList.add('animated');
            setTimeout(() => {document.querySelector(".about-client__text").classList.add('animated')}, 200)
            return;
        }
        document.querySelector(".about-client__heading").classList.remove('animated');
        document.querySelector(".about-client__text").classList.remove('animated')
        });
      });
      
    observer_aboutClient.observe(document.querySelector('.about-client'));
    


    const observer_tasks = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
          if (entry.isIntersecting) {
            document.querySelector(".tasks__heading").classList.add('animated');    
            
            for (let i=0; i<=document.querySelectorAll(".tasks__list__item").length-1; i++) {
                console.log(document.querySelectorAll(".tasks__list__item")[i])
                setTimeout(() => {document.querySelectorAll(".tasks__list__item")[i].classList.add('animated')}, 200)
            }
            return;
        }
        document.querySelector(".tasks__heading").classList.remove('animated');
        for (let i=0; i<=document.querySelectorAll(".tasks__list__item").length - 1; i++) {
            console.log(i)
            setTimeout(() => {document.querySelectorAll(".tasks__list__item")[i].classList.remove('animated')}, 200)
        }
        });
      });
      
    observer_tasks.observe(document.querySelector('.tasks'));
    

}