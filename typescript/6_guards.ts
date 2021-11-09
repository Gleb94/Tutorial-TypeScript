// function strip( x: string | number){
//     if(typeof x === 'number'){
//         return x.toFixed (fractionDigits =1)
//     }
//     return x.trim()
// }

class MyResponse{
    header = 'response header'
    result = 'response result'
}

class MyError{
    header = 'error header'
    result = 'error massage'
    massage: string
}

function handle(res: MyResponse | MyError){
    if (res instanceof MyResponse){
        return{
            info: res.header + res.result
        }
    }else{
        return{
            info: res.header + res.massage
        }
    }
}

//  ==============

type AlertType = 'success' | 'danger' | 'waning'

function setAlertType(type: AlertType){
    //....
}

// setAlertType (type 'success')
// setAlertType (type 'waning')


