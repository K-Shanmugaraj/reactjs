
import './App.css'

function App() {

  return (
    <>
    <div className="nav">
        <div><li>Home</li><li>Pages</li><li className="sel">Dropdown <i className="fa-solid fa-caret-down"></i>
            <ul className="sub">
                <li>sub menu1</li>
                <li>sub menu1</li>
                <li>sub menu1</li>
            </ul>
        </li><li>Link Text</li>
    </div>
        <div><img className="img" src="image/logo.png" alt=""/></div>
    </div>
    <div className="box1">
        <div className="cont0">
            <h2>How to Choose the Perfect Plant for Your Space</h2>
            <p>This talk guides customers through selecting plants suited to their specific environments. It covers factors like light conditions, space size, and plant maintenance levels to help individuals find the perfect plant for their home or office, enhancing their living space with greenery that thrives.</p>
            <button>Readmore</button>
        </div>

        <div className="cont0">
            <h2>Caring for Your New Plant: Essential Tips for Beginners</h2>
            <p>Focused on helping new plant owners, this talk provides practical advice on essential plant care. It includes tips on watering, feeding, repotting, and troubleshooting common issues, ensuring that beginners feel confident and equipped to nurture their plants successfully.</p>
            <button>Readmore</button>
        </div>
        <div className="cont0">
            <h2>The Benefits of Buying Plants Online</h2>
            <p>This discussion highlights the advantages of purchasing plants through an online store. It emphasizes the convenience of home delivery, the wide variety of plants available, and the detailed care information provided with each purchase, making it easier for customers to find and care for their ideal plants.</p>
            <button>Readmore</button>
        </div>
    </div>
    <div className="mid1">
        <h2>Community and Education</h2>
        <h2>Community and Education</h2>
    </div>
    <div className="box2">
        <div className="half1">
            
            <p>"If you look the right way, you can see that the whole world is a garden."</p>
            <img src="image/Screenshot-132819.png" alt=''/>
        </div>
        <div className="half2">
            <div><img src="image/Screenshot-132819.png" alt=''/><p><big><b>Advantages of purchasing</b></big><br/><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</small><br/><button>Readmore</button></p></div>
            <div><img src="image/Screenshot-132819.png" alt=''/><p><big><b>Advantages of purchasing</b></big><br/><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</small><br/><button>Readmore</button></p></div>
            <div><img src="image/Screenshot-132819.png" alt=''/><p><big><b>Advantages of purchasing</b></big><br/><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</small><br/><button>Readmore</button></p></div>
        </div>
    </div> 
    <br/>
    <div className="mid2"><h2>"Plants Delivered to Your Doorstep, Happiness Delivered to Your Soul."</h2>
    <p>From low-maintenance succulents and air-purifying houseplants to exotic tropicals and blooming beauties, we offer a diverse range of plants for every space and style.</p></div>
    <div className="box3">
        <div className="bhalf">
            <img className="img" src="image/Screenshot-132819.png" alt=''/>
            <p>We carefully package and ship your plants to ensure they arrive healthy and ready to grow in your home or office.<br/><button>Readmore</button></p>
            
        </div>
        <div className="bhalf">
            <img className="img" src="image/Screenshot-132819.png" alt=''/>
            <p>This discussion highlights the advantages of purchasing plants through an online store. It emphasizes the convenience of home delivery, the wide variety of plants a <br/><button>Readmore</button></p>
        </div>
    </div>
    <div className="box4">
        <div className="ads">
            <h3>LOREM IPSUM DOLOR QUICK</h3>
            <h4>Donec sed ultrices eros. Nulla facilisi: Aliquam purus urna, porta non faucibus nec, luctus vitae ante. Suspendisse potenti. Morbi sollicitudin viverra urna, vel auctor purus volutpat vel.</h4>
            <br/><p><i className="fa-solid fa-location-dot"></i> Street Name & Number,Town, Postcode/Zip</p>
            <br/><p><i className="fa-solid fa-phone"></i> +91 99523 55934</p>
            <br/><p><i className="fa-solid fa-envelope"></i> shanmugarajk@2205.com</p>
        </div>
        <div className="links">
            <h3>QUICK LINKS</h3>
            <li>Home Page</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
        </div>
        <div className="keep">
            <h3>KEEP IN TOUCH</h3>
            <input type="text" placeholder="Email"/><br/>
            <button>SUBMIT</button><br/><br/>
            <i className="fa-brands fa-facebook"></i>&nbsp;
            <i className="fa-brands fa-twitter"></i>{'\u00A0'}
            <i className="fa-brands fa-x-twitter"></i>{'\u00A0'}
            <i className="fa-brands fa-instagram"></i>{'\u00A0'}
            <i className="fa-brands fa-youtube"></i>{'\u00A0'}
            <i className="fa-brands fa-discord"></i>{'\u00A0'}
        </div>
    </div>
    </>
  )
}

export default App
