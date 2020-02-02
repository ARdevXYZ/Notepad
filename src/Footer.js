import React from 'react';

const printPage =()=> {
    window.print();
}

class Footer extends React.Component {



    render() {
        return(
            <footer>
                <ul className="main-nav-class">
                    <li>
                        Thank you for visiting Notepad. <button onClick={printPage}>Print this page.</button>
                    </li>
                </ul>
            </footer>
        );
    }

}

export default Footer;