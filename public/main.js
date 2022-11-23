
const btn = document.querySelector('button')

const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

const btn2 = document.querySelector('#button2')

const getCat = () => {
    axios.get('http://ec2-34-211-46-152.us-west-2.compute.amazonaws.com/api/cat')
    .then(res => {
        alert(res.data)
    })
    .catch(arr => {
        console.log(arr)
    })
}

btn2.addEventListener('click', getCat)