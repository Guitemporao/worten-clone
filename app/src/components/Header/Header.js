import { HeaderCart } from "../Cart/HeaderCart"

export const Header = {
    render: () => {
        return (
            `
             <div class='header'>

                <div class='header_logo'>
                    <a href='/'>
                        <img src="./public/assets/logo/logo.svg" />
                    </a>
                </div>
                
                <div>
                    <input 
                    type='text'
                    id='header_input' 
                    class='header_class_input' 
                    placeholder='O que estás à espera ?' 
                    arial-label='Search'
                    value
                    autocomplete='off'
                    />
                </div>

                <div class='header_cart'>
                    ${HeaderCart()}
                </div>

            </div>
            `
        )
    }
}

