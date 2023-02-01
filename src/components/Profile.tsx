
// export default function Profile() {
//     return <h1>Profile</h1>;
// }

// export default Profile;

// react function component - rfc

import React from 'react';

interface Props {
    img: string;
    name: string;
    title: string;
}

export const Profile: React.FC<Props> = ({ img, name, title }) => {
    return (
        <div className='profile'>
            <img className='photo'
                src={img}
                alt="avatar"
            />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}

