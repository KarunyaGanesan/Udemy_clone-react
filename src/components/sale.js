//Sale component
import sale from "../assets/images/sale.jpg"

function Sale(){
    return(
        <div class="sale">
        <img src={sale} alt="sale"></img>
          <div class="sale__desc">
            <h2>Udemy Flash Sale -24 hours to Save!!!</h2>
            <p> Get the top courses for just 499. Just one day to save but a lifetime to learn.</p>
          </div>
    </div>
    )
}
export default Sale