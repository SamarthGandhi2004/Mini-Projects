const input = document.querySelector('#username');

const profileCard=document.querySelector('.profileCard');

const getRepos = async (user) => {
    try {

        const repository = document.querySelector('.allRepos');
        if (user === "") {
            repository.innerHTML="user doesnt exist"
        }
        else {
            const response = await fetch('https://api.github.com/users/' + user + '/repos');
            const data = await response.json();
            console.log("repos", data);
            if (data.message == "Not Found") {
                repository.innerHTML="no repos";
            }
            else {

                const repoList = data.map(repo => `<li>${repo.name}</li>`).join("");

                repository.innerHTML = `<ul>${repoList}</ul>`;
                
            }

        }
    } catch (error) {
        console.error("Error fetching user repositories:", error);
        return;
    }
}





const getUser = async (user) => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        console.log(data);
        if (data.message === "Not Found") {
            profileCard.innerHTML='<p>User not found</p>'  
        }
        else {
profileCard.innerHTML='';
            const card = `

            <div class="profileContainer">
                <div class="avatar">
                    <img id="avatar" src=${data.avatar_url} alt="User Avatar">
                </div>
                <div class="profileInfo">
                    <h2 class="name">Name: ${data.name}</h2>
                    <p class="bio">Bio: ${data.bio}</p>
                    <p class="location">Location: ${data.location}</p>

                    <ul class="info">
                        <li class="followers">Followers: ${data.followers}</li>
                        <li class="following">Following: ${data.following}</li>
                        <li class="repos">Repositories: ${data.public_repos}</li>
                        <li class="gists">Gists: ${data.public_gists}</li>
                    </ul>

                <div class="allRepos">
                  
                    
                </div>

                </div>
            </div>

        `;

profileCard.innerHTML=card;
getRepos(user);
        }

    } catch (error) {
        console.error("Error fetching user data:", error);
        return;

    }


}


const formSubmit = (event) => {
    event.preventDefault();
    console.log(input.value);
    const userName=input.value.trim();
    if (userName != "") {
        getUser(userName);
        
    }
    return false;
}