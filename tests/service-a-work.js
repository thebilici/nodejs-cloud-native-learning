import http from 'k6/http';
import {check} from 'k6';

export const options=
{
    vus: 10,
    duration: '10s',

    thresholds:
    {
        http_req_failed:['rate<0.01'],
        http_req_duration:['p(95)<2000']

    },
};

export default function()
{
    const response =http.get('http://localhost:3000/work');

    check(response, {
        "status 200":(r)=>r.status === 200
    }
    )
}