import jwtDecode from 'jwt-decode';

export function callApi(url, metohd, body) {

    let accessToken = localStorage.getItem('accessToken');

    let tokenData;

    try {
        tokenData = jwtDecode (accessToken);
    } catch (event) {
        console.warn(event)
    }

    const currentDate = Math.round(Date.now()/1000);
    const difference = tokenData.exp - currentDate;
    const isAccessTokenValid = difference > 60;

    if (!isAccessTokenValid) {

        const refreshToken = localStorage.getItem("refreshToken");

        const response = await fetch( '/auth/refresh', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({refreshToken}),
        });
        
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data,refreshToken);
            accessToken = data.accessToken;
        } else if (data.error) {
            throw new Error(data.error);
        }

    }
    
    return fetch (url, {
        method,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),

    });

}