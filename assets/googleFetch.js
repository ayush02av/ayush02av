const url = "https://script.google.com/macros/s/AKfycbxCgGIGLCvny1o5DLja6Jwc-LmU__pYU9Zl3Rm2SguTteM6V4fBQIJ8oo1wVW4IX_UINA/exec";

const projectsContainer = $("#projects-data");
var projects = null;

axios
    .get(url)
    .then(function (response) {
        console.log('fetched');
        console.log(response);
        projects = response.data.projects.data;

        var projectsString = "";
        projects.forEach(project => {
            projectsString += `
            <div class="portfolio-section-data-element">
                ${project.id}. <h3 style="display: inline;">${project.title}</h3>

                <br/>
                <small><i>${project.timeline}</i></small>
                
                <br/><br/>
                ${project.live ?
                    `<a class="project-link" target="_blank" href="${project.live}">${project.description}</a>`
                    : `${project.description}`
                }

                <br/><br/>
                <small>${project.tech}</small>

                ${project.source ?
                    `<a class="project-link" target="_blank" href="${project.live}">Source</a>`
                    : ``
                }
            </div>
            `;
        });

        projectsContainer.html(projectsString);

    })
    .catch(function (error) {
    }); 