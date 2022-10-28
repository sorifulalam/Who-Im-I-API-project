fetch('https://randomuser.me/api')
    .then(res=>res.json())
    .then(data=>{
        const user = data.results[0];
        const name = `${user.name.title} ${user.name.first} ${user.name.last} `;
        document.getElementById('userName').innerText=name;

        const gender = `${user.gender}`
        document.getElementById('userGender').innerText=gender;

        const location = ` State :${user.location.state} 
         Country: ${user.location.country}
         Postcode: ${user.location.postcode}`
        document.getElementById('userLocation').innerText=location;

        const email = `${user.email}`
        document.getElementById('userEmail').innerText = email;

        const phone = `${user.phone}`
        document.getElementById('userPhone').innerText = phone;

        const picture = `${user.picture.large}`    
        document.getElementById('userpicture').innerText = picture;    
    })