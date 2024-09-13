//Receommend component

import datanalytics from "../assets/images/data analytics.jpg"
import ai from "../assets/images/ai.jpg"
import PowerBi from "../assets/images/Power Bi.jpg"
import python from "../assets/images/python.jpg"

function Recommend(){
    return(
        <div class="Recommended">
        <h1 class="Recommended__title">Recommended for you</h1>
        <p class="Recommended__p">Pick the best fit</p>
        <div class="Recommended__cont">
            <div class="course-card">
                <img src={datanalytics}></img>
                <h3>Data Analytics For Decision Making</h3>
                <p>Brandon Larkin</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>449 <del>1499</del></p>
            </div>
            <div class="course-card">
                <img src={ai}></img>
                <h3>Foundation of Artificial Intelligence</h3>
                <p>Andrew Ian</p>
                <p>3.0⭐⭐⭐⭐</p>
                <p>499 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src= {PowerBi}></img>
                <h3> Mastering Power BI:Data Visualization</h3>
                <p>Joel Grus</p>
                <p>4.0⭐⭐⭐</p>
                <p>449 <del>1399</del></p>
            </div>
            <div class="course-card">
                <img src= {python}></img>
                <h3>Python Programming Essentials</h3>
                <p>Hilary Mason</p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>429 <del>1299</del></p>
            </div>
        </div>

    </div>
    )
}

export default Recommend