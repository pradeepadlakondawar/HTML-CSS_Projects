
const url= "https://api.github.com/users";
const searchInputEl=document.querySelector("#searchInput");
const searchBtnEl=document.querySelector("#searchBtn");
const profileContainerEl=document.querySelector("#profileContainer");
const loadingEl=document.querySelector("#loading");

const generateProfile=(profile)=>{
    return `
        <div class="profileBox">
        <div class="topSection">
            <div class="left">
                <div class="avatar">
                    <img src="${profile.avatar_url}" alt="avatar"/>
                </div>
                <div class="self">
                    <h1>${profile.name}</h1>
                    <h1>@${profile.login}</h1>
                </div>
            </div>
            <a href="${profile.html_url}" target="_black">
            <button class="primaryBtn">Check profile</button>
            </a>
            
        </div>
        <div class="about">
            <h2>About</h2>
            <p>${profile.bio}</p>
        </div>
        <div class="status">
            <div class="statusItem">
                <h3>Followers</h3>
                <p>${profile.followers}</p>
            </div>
            <div class="statusItem">
                <h3>Followings</h3>
                <p>${profile.following}</p>
            </div>
            <div class="statusItem">
                <h3>Repos</h3>
                <p>${profile.public_repos}</p>
            </div>
        </div>
    </div>
    `;
}

const fetchProfile=async()=>{

    const userName=searchInputEl.value;

    loadingEl.innerText="Loading....";
    loadingEl.style.color="black";

    try {
        const res =await fetch(`${url}/${userName}`);
        const data = await res.json();
        // console.log("data",data);

        if(data.bio){
            loadingEl.innerText= "";
            profileContainerEl.innerHTML=generateProfile(data);
        }else{
            loadingEl.innerHTML=data.message;
            loadingEl.style.color="red";
            profileContainerEl.innerText="";
        }
    } catch (error) {
        console.log({error});
        loadingEl.innerText=""; 
    }
};

searchBtnEl.addEventListener("click", fetchProfile);