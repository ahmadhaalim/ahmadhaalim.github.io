function ProjectTile (props){
    return(
      <a className="project-tile hvr-grow" href={props.link} target='_blank'>
        <div className="project-image">
          <img src={props.img} alt={props.title} />
        </div>
        <span className="textlink" href={props.link} target='_blank'>{props.title}</span>
      </a>
    )
}

const tiles = (
    <div id='projects'>
      <p class="bigtext">These are some of my projects</p>
      <ProjectTile link='https://github.com/ahmadhaalim/NaiveBayesDiscretization' img='resources/diskritisasi.png' title ='Discretization Effects on Naive Bayes Classification'></ProjectTile>       
      <ProjectTile link='https://codepen.io/ahmadhaalim/pen/XWromyW' img='resources/Tribute-Page.png' title ='Tribute Page'></ProjectTile>       
      <ProjectTile link='https://codepen.io/ahmadhaalim/pen/XWWRNBE' img='resources/landingpage.png'title ='Landing Page'></ProjectTile>  
      <ProjectTile link='https://codepen.io/ahmadhaalim/pen/yLBwjBx' img='resources/Survey-Form.png' title ='Survey Form'></ProjectTile>
      <ProjectTile link='https://github.com/ahmadhaalim/DanaPulsa_AndroidAutomation' img='resources/gears.png' title ='Android Test Automation'></ProjectTile>             
    </div>     
);

ReactDOM.render(tiles, document.querySelector('#pcontainer'));

