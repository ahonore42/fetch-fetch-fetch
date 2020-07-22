console.log('hello world')

const API_URL = 'https://api.spacexdata.com/v3/capsules'

const container = document.querySelector('.container')

fetch(API_URL)
.then(response => {
    // console.log(response);
    return response.json()
})
.then(data => {
    // console.log(data[0])
    // const firstElement = data[0]
    // let capsuleId = firstElement.capsule_id;
    // console.log(capsuleId)
    // let details = firstElement.details;
    // let landings = firstElement.landings;

    for (let i = 0; i < data.length; i++) {
        let eachCapsule = data[i]
        // console.log(eachCapsule)
        const obj = {
            capsuleID: eachCapsule.capsule_id,
            details: eachCapsule.details,
            landings: eachCapsule.landings
        }

        console.log(obj)

        const capsuleElement = document.createElement('p')
        capsuleElement.textContent = obj.capsuleID
        container.appendChild(capsuleElement)
    }
})