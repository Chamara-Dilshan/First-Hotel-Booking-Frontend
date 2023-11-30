import React from 'react'
import './LReviews.css'

export default function LReview() {
    const data = [
        {
            id: 1,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            id: 2,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            id: 3,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            id: 4,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            id: 5,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            id: 6,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            id: 7,
            user: 'John Doe',
            date: '2020-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
            profile: 'https://www.w3schools.com/howto/img_avatar.png'
        },
    ];

    return (
        <div className="LReview">
            <span className='review-header'>Reviews</span>
            <div className='review-content'>
                {data && data.map((item) => (
                    <div className='review-card' key={item.id}>
                        <div className='review-card-header'>
                            <div className='review-card-header-profile'>
                                <img width='40px' src={item.profile} alt='profile' className='card-profile' />
                            </div>
                            <div className='review-card-header-title'>
                                <div className='review-card-header-user'>
                                    <span>{item.user}</span>
                                </div>
                                <div className='review-card-header-date'>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className='review-card-description'>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
