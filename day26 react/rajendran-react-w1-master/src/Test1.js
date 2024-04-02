import { Counter } from './Counter';

//custom component
export function Test1({ pic, name }) {
    //const { pic, name } = props; //object destructuring feature in ES6
    return ( //inside return is a JSX code and it will be converted to javascript by webpack+babel
        <>
            <img className="img"
                src={pic} alt={name} />
            <h1 className='test'>Hello <span className="nameStyle">{name}</span> ❤😍</h1>
            <Counter />
        </>
    );
}
