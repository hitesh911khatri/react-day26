import { useState } from 'react';

export function Counter() {
    let [like, setLike] = useState(0);
    let [disLike, setDisLike] = useState(0);

    const likeStyles = {
        color: like >= 10 ? "green" : "blue", //conditional styling
        fontSize: "20px"
    };

    const disLikeStyles = {
        color: disLike <= 10 ? "red" : "green",
        fontSize: "20px"
    };

    return (
        <div>
            {/* conditional rendering */}
            {(like - disLike) >= 1 ? <h4>🥰🥰🥰🥰🥰</h4> : <h4>😢😢😢😢😢</h4>}
            <button style={likeStyles} onClick={() => setLike(like + 1)}>
                👍{like}</button>
            <button style={disLikeStyles} onClick={() => setDisLike(disLike + 1)}>
                👎{disLike}</button>
        </div>
    );
}
