const input = document.querySelector('#username');


const getUser = async (user) => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        console.log(data);
        if (data.message === "Not Found") {
            //to be done    
        }
        else {

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

                <div class="repos">
                   //to be done
                    
                </div>

                </div>
            </div>

        thth
        `;



        }

    } catch (error) {
        console.error("Error fetching user data:", error);
        return;

    }


}

const formSubmit = (event) => {
    event.preventDefault();
    console.log(input.value);
    if (input.value != "") {
        getUser(input.value);
    }
    return false;
}