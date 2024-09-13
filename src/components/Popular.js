import aws from "../assets/images/aws.jpg"
import bla from "../assets/images/bla.jpg"
import network from "../assets/images/network.jpg"
import amazon from "../assets/images/amazon.jpg"
import bootcamp from "../assets/images/Bootcamp.jpg"
import java from "../assets/images/JAVA.jpg"
import cc from "../assets/images/cc.jpg"
import google from "../assets/images/google.jpg"


//Popular Component

 function Popular(){
    return(
        <div class="Popular">
        <h1 class="Popular__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="Popular__container">
            <div class="course-card">
                <img src= {aws}></img>
                <h3>AWS Certified Solutions Architect</h3>
                <p>Neal Davis</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>449 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src= {bla}></img>
                <h3>IT Help Desk For Beginners</h3>
                <p>Jason Ruediger</p>
                <p>3.0⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={network}></img>
                <h3> Netwroking Foundations</h3>
                <p>Ross Bagurdes</p>
                <p>4.0⭐⭐⭐</p>
                <p>449 <del>1399</del></p>
            </div>
            <div class="course-card">
                <img src={amazon}></img>
                <h3>AWS Fundamentals: Going Cloud Native</h3>
                <p>Allen Goldberg</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>429 <del>1299</del></p>
            </div>
            <div class="course-card">
                <img src= {bootcamp}></img>
                <h3>Complete Python Bootcamp</h3>
                <p>Jose Portilla</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>449 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={java}></img>
                <h3>The Complete Javascript Course</h3>
                <p>Jonas Schmedtmann</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>429 <del>1299</del></p>
            </div>
            <div class="course-card">
                <img src= {cc}></img>
                <h3>Learning Cloud Computing</h3>
                <p>Brandon Larkin</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>449 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={google}></img>
                <h3>Google IT Support Professional Certificate</h3>
                <p>Emric Grimson</p>
                <p>3.0⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
 }
 export default Popular