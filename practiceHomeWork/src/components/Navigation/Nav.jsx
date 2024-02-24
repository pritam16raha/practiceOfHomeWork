import './nav.css'
const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    
                        <div className='navBar'>

                            <div className='FlipKart'>
                                <a href='/home'>FlipKart</a>
                            </div>


                            <div className='homeBar'>
                                <div className='home'>
                                    <a href='/home'>Home</a>
                                </div>

                                <div className='about'>
                                    <a href='/about'>About</a>
                                </div>

                                <div className='product'>
                                    <a href='/product'>Product</a>
                                </div>

                                <div className='support'>
                                    <a href='support'>Support</a>
                                </div>
                            </div>

                        </div>
                    
                </ul>
            </nav>


        </>
    )
} 

export default Nav