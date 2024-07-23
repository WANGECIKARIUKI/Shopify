import {Link} from 'react-router-dom';




function Navbar(){



return (

    <nav>
        <div className = "navbar-links">

            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>

                <li>
                    <Link to = '/reviews'>Review</Link>
                </li>

                <li>
                    <Link to = '/productcard'>Productcard</Link>
                </li>

                <li>
                    <Link to = '/checkout'>Checkout</Link>
                </li>

                <li>
                    <Link to = '/cart'>Cart</Link>
                </li>

                <li>
                    <Link to = '/reviewsform'>ReviewsForm</Link>'
                </li>

                <li>
                    <Link to ='/reviewslist'>ReviewsList</Link>
                </li>

                <li>
                    <Link to = '/product'>Product</Link>
                </li> 
            
            </ul>

        </div>
    </nav>
)

}
export default Navbar;