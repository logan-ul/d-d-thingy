
function g(){
    fetch("https://www.dnd5eapi.co/api/2014/spells/acid-arrow")
          .then((response) => {
            return response.json();
          }).then(data => {
            console.log(data)
          })
        }


g()