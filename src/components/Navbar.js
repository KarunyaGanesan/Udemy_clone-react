// Navbar Component

function Navbar(){
    return(<div class="Navbar">
        <div class="Navbar__s1">
            <h1 class="Navbar__title">Udemy</h1>
        </div>
        <div class="Navbar__s2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for anything here.."/>
        </div>
        <div class="Navbar__s3">
            <p>Courses</p>
           
            <div class="MyLearning">
                <p>My Learning</p>
                <div class="popup">
                    <p> You did not purchase anything</p>
                </div>
            </div>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bell"></i>
            <i class="fa-solid fa-user"></i>

        </div>
        <div class="Navbar__s">
            <i class="fa-solid fa-bars"></i>
        </div>

    </div>)
}
 export default Navbar