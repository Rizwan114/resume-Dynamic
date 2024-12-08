const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumePhoto = document.getElementById("resume-Photo") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("Education") as HTMLParagraphElement;
const resumeSkills = document.getElementById("Skills") as HTMLParagraphElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const resumeButton = document.getElementById("submit") as HTMLButtonElement;


form.addEventListener("submit", async (event:Event)=>{
    event.preventDefault()


    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const photo = document.getElementById("Photo") as HTMLInputElement;

    const photoFile = photo.files?   photo.files[0]:null;

    let photoBase64 =``;

    if(photoFile){
        photoBase64 = await fileToBase64(photoFile);
        localStorage.setItem("resume-Photo", photoBase64)

        resumePhoto.src = photoBase64;

    }

    document.querySelector(".resume-container")?.classList.add("hidden");
    resumePage.classList.remove("hidden")

    resumeName.textContent = `Name : ${name}`;
    resumeEmail.textContent = `Email : ${email}`;
    resumePhone.textContent = `Phone : ${phone}`;
    resumeEducation.textContent = `Education:  ${education}`;
    resumeSkills.textContent = `Skills : ${skills}`;
})


function fileToBase64(file:File):Promise<string>{
    return new Promise((res,rej)=>{
        const  reader = new FileReader();

        reader.onloadend = () => res (
            reader.result as string
        )

        reader.onerror = rej ;
        reader.readAsDataURL(file);
    })
}
