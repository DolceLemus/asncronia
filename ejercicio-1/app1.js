
greeting = (name)=>{
    console.log(`Hello ${name}`)
}
const processUserInput = (callback) => {
    let name = `sofia`;
    callback(name);
}

processUserInput(greeting);